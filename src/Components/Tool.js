import React, { useContext } from 'react'
import UserActions from './UserActions'
import Standard from './Standard'
import { Context } from '../App'
import './Styles/Tool.css'

const RenderRowsRecursively = ({ rows, subRows }) => {
  if (!rows) {
    return null
  }

  return rows.map((rowId, index) => {
    return (
      <React.Fragment key={index}>
        <div className='Tool-Wrapper'>
          <div className='Tool'>
            <UserActions row={subRows[rowId]} rowId={rowId}></UserActions>
          </div>
          <div className='Tool'>
            <Standard  row={subRows[rowId]}  rowId={rowId} indentDepth={subRows[rowId].indentDepth}></Standard>
          </div>
        </div>
        <RenderRowsRecursively
          subRows={subRows}
          rows={subRows[rowId].subRows}
        />
      </React.Fragment>
    )
  })
}

const Tool = () => {
  const {
    store: {
      normalizedLookup: { root },
      alldata: {subRows}
      // data: { Tool }
    }
  } = useContext(Context)
  console.log('skjdf', useContext(Context))
  // return <RenderRowsRecursively rows={Tool} />
  return <RenderRowsRecursively subRows={subRows} rows={root} />
}

export default Tool
