import React, { useState, useEffect, useContext } from 'react'
import './Styles/Standards.css'
import RenderIndentDepth from './RenderIndentDepth'
import { editText_Standard } from '../Store/Actions'
import { Context } from '../App'

const Standard = ({row, indentDepth = 0, rowId }) => {
  const {dispatch} = useContext(Context)
  const editStandard = (newText) => dispatch(editText_Standard({row, rowId, newText}))

  const styleApply =
    indentDepth === 0 ? 'Standard-Input HeaderStandard' : 'Standard-Input'
  
  return (
    <div className='Standard-Wrapper'>
      <RenderIndentDepth indentDepth={indentDepth}></RenderIndentDepth>
      <span className='Standard-DepthMark'></span>
      <input
        onChange={e => {
          editStandard(e.target.value)
        }}
        placeholder='Enter text of the standard...'
        className={styleApply}
        value={row.headerText}
        type='text'
      ></input>
    </div>
  )
}

export default Standard
