import React, { useReducer } from 'react'
import { useHistory } from 'react-router'
import ProfileEdit from './ProfileEdit'
import { initialState, reducer } from '../ProfileStateDefine'
//preluare date din cache apollo
import { useApolloClient } from '@apollo/client'
//preluare date
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
//eroare toast
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

const USER_DATA_QUERY = gql`
  query getProfileData($userEmail: String!) {
    getProfileData(userEmail: $userEmail) {
      Id
      Nume
      Prenume
      Email
      Parola
      DataAngajarii
      DataNasterii
      Cnp
      SeriaNumarBuletin
      Numartelefon
      Poza
      Functia
      ManagerId
      Salariu
      EsteAngajatCuActeInRegula
      IdEchipa
    }
  }
`
const USER_DATA_MUTATION = gql`
  mutation modificareDateProfil(
    $userId: Int!
    $userNumeUpdated: String
    $userPrenumeUpdated: String
    $userDataAngajariiUpdated: String
    $userEmailUpdated: String
    $userNumartelefonUpdated: String
    $userDataNasteriiUpdated: String
    $userCnpUpdated: String
    $salariuUpdated: String
    $seriaNumarBuletinUpdated: String
    $pozaUpdated: String
  ) {
    modificareDateProfil(
      userId: $userId
      userNumeUpdated: $userNumeUpdated
      userPrenumeUpdated: $userPrenumeUpdated
      userDataAngajariiUpdated: $userDataAngajariiUpdated
      userEmailUpdated: $userEmailUpdated
      userNumartelefonUpdated: $userNumartelefonUpdated
      userDataNasteriiUpdated: $userDataNasteriiUpdated
      userCnpUpdated: $userCnpUpdated
      salariuUpdated: $salariuUpdated
      seriaNumarBuletinUpdated: $seriaNumarBuletinUpdated
      pozaUpdated: $pozaUpdated
    )
  }
`

function ProfileEditState() {
  //state management
  const [state, dispatch] = useReducer(reducer, initialState)
  //eroare toast
  const addToast = useToast()

  //preluare date din cache apollo
  const client = useApolloClient()
  let date = client.readQuery({
    query: gql`
      query userData {
        userData {
          id
          isAdmin
          isManager
          email
        }
      }
    `
  })

  //query
  useQueryWithErrorHandling(USER_DATA_QUERY, {
    variables: { userEmail: date?.userData?.email },
    skip: !date?.userData?.email,
    onCompleted: data => {
      if (data != undefined || data != null) {
        dispatch({ inputName: 'allObject', inputValue: data.getProfileData, inputType: 'allObject' })
        //refacere data
        let an = data.getProfileData.DataNasterii.substring(0, 4)
        let luna = data.getProfileData.DataNasterii.substring(5, 7)
        let zi = data.getProfileData.DataNasterii.substring(8, 10)
        let dataNastereFormatata = an + '-' + luna + '-' + zi
        dispatch({ inputName: 'DataNasterii', inputValue: dataNastereFormatata, inputType: 'field' })
        let an1 = data.getProfileData.DataAngajarii.substring(0, 4)
        let luna1 = data.getProfileData.DataAngajarii.substring(5, 7)
        let zi1 = data.getProfileData.DataAngajarii.substring(8, 10)
        let dataAngajareFormatata = an1 + '-' + luna1 + '-' + zi1
        dispatch({ inputName: 'DataAngajarii', inputValue: dataAngajareFormatata, inputType: 'field' })
      }
    },
    fetchPolicy: 'network-only'
  })

  //modif date
  function modifyDataProfile(inputName1, inputValue1) {
    dispatch({ inputName: inputName1, inputValue: inputValue1, inputType: 'field' })
  }

  //preluare istoric
  const history = useHistory()
  //update statefrom DB
  const [tratareUpdate] = useMutation(USER_DATA_MUTATION, {
    variables: {
      userId: date?.userData?.id,
      userNumeUpdated: state.Nume,
      userPrenumeUpdated: state.Prenume,
      userEmailUpdated: state.Email,
      userDataAngajariiUpdated: state.DataAngajarii,
      userNumartelefonUpdated: state.Numartelefon,
      userDataNasteriiUpdated: state.DataNasterii,
      userCnpUpdated: state.Cnp,
      seriaNumarBuletinUpdated: state.SeriaNumarBuletin,
      salariuUpdated: state.Salariu,
      pozaUpdated: state.Poza
    },
    skip: !date?.userData?.id,
    onCompleted: data => {
      if (data.modificareDateProfil === 'Inregistrare efectuata!') {
        dispatch({ inputName: 'isErrorOnUpdate', inputValue: false, inputType: 'field' })
        history.push({ pathname: `/profile` })
      } else {
        addToast(data?.modificareDateProfil, 'error')
      }
    }
  })

  return (
    <div>
      <ProfileEdit stare={state} modifyDataProfile={modifyDataProfile} tratareUpdate={tratareUpdate}></ProfileEdit>
    </div>
  )
}

export default ProfileEditState
