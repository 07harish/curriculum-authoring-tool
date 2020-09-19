import React from 'react'
import './Styles/Usage.css'

const Usage = () => {
  const [show, setshow] = React.useState(true)

  if (!show) return null

  return (
    <div className='modal'>
      <div onClick={() => setshow(false)} role='button' className='modal-close'>
        ✖
      </div>
      <h1>
        <center>📘 Curriculum Authoring Tool</center>
      </h1>
      <h4>
        <center>
          <span role='img'>✨ </span>This can be mainly used to design the
          Syllabus or Curriculum for schools, colleges and elsewhere
        </center>
      </h4>
      <hr></hr>
      <p>
        <span role='img'>✅ </span>You can create Topics and Subtopics. Add
        text, indent, outdent, move and delete rows.
      </p>
      <p>
        <span role='img'>✅ </span>You can import and export as a json file
      </p>
      <ul>
        <li>Indent a row to make it a subtopic</li>
        <li>Outdent a row to make it topic</li>
        <li>Delete a row and it's subrows</li>
        <li>Move a row and it's subrows</li>
      </ul>
    </div>
  )
}

export default Usage
