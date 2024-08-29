import background from 'assets/img/welcome.png'

const publicMainStyle = theme => {
  return {
    divStyleRegister:{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    filedInRegister:{
      width:"500px",
    },
    root: {
      background: `url(${background})`,
      minHeight: '100%',
      minWidth: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'fixed',
      display: "flex",
      alignItems:"center",
    },
    loginForm: {
      background: 'white',
      display: 'block',
      boxShadow: '0 1px 10px rgba(0,0,0,0.3)',
      position: 'relative',
    },
    paper: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    logo: {
      margin: theme.spacing(1),
      minHeight: '100px',
      maxHeight: '100px'
    },
    login: {
      margin: theme.spacing(1, 0, 1),
      textTransform: 'none'
    },
    buttonFooter: {
      height: '32px',
      width: '100%',
      fontSize: '11px',
      color: '#ccc'
    },
    gridFooter: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '32px',
      backgroundColor: '#444'
    },
    gridFooterItem: {
      padding: '0 8px !important'
    },
    card: {
      paddingLeft: '20px',
      paddingBottom: '15px',
      paddingRight: '20px',
      paddingTop: '15px'
    },
    firstCardPadding: {
      paddingTop: '20px'
    },
    doneButton: {
      width: '-webkit-fill-available'
    },
    statement: {
      overflow: 'auto',
      height: '60vh',
      marginTop: '20vh'
    },
    loadingArea: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      display: 'block',
      boxShadow: '0 1px 10px rgba(0,0,0,0.3)'
    },
    scrollArea: {
      overflow: 'auto',
      height: '100vh'
    },
    padding25: {
      padding: '25px'
    },
    paddingTopBottom10: {
      padding: '10px 0'
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'center'
    },
    subtitle: {
      fontWeight: 'bold',
      padding: '5px 0'
    },
    note: {
      padding: '20px 0 10px'
    },
    logoWrapper: {
      width: '250px',
      height: '100px',
      display: 'flex',
      margin: 'auto'
    },
    wrappedImg: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      margin: 0
    },
    gifWrapper: {
      width: '350px',
      height: '200px',
      display: 'flex'
    },
    publicFooterContainer: {
      paddingTop: '20px',
      paddingBottom: '50px'
    },
    publicHeaderFooterGrid: {
      backgroundColor: 'white',
      borderRadius: '5px'
    }
  }
}
export default publicMainStyle
