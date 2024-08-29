import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core'
import publicMainStyle from 'assets/jss/components/publicMainStyles'
import { useMutation } from '@apollo/client'
import { gql } from '@apollo/client'
import registerPageStyle from './RegisterPageCss'

const USER_DATA_MUTATION = gql`
  mutation registerUser(
    $userNume: String
    $userPrenume: String
    $userEmail: String
    $userNumartelefon: String
    $userCnp: String
    $userDataNasterii: String
    $userSeriaNumarBuletin: String
    $userParola: String
    $userParola2: String
  ) {
    registerUser(
      userNume: $userNume
      userPrenume: $userPrenume
      userEmail: $userEmail
      userNumartelefon: $userNumartelefon
      userCnp: $userCnp
      userDataNasterii: $userDataNasterii
      userSeriaNumarBuletin: $userSeriaNumarBuletin
      userParola: $userParola
      userParola2: $userParola2
    )
  }
`
const useStyles1 = makeStyles(registerPageStyle)
const useStyles = makeStyles(publicMainStyle)

const RegisterPage = props => {
  const classes1 = useStyles1()
  const classes = useStyles()
  const theme = useTheme()
  const { logo } = theme

  let [nume, setNume] = useState()
  let [prenume, setPrenume] = useState()
  let [email, setEmail] = useState()
  let [numarTelfon, setNumarTelfon] = useState()
  let [cnp, setCnp] = useState()
  let [serieNumarCi, setSerieNumarCi] = useState()
  let [dataNastere, setDataNastere] = useState()
  let [parola, setParola] = useState()
  let [parola2, setParola2] = useState()

  let [eroare, setEroare] = useState('')

  const [handleCLick1] = useMutation(USER_DATA_MUTATION, {
    variables: {
      userNume: nume,
      userPrenume: prenume,
      userEmail: email,
      userNumartelefon: numarTelfon,
      userCnp: cnp,
      userSeriaNumarBuletin: serieNumarCi,
      userDataNasterii: dataNastere,
      userParola: parola,
      userParola2: parola2
    },
    onCompleted: data => {
      if (data.registerUser === 'Inregistrare efectuata!') {
        setEroare('Inregistrare efectuata!')
        props.setIsInLogin(true)
      } else {
        setEroare(data.registerUser)
      }
    }
  })
  const handleCLick2 = async () => {
    props.setIsInLogin(true)
  }

  function afisareEroare() {
    if(eroare!=='')
      return <div className={classes1.hStyle}><h5>{eroare}</h5></div>
  }

  return (
    <Container className={classes.root}>
      <Container className={classes.loginForm} maxWidth='sm'>
        <div className={classes.divStyleRegister}>
          <img src={logo} alt='logo' className={classes.logo} />
          <TextField label={'Nume'} className={classes.filedInRegister} onChange={event => setNume(event.target.value)}></TextField>
          <TextField label={'Prenume'} className={classes.filedInRegister} onChange={event => setPrenume(event.target.value)}></TextField>
          <TextField label={'Cnp'} className={classes.filedInRegister} onChange={event => setCnp(event.target.value)}></TextField>
          <TextField
            label={'Serie si numar CI'}
            className={classes.filedInRegister}
            onChange={event => setSerieNumarCi(event.target.value)}
          ></TextField>
          <TextField
            type='date'
            label={'Data Nastere'}
            className={classes.filedInRegister}
            defaultValue=''
            InputLabelProps={{ shrink: true }}
            fullWidth
            onChange={event => setDataNastere(event.target.value)}
          ></TextField>
          <TextField
            label={'Numar de telefon'}
            className={classes.filedInRegister}
            onChange={event => setNumarTelfon(event.target.value)}
          ></TextField>
          <TextField type='password' label={'Parola'} className={classes.filedInRegister} onChange={event => setParola(event.target.value)}></TextField>
          <TextField
            type='password'
            label={'Confirmare parola'}
            className={classes.filedInRegister}
            onChange={event => setParola2(event.target.value)}
          ></TextField>
          <TextField label={'Email'} className={classes.filedInRegister} onChange={event => setEmail(event.target.value)}></TextField>
          {afisareEroare()}
          <Button className={classes.login} variant='contained' color='primary' size='large' onClick={handleCLick1}>
            {'Inregistrare'}
          </Button>
          <Button className={classes.login} variant='contained' color='primary' size='large' onClick={handleCLick2}>
            {'Back to login'}
          </Button>
        </div>
      </Container>
    </Container>
  )
}

RegisterPage.propTypes = {
  setIsInLogin: PropTypes.func.isRequired,
  isInLogin: PropTypes.bool.isRequired
}

export default RegisterPage
