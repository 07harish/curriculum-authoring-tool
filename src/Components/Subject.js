import React, { useContext, useCallback } from 'react'
import './Styles/Subject.css'
import { Context } from '../App'
import { downloadJsonFile } from '../Utils/DownloadJson'
import { onUpload } from '../Utils/Upload'
import { setGlobalState } from '../Store/Actions'

const Subject = () => {
  const { store, dispatch } = useContext(Context)
  const {
    alldata: { subject }
  } = store

  const uploadNewState = useCallback(
    newState => {
      dispatch(setGlobalState(newState))
    },
    [dispatch]
  )

  return (
    <>
      <div className='Subject-Wrapper'>
        <h2>{subject}</h2>
        <div className='Subject-CTA'>
          <button onClick={() => downloadJsonFile(store.alldata)}>
            Download
          </button>
          <button>
            <label>
              Upload{' '}
              <input
                id='contentFile'
                onChange={e =>
                  onUpload(e, file => {
                    uploadNewState(file)
                  })
                }
                type='file'
                accept='application/json'
              />
            </label>
          </button>
        </div>
      </div>
    </>
  )
}

export default Subject
