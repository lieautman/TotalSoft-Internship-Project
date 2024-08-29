import React, { useReducer, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { TextField, Typography } from '@material-ui/core'
import publicMainStyle from 'assets/jss/components/publicMainStyles'
import { initialState, reducer } from './reducers/loginReducer'
import { useMutation } from '@apollo/client'
import { AUTHENTICATE_USER } from './mutations'
import { useHistory } from 'react-router'

const useStyles = makeStyles(publicMainStyle)

const LoginPage = props => {
  const { setToken } = props
  const theme = useTheme()
  const { logo } = theme
  const classes = useStyles()
  const [localState, dispatch] = useReducer(reducer, initialState)
  const [authenticateUser] = useMutation(AUTHENTICATE_USER)
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('')
  const history = useHistory()

  const handleChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChanged', propertyName, value })
  }

  const handleCLick = async () => {
    history.push({ pathname: `/` })
    setHelperText('')
    if (!localState.userName || !localState.password) {
      setError(true)
      setHelperText('Username and passwords are mandatory.')
      return
    }
    const { data } = await authenticateUser({ variables: { userName: localState.userName, password: localState.password } })

    if (!data.authenticateUser) {
      setError(true)
      setHelperText('Invalid Username or Password.', 'error')
      return
    }
    setError(false)
    setToken('token')
  }
  const handleCLick2 = async () => {
    props.setIsInLogin(false)
  }

  return (
    <Container className={classes.root}>
      <Container className={classes.loginForm} maxWidth='sm'>
        <div className={classes.paper}>
          <img src={logo} alt='logo' className={classes.logo} />
          <TextField label={'Username'} onChange={event => handleChange('userName', event.target.value)}></TextField>
          <TextField type='password' label={'Password'} onChange={event => handleChange('password', event.target.value)}></TextField>
          {error && <Typography color='error'>{helperText}</Typography>}
          <Button className={classes.login} variant='contained' color='primary' size='large' onClick={handleCLick}>
            {'Login'}
          </Button>
          <Button className={classes.login} variant='contained' color='primary' size='large' onClick={handleCLick2}>
            {'Register'}
          </Button>
        </div>
      </Container>
    </Container>
  )
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
  setIsInLogin: PropTypes.func.isRequired,
  isInLogin: PropTypes.bool.isRequired,
}

export default LoginPage
