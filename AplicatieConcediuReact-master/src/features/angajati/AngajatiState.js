import React, { useReducer } from 'react'
import Angajati from './Angajati'
import { init, reducer } from './AngajatiStateDefine'

//state management
function AngajatiState() {
  const [state] = useReducer(reducer, init)

  return (
    <>
      <Angajati state={state}></Angajati>
    </>
  )
}

export default AngajatiState
