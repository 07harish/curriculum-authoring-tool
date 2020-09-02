import * as actionTypes from './Constants'

export const delete_Standard = (row, rowId) => {
  return {
    type: actionTypes.DELETE_STANDARD,
    payload: { row, rowId }
  }
}

export const indent_Standard = (row, rowId) => {
  return {
    type: actionTypes.INDENT_STANDARD,
    payload: { row, rowId }
  }
}

export const outdent_Standard = (row, rowId) => {
  return {
    type: actionTypes.OUTDENT_STANDARD,
    payload: { row, rowId }
  }
}

export const add_Standard = (row, rowId) => {
  return {
    type: actionTypes.ADD_NEW_STANDARD,
    payload: { row, rowId }
  }
}

export const editText_Standard = ({ row, rowId, newText }) => {
  return {
    type: actionTypes.EDIT_STANDARD,
    payload: { row, rowId, newText }
  }
}

export const moveDown_Standard = (row, rowId) => {
  return {
    type: actionTypes.MOVE_DOWN,
    payload: { row, rowId }
  }
}

export const moveUp_Standard = (row, rowId) => {
  return {
    type: actionTypes.MOVE_UP,
    payload: { row, rowId }
  }
}
export const setGlobalState = (newState) => {
  return {
    type: actionTypes.SET_GLOBAL_STATE,
    payload: newState
  }
}
