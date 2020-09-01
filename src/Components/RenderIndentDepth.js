import React from 'react'

const RenderIndentDepth = ({ indentDepth = 0 }) => {
  return (
    <span
      style={{
        paddingLeft: `${indentDepth === 0 ? 0 : indentDepth * 28}px`
      }}
    ></span>
  )
}

export default RenderIndentDepth
