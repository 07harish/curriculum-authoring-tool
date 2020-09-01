import React from 'react'
import ToolHeader from '../Components/ToolHeader'
import Tool from '../Components/Tool'
import Subject from '../Components/Subject'
import './Styles/CurriculumAuthoringTool.css'
import AddRow from '../Components/Styles/AddRow'

const CurriculumAuthoringTool = () => {
  return (
    <div className='CurriculumAuthoringTool'>
      <Subject></Subject>
      <hr></hr>
      <ToolHeader></ToolHeader>
      <hr></hr>
      <Tool></Tool>
      <hr></hr>
      <AddRow></AddRow>
    </div>
  )
}

export default CurriculumAuthoringTool
