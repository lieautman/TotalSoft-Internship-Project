import React from 'react'
import { Dashboard } from '@material-ui/icons'
import { People } from '@material-ui/icons'
import { PersonAdd } from '@material-ui/icons'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import DateRangeIcon from '@material-ui/icons/DateRange'

const menuItems = [
  { icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
  { icon: <DateRangeIcon />, text: 'NavBar.ToateConcediile', path: '/toateConcediile', name: 'ToateConcediile' },
  { icon: <People />, text: 'NavBar.Angajati', path: '/angajati', name: 'Angajati' },
  { icon: <ExitToAppIcon />, text: 'NavBar.Delogare', path: '/logout', name: 'Delogare' }
]
export default menuItems
