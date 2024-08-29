const culoare = theme => {
  return {
    culoareButoane: {
      backgroundColor: '#05241d',
      width: '60px',
      height: '30px',
      borderRadius: '25px',
      color: 'white',
      '&:hover': {
        backgroundColor: '#26c6da'
      }
    }

    // culoareButoane :hover {
    //     background: #003366;
    //     transition: 0.5s background;
    //   }
  }
}
export default culoare
