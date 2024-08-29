import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

function ProfileAddAtachment(props) {
 //const addToast = useToast()
 // addToast('Welcome', 'success')
  return (
    <Link to={"/forbidden"}>
      <Fab className={props.idDat} color="primary" aria-label="add">
          <AddIcon />
      </Fab>
    </Link>
  )
}
ProfileAddAtachment.propTypes = {
  idDat: PropTypes.string.isRequired
}
export default ProfileAddAtachment
