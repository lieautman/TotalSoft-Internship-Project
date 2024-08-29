import { withTheme } from '@material-ui/core'

import { findLastIndex } from 'ramda'

const CreareConcediuCSS = theme => {
  return {
    StyleBtn: {
      align: 'center',
      fontStyle: 'normal',
      backgroundColor: '#26c6da',
      color: 'white',
      border: 'none',
      height: '50px',
      width: '150px',
      marginTop: '30px',
      marginLeft: '150px',

      borderRadius: '50px',
      [theme.breakpoints.down('lg')]: {
        marginLeft: '9rem'
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: '9rem'
      }
    },
    datePicker: { display: 'flex', marginTop: '1 rem', marginLeft: '50px' },

    title: { marginLeft: '70px' },
    container: {
      display: 'flex',

      flexDirection: 'column',
      padding: '0',
      marginTop: '2rem'
    },
    TextField: {
      marginTop: '1rem',
      display: 'flex',
      flexDirection: 'row',

      width: 200,
      marginLeft: '150px'
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

export default CreareConcediuCSS
