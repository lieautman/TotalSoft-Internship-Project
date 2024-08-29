import React, { useState, useRef, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import appStyle from 'assets/jss/components/appStyle'
import logo from 'assets/img/logo.png'
import miniLogo from 'assets/img/miniLogo.png'
import cx from 'classnames'

import Sidebar from './layout/Sidebar'
import Header from './layout/Header'
import Footer from './layout/Footer'

import AppRoutes from 'routes/AppRoutes'

import { ToastContainer, CheckInternetConnection } from '@bit/totalsoft_oss.react-mui.kit.core'
import LoginPage from './login/LoginPage'
import RegisterPage from './register/RegisterPage'
import useToken from './login/UseToken'
import UserDataProvider from 'providers/UserDataProvider'

const useStyles = makeStyles(appStyle)
const isWeb = () => window.matchMedia('(min-width: 480px)')?.matches

function App(props) {
  const mainPanelRef = useRef()
  const classes = useStyles()
  const { location } = props
  const { i18n } = useTranslation()
  const { token, setToken } = useToken()
  const [isInLogin, setIsInLogin] = useState(true)

  const [drawerOpen, setDrawerOpen] = useState(isWeb())
  window.onresize = _e => setDrawerOpen(isWeb())

  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen(!drawerOpen)
  }, [drawerOpen])

  const handleCloseDrawer = useCallback(() => {
    if (!drawerOpen) return
    setDrawerOpen(false)
  }, [drawerOpen])

  const changeLanguage = useCallback(
    lng => {
      i18n.changeLanguage(lng.target.value)
    },
    [i18n]
  )

  useEffect(() => {
    if (!token) return
    mainPanelRef.current.scrollTop = 0
  }, [location.pathname, token])

  const mainPanel =
    classes.mainPanel +
    ' ' +
    cx({
      [classes.mainPanelSidebarMini]: !drawerOpen
    })

  if (!token) {
    if(isInLogin){
      return <LoginPage isInLogin={isInLogin} setIsInLogin={setIsInLogin} setToken={setToken} />
    }
    else
      return <RegisterPage isInLogin={isInLogin} setIsInLogin={setIsInLogin}></RegisterPage>
  }

  return (
    <div className={classes.wrapper}>
      <Sidebar
        logo={drawerOpen ? logo : miniLogo}
        closeDrawer={handleCloseDrawer}
        changeLanguage={changeLanguage}
        drawerOpen={drawerOpen}
        withGradient={false}
      />
      <div className={mainPanel} ref={mainPanelRef}>
        <Header drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
        <AppRoutes />
        <Footer fluid />
      </div>
      <ToastContainer />
      <CheckInternetConnection />
      <UserDataProvider />
    </div>
  )
}

App.propTypes = {
  location: PropTypes.object.isRequired
}

export default App
