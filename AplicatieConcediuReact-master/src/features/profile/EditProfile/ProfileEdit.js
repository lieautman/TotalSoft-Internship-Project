import React, { Fragment, useRef } from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import ProfilePhoto from '../Components/ProfilePhoto'

//css
import { makeStyles } from '@material-ui/core'
import profileStyle from '../Assets/ProfileCss'
//titlu
import { useHeader } from 'providers/AreasProvider'


const useStyles = makeStyles(profileStyle)

function ProfileEdit({ stare, modifyDataProfile, tratareUpdate }) {
  //css
  const classes = useStyles()
  //titlu
  useHeader(
    <div variant='subtitles1' className={classes.stilTitlu}>
      {'Editeaza date'}
    </div>
  )


  const DataAngajariiStringLabel = stare.DataAngajarii ? stare.DataAngajarii : '1999-01-01'
  const DataNasteriiStringLabel = stare.DataNasterii ? stare.DataNasterii : '1999-01-01'

  const inputRef = useRef(null)
  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0]
    if (!fileObj) {
      return
    }
    var reader = new FileReader();
    reader.readAsDataURL(fileObj)
    reader.onload=()=>{
      modifyDataProfile('Poza', reader.result.substring(reader.result.indexOf(',')+1,reader.result.length))
    }
    
  }
  return (
    <Fragment>
      <div className={classes.stilEditPageDivContainer1}>
        <div className={classes.stilEditPageDivContaineLeft}>
          <div className={classes.stilEditPageInput}>
            <TextField label='Nume' value={stare.Nume} fullWidth onChange={evt => modifyDataProfile('Nume', evt.target.value)}></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Prenume'
              value={stare.Prenume}
              fullWidth
              onChange={evt => modifyDataProfile('Prenume', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Adresa'
              value={stare.textAdresaActuala}
              fullWidth
              onChange={evt => modifyDataProfile('textAdresaActuala', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Email'
              value={stare.Email}
              fullWidth
              onChange={evt => modifyDataProfile('Email', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Telefon'
              value={stare.Numartelefon}
              fullWidth
              onChange={evt => modifyDataProfile('Numartelefon', evt.target.value)}
            ></TextField>
          </div>
        </div>
        <div className={classes.stilEditPageDivContainerRight}>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Functia'
              value={stare.Functia}
              fullWidth
              onChange={evt => modifyDataProfile('Functia', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='date'
              label={'Data angajarii: ' + DataAngajariiStringLabel.toString()}
              defaultValue=''
              InputLabelProps={{ shrink: true }}
              fullWidth
              onChange={evt => modifyDataProfile('DataAngajarii', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='date'
              label={'Data nasterii: ' + DataNasteriiStringLabel.toString()}
              defaultValue=''
              InputLabelProps={{ shrink: true }}
              fullWidth
              onChange={evt => modifyDataProfile('DataNasterii', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Cod Numeric Personal'
              value={stare.Cnp}
              fullWidth
              onChange={evt => modifyDataProfile('Cnp', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Serie Si Numar CI'
              value={stare.SeriaNumarBuletin}
              fullWidth
              onChange={evt => modifyDataProfile('SeriaNumarBuletin', evt.target.value)}
            ></TextField>
          </div>
        </div>
        <div className={classes.stilEditPageInputButton}>
          <div className={classes.stilEditPageInputOverButton}>
            <div>
              <input  ref={inputRef} type='file' onChange={handleFileChange} />
              <ProfilePhoto idDat={classes.pozaProfilCard} pozaData={stare.Poza}></ProfilePhoto>
            </div>
            <TextField
              label='Salariu'
              value={stare.Salariu}
              fullWidth
              onChange={evt => modifyDataProfile('Salariu', evt.target.value)}
            ></TextField>
          </div>
          <Button
            onClick={() => {
              tratareUpdate()
            }}
            variant='contained'
            color='primary'
            size='large'
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </div>
      </div>
    </Fragment>
  )
}
ProfileEdit.propTypes = {
  stare: PropTypes.object.isRequired,
  modifyDataProfile: PropTypes.func.isRequired,
  tratareUpdate: PropTypes.func.isRequired
}

export default ProfileEdit
//
