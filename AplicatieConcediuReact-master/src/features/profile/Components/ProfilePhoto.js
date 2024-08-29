import React from 'react'
import PropTypes from 'prop-types'

function ProfilePhoto(props) {
  //const addToast = useToast()
  // addToast('Welcome', 'success')
  return (
    <div>
      {' '}
      <img className={props.idDat} src={'data:image/*;base64,' + props.pozaData} alt='Poza profil' />
    </div>
  )
}
ProfilePhoto.propTypes = {
  idDat: PropTypes.string.isRequired,
  pozaData: PropTypes.string
}
export default ProfilePhoto
