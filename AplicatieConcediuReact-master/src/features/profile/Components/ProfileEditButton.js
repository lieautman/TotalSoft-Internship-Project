import React from 'react'
import Edit from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

function ProfileEditButton(props) {
  return (
    <Link to={"/profileEdit"}><Button><Edit className = {props.idDat}/></Button></Link>
  )
}
ProfileEditButton.propTypes = {
  idDat: PropTypes.string.isRequired
}
export default ProfileEditButton