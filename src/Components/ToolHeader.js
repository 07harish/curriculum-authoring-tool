import React from 'react'
import "./Styles/ToolHeader.css"
const ToolHeader = () => {
  return (
    <>
      <div className='ToolHeader-Wrapper'>
        <div className='ToolHeader'>
          <div><b>Actions</b></div>
          <small>( Move, Indent, Outdent, Delete )</small>
        </div>
        <div className='ToolHeader'>
          <div><b>Standard</b></div>
          <small>The text of the standard</small>
        </div>
      </div>
    </>
  )
}

export default ToolHeader
