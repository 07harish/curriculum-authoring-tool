import React, { useCallback, useContext } from 'react'
import { add_Standard } from '../Store/Actions'
import { Context } from '../App'

const AddRow = () => {
  const { dispatch } = useContext(Context)
  const addNewStandard = useCallback(() => dispatch(add_Standard()), [dispatch])

  return (
    <>
      <button className='btn' onClick={addNewStandard}>
      <i className="fas fa-plus"></i> Add New Standard
      </button>
    </>
  )
}

export default AddRow
