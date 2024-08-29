import React, { Fragment } from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CreareConcediuCSS from './CreareConcediuCSS'
import Button from '@material-ui/core/Button'
import { useHeader } from 'providers/AreasProvider'
import CreareConcediuComp from './CreareConcediuComp'
import { useReducer } from 'react'
import { initialState, reducer } from './CreareConcediuState'
import { POST_ADAUGACONCEDIU } from './mutation'
import { useMutation } from '@apollo/client'
import { gql, useApolloClient } from '@apollo/client'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

const useStyles = makeStyles(CreareConcediuCSS)

function CreareConcediu() {
  const addToast = useToast()
  const classes = useStyles()
  const [localState, dispatch] = useReducer(reducer, initialState)
  const handleChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChanged', propertyName, value })
  }
  const client = useApolloClient()
  const date = client.readQuery({
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
  const [adaugaConcediu] = useMutation(POST_ADAUGACONCEDIU)
  const handleClick = async () => {
    await adaugaConcediu({
      variables: {
        input: {
          angajatId: date?.userData?.id,
          tipConcediuId: localState.tipConcediuId,
          dataInceput: localState.dataInceput.toISOString().split('T')[0],
          dataSfarsit: localState.dataSfarsit.toISOString().split('T')[0],
          inlocuitorId: localState.inlocuitorId,
          comentarii: localState.comentarii,
          stareConcediuId: localState.stareConcediuId
        }
      },
      onCompleted: data => {
        if (data.adaugaConcediu === 'Inregistrare efectuata!') {
          addToast(data?.adaugaConcediu, 'success')
        } else {
          addToast(data?.adaugaConcediu, 'error')
        }
      }
    })
  }

  useHeader(
    <div variant='subtitles1' className={classes.stilTitlu}>
      {'Adauga un concediu nou'}
    </div>
  )
  console.log(localState)
  return (
    <Fragment>
      <Container className={classes.container} maxWidth='sm'>
        <CreareConcediuComp handleChange={handleChange} localState={localState}></CreareConcediuComp>

        <button className={classes.StyleBtn} align='center' variant='contained' color='primary' size='large' onClick={handleClick}>
          {' '}
          ADAUGA
        </button>
      </Container>
    </Fragment>
  )
}

export default CreareConcediu
