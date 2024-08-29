import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ErrorIcon from '@material-ui/icons/Error';
import PropTypes from 'prop-types'

function selectiveDisplay(style, type) {
  switch (type) {
    case 'adress':
      return <LocationOnIcon className={style} />
    case 'email':
      return <MailOutlineIcon className={style} />
    case 'phone':
      return <PhoneAndroidIcon className={style} />
    default:
      return <ErrorIcon className={style} />
  }
}

function AdressEmailPhonePhoto(props) {
  //const addToast = useToast()
  // addToast('Welcome', 'success')
  return <div>{selectiveDisplay(props.idDat, props.type)}</div>
}
AdressEmailPhonePhoto.propTypes = {
  idDat: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
export default AdressEmailPhonePhoto
