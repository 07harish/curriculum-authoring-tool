import React, { useContext, useCallback } from 'react'
import { Context } from '../App'
import {
  delete_Standard,
  indent_Standard,
  outdent_Standard,
  moveDown_Standard,
  moveUp_Standard
} from '../Store/Actions'
import './Styles/UserActions.css'

const UserActions = React.memo(({ row, rowId }) => {
  const { dispatch } = useContext(Context)
  const indentRow = useCallback(() => dispatch(indent_Standard(row, rowId)), [row, rowId, dispatch])
  const deleteRow = useCallback(() => dispatch(delete_Standard(row, rowId)), [row, rowId, dispatch])
  const outdentRow = useCallback(() => dispatch(outdent_Standard(row, rowId)), [row, rowId, dispatch])
  const moveDown = useCallback(() => dispatch(moveDown_Standard(row, rowId)), [row, rowId, dispatch])
  const moveUp = useCallback(() => dispatch(moveUp_Standard(row, rowId)), [row, rowId, dispatch])

  return (
    <div className='UserActions-Wrapper'>
      <span
        title='Move Down'
        onClick={() => {
            moveDown()
        }}
        className='UserActions'
      >
        <i className='fas fa-arrow-down'></i>
      </span>
       <span
        title='Move Up'
        onClick={() => {
            moveUp()
        }}
        className='UserActions'
      >
        <i className='fas fa-arrow-up'></i>
      </span>
      <span
        title='Indent'
        onClick={() => {
          indentRow()
        }}
        className='UserActions'
      >
        <i className='fas fa-chevron-right'></i>
      </span>
      <span
        title='Outdent'
        onClick={() => {
          outdentRow()
        }}
        className='UserActions'
      >
        <i className='fas fa-chevron-left'></i>
      </span>
      <span
        title='Delete'
        onClick={() => {
          deleteRow()
        }}
        className='UserActions'
      >
        <i className='fas fa-trash-alt'></i>
      </span>
    </div>
  )
})

export default UserActions
