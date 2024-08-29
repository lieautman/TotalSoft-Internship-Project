import { AdbRounded } from '@material-ui/icons'

const carduri = theme => {
  return {
    displayCarduri: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '1rem',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        width:'1500px',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width:'900px',
      }
    }
  }
}
export default carduri
