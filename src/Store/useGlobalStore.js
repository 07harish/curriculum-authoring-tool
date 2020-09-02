// Hook for state management

import { useReducer } from 'react'
import * as actionTypes from './Constants'
import { alldata } from '../Data/subjectData'
import {
  constructTree,
  findWhereParentExists,
  findDepth,
  normalizedLookupFn
} from '../Utils/Normalize'

function Reducer (state, action) {
  const {
    type,
    payload: { row, rowId }
  } = action
  const { normalizedLookup, alldata } = state

  const rowParent = row && row.parent
  const rowIndex =
    normalizedLookup[rowParent] && normalizedLookup[rowParent].indexOf(rowId)
  switch (type) {
    case actionTypes.INDENT_STANDARD:
      const prevElementToRow = normalizedLookup[rowParent][rowIndex - 1]
      // Don't allow row to get past its parent
      if (!prevElementToRow) {
        return state
      }

      const subRowsOfRow = normalizedLookup[rowId]
      // if subrows of prevElementToRow exists on the lookup
      if (normalizedLookup[prevElementToRow]) {
        // add rowId after if prevElementToRow already has subrows
        normalizedLookup[prevElementToRow] = [
          ...normalizedLookup[prevElementToRow],
          rowId // after
        ]
        // remove rowId from an array
        normalizedLookup[rowParent].splice(rowIndex, 1)
        // if rowId also has it's own subrows on lookup, add subrows to prevElementToRow
        if (normalizedLookup[rowId]) {
          normalizedLookup[prevElementToRow] = [
            ...normalizedLookup[prevElementToRow],
            ...normalizedLookup[rowId]
          ]
          delete normalizedLookup[rowId]
        }
      } else {
        normalizedLookup[prevElementToRow] = subRowsOfRow
          ? [rowId, ...subRowsOfRow] // before
          : [rowId] // handle !subrows
        delete normalizedLookup[rowId]
        normalizedLookup[rowParent].splice(rowIndex, 1)
      }
      // After modifying lookup, Run construct tree to get new tree
      return {
        ...state,
        alldata: constructTree(normalizedLookup, alldata)
      }

    case actionTypes.OUTDENT_STANDARD:
      const getKeyAndIndex = findWhereParentExists(rowParent, normalizedLookup)
      // if row is tried to outdent to depth -1, return state.
      if (!getKeyAndIndex) return state

      // Row can be outdented till depth 0

      let { key, index } = getKeyAndIndex
      normalizedLookup[key].splice(index + 1, 0, rowId)
      let deleteRow = normalizedLookup[rowParent].indexOf(rowId)
      normalizedLookup[rowParent].splice(deleteRow, 1)
      if (normalizedLookup[rowParent].length === 0)
        delete normalizedLookup[rowParent]

      return {
        ...state,
        alldata: constructTree(normalizedLookup, alldata)
      }

    case actionTypes.DELETE_STANDARD:
      // DELETE from current array
      let deleteIndex = normalizedLookup[rowParent].indexOf(rowId)
      normalizedLookup[rowParent].splice(deleteIndex, 1)

      function deleteSubrowsRecursively (id, arr) {
        if (normalizedLookup[id]) {
          arr.forEach((element, i) => {
            let newId = element
            if (normalizedLookup[newId]) {
              deleteSubrowsRecursively(newId, normalizedLookup[newId])
            } else {
              let { key, index } = findWhereParentExists(
                newId,
                normalizedLookup
              )
              normalizedLookup[key].splice(index, 1)
            }
          })
        } else {
        }
      }
      deleteSubrowsRecursively(rowId, normalizedLookup[rowId])

      return { ...state, alldata: constructTree(normalizedLookup, alldata) }

    case actionTypes.ADD_NEW_STANDARD:
      function findRecentlyAddedRow (arr) {
        let newElement = arr[arr.length - 1]
        if (normalizedLookup[newElement]) {
          findRecentlyAddedRow(normalizedLookup[newElement])
        } else {
          newElement = 'root'
        }
        return newElement
      }
      const uniqueId = JSON.stringify(Date.now())

      let addToLast = 'root'
      if (normalizedLookup.root.length) {
        addToLast = findRecentlyAddedRow(normalizedLookup.root)
      }

      const newStandard = {
        [uniqueId]: {
          headerText: '',
          parent: addToLast,
          indentDepth:
            addToLast === 'root'
              ? 0
              : findDepth(addToLast, normalizedLookup) + 1
        }
      }

      let newTree = { ...alldata }
      if (addToLast === 'root') {
        newTree.root = [...newTree.root, uniqueId]
        newTree.subRows.root = [...newTree.root]
        newTree.subRows = newTree.subRows
          ? { ...newTree.subRows, ...newStandard }
          : { ...newStandard }
      } else {
        newTree.subRows = { ...newTree.subRows, ...newStandard }
        if (!newTree.subRows[addToLast].subRows) {
          newTree.root = [...newTree.root, uniqueId]
        } else {
          newTree.subRows[addToLast].subRows = [
            ...newTree.subRows[addToLast].subRows,
            uniqueId
          ]
        }
      }

      let newnorm = normalizedLookupFn(newTree)
      return {
        ...state,
        alldata: newTree,
        normalizedLookup: newnorm
      }

    // EDIT_STANDARD

    case actionTypes.EDIT_STANDARD:
      let editingTree = { ...alldata }
      editingTree.subRows[rowId].headerText = action.payload.newText

      return { ...state, alldata: editingTree }

    case actionTypes.MOVE_DOWN:
      let cloneLookUp = { ...normalizedLookup }
      let moveDownIndex = cloneLookUp[rowParent].indexOf(rowId)

      // If row is already at the bottom position, return state, no swap
      if (!cloneLookUp[rowParent][moveDownIndex + 1]) {
        return state
      }

      // swap current index with next index
      let tempNextIndex = cloneLookUp[rowParent][moveDownIndex + 1]
      cloneLookUp[rowParent][moveDownIndex + 1] =
        cloneLookUp[rowParent][moveDownIndex]
      cloneLookUp[rowParent][moveDownIndex] = tempNextIndex

      return { ...state, normalizedLookup: cloneLookUp }

    case actionTypes.MOVE_UP:
      let lookUpClone = { ...normalizedLookup }
      let moveUpIndex = lookUpClone[rowParent].indexOf(rowId)

      // If row is already at the top position, return state, no swap
      if (!lookUpClone[rowParent][moveUpIndex - 1]) {
        return state
      }

      // swap current index with prev index
      let tempPrevIndex = lookUpClone[rowParent][moveUpIndex - 1]
      lookUpClone[rowParent][moveUpIndex - 1] =
        lookUpClone[rowParent][moveUpIndex]
      lookUpClone[rowParent][moveUpIndex] = tempPrevIndex

      return { ...state, normalizedLookup: lookUpClone }

    case actionTypes.SET_GLOBAL_STATE:
      let newInitLookUp = normalizedLookupFn(action.payload)
      let newJsonData = constructTree(newInitLookUp, action.payload)
      return { ...state, alldata: newJsonData, normalizedLookup: newInitLookUp }

    default:
      return { state }
  }
}

const useGlobalStore = () => {
  let normalizedLookup = normalizedLookupFn(alldata)
  let tree = constructTree(normalizedLookup, alldata)
  const [store, dispatch] = useReducer(Reducer, {
    alldata: tree,
    normalizedLookup
  })
  return { store, dispatch }
}

export default useGlobalStore
