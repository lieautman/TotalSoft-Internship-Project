import React, { useReducer } from 'react'
import Promovare from './Promovare'
import { initialState, reducer } from './PromovareStateDefine'

//state management
function PromovareState() {
  const [state, dispatch] = useReducer(reducer, initialState)
  //query

  return (
    <>
      <Promovare state={state} dispatch={dispatch}></Promovare>
    </>
  )
}

export default PromovareState
