import { withTheme } from '@material-ui/core'
import { findLastIndex } from 'ramda'

const Adauga_Angajatcss = theme => {
  return {
    StyleBtn: {
      [theme.breakpoints.down('lg')]: {
        marginLeft: '12rem'
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: '30rem'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '7rem'
      },
      fontStyle: 'normal',
      backgroundColor: '#26c6da',
      color: ' white',
      border: 'none',
      height: '4rem',
      width: '15rem',
      marginTop: '5rem',
      borderRadius: '50px',
      fontSize: '15px'
    },
    containeradaugaaangajat: {
      color: '#1565c0',
      fontWeight: 'bold',
      fontSize: '5rem',
      [theme.breakpoints.down('lg')]: {
        display: 'inline'
      },
      [theme.breakpoints.up('lg')]: {
        display: 'flex'
      },
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: '2rem'
    },
    containeradaugaangajatleft: {
      [theme.breakpoints.down('sm')]: {
        marginLeft: '5rem'
      },
      marginLeft: '10rem'
    },
    containeradaugaangajatright: {
      [theme.breakpoints.down('lg')]: {
        marginLeft: '10rem'
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: '0rem'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '5rem'
      },
    },
    StyleTxt: {
      color: ' #05241d',
      fontWeight: 'bold',
      fontSize: '20px',
      alignSelf: 'center'
    },
    Combobox: {
      width: 300,
      marginTop: '1rem'
    },
    TextField: {
      marginTop: '1rem',
      width: 300
    },
    stilTitlu: {
      color: '#555555',
      fontWeight: 'bold',
      borderRadius: '3px',
      textTransform: 'none',
      fontSize: '1.1428571428571428rem',
      fontFamily: 'Source Sans Pro',
      lineHeight: '1.75'
    }
  }
}
export default Adauga_Angajatcss
