import React, { useContext } from 'react'
import './Styles/Subject.css'
import { Context } from '../App'
import { downloadJsonFile } from '../Utils/DownloadJson'

const Subject = () => {
  const { store } = useContext(Context)
  const { alldata: { subject } } = store
  return (
    <>
      <div className='Subject-Wrapper'>
        <h3>{subject}</h3>
        <div className='Subject-CTA'>
          <button onClick={() => downloadJsonFile(store.alldata)}>Download</button>
          <button onClick={() => downloadJsonFile(store.alldata)}>Upload</button>
        </div>
      </div>
    </>
  )
}

export default Subject
