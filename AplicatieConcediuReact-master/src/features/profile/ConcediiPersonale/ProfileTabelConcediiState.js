import React, { useReducer } from 'react'
import ProfileTabelConcedii from './ProfileTabelConcedii'
import { initialState, reducer } from './ProfileTabelConcediiStateDefine'
import PropTypes from 'prop-types'
import { gql } from '@apollo/client'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'

const USER_TABLE_QUERY = gql`
  query preluareProfilePageTable($userEmail: String, $indexStart: Int, $indexEnd: Int, $numarElemPePagina: Int) {
    preluareProfilePageTable(userEmail: $userEmail, indexStart: $indexStart, indexEnd: $indexEnd, numarElemPePagina: $numarElemPePagina) {
      listaConcedii {
        id
        tipConcediu
        dataSfarsit
        dataInceput
        numeInlocuitor
        comment
        stareConcediu
      }
      numarPagini
    }
  }
`

function ProfileTabelConcediiState(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  //query
  useQueryWithErrorHandling(USER_TABLE_QUERY, {
    variables: { userEmail: props.emailUtilizator, indexStart:state.indexStartActual, indexEnd:state.indexEndActual, numarElemPePagina:state.numarElemPePag },
    skip: !props.emailUtilizator,
    onCompleted: data => {
      if (data != undefined || data != null) {
        dispatch({ inputName: 'tableData', inputValue: data.preluareProfilePageTable.listaConcedii, inputType: 'field' })
        dispatch({ inputName: 'numarPagini', inputValue: data.preluareProfilePageTable.numarPagini, inputType: 'field' })
      }
    },
    fetchPolicy: 'network-only'
  })
  return (
    <ProfileTabelConcedii
      emailUtilizator={props.emailUtilizator}
      idDat={props.idDat}
      idDivButoane={props.idDivButoane}
      idDatButonInainte={props.idDatButonInainte}
      idPagLabel={props.idPagLabel}
      idDatButonInapoi={props.idDatButonInapoi}
      state={state}
      dispatch={dispatch}
    ></ProfileTabelConcedii>
  )
}
ProfileTabelConcediiState.propTypes = {
  emailUtilizator: PropTypes.string.isRequired,
  idDat: PropTypes.string.isRequired,
  idDivButoane: PropTypes.string.isRequired,
  idDatButonInainte: PropTypes.string.isRequired,
  idPagLabel: PropTypes.string.isRequired,
  idDatButonInapoi: PropTypes.string.isRequired
}
export default ProfileTabelConcediiState
