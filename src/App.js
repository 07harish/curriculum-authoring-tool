import React, { createContext } from 'react'
import CurriculumAuthoringTool from './Container/CurriculumAuthoringTool'
import useGlobalStore from './Store/useGlobalStore'
import './App.css'

export const Context = createContext()

function App () {
  const { store, dispatch } = useGlobalStore()
  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className='App'>
        <CurriculumAuthoringTool></CurriculumAuthoringTool>
      </div>
    </Context.Provider>
  )
}

export default App
