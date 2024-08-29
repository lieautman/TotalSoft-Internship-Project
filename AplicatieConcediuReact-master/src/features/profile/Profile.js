import React, { Fragment } from 'react'

import ProfilePhoto from './Components/ProfilePhoto.js'
import ProfileUserDataString from './Components/ProfileUserDataString'
import ProfileEditButton from './Components/ProfileEditButton'
import ProfileTabelConcediiState from './ConcediiPersonale/ProfileTabelConcediiState'
import ProfileAddAtachment from './Components/ProfileAddAtachment'

import AdressEmailPhonePhoto from './Components/AdressEmailPhonePhoto.js'

import PropTypes from 'prop-types'

//css
import { makeStyles } from '@material-ui/core'
import profileStyle from './Assets/ProfileCss'
//titlu
import { useHeader } from 'providers/AreasProvider'

//css
const useStyles = makeStyles(profileStyle)

function Profile({ stare }) {
  //css
  const classes = useStyles()
  //titlu
  useHeader(
    <div variant='subtitles1' className={classes.stilTitlu}>
      {'Profil propriu'}
    </div>
  )

  var DataAngajariiDisplay = stare.DataAngajarii
  if (!stare.DataAngajarii) {
    DataAngajariiDisplay = 'Persoana nu a fost inca angajata'
  }

  return (
    <Fragment>
      <div className={classes.styleContainerMare}>
        <div>
          <ProfileUserDataString text={stare.textNumePrenume} idDat={classes.textNumePrenume}></ProfileUserDataString>
          <div className={classes.containerProfileCard}>
            <ProfilePhoto idDat={classes.pozaProfilCard} pozaData={stare.Poza}></ProfilePhoto>
            <div className={classes.containerNumePrenumProfileCard}>
              <ProfileUserDataString text={stare.Nume} idDat={classes.textNume}></ProfileUserDataString>
              <ProfileUserDataString text={stare.Prenume} idDat={classes.textPrenume}></ProfileUserDataString>
            </div>
            <ProfileEditButton idDat={classes.pozaEditProfilCard}></ProfileEditButton>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <AdressEmailPhonePhoto idDat={classes.pozaAdresaEmailTelefon} type={'adress'}></AdressEmailPhonePhoto>
            <div>
              <ProfileUserDataString text={stare.textAdresa} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={stare.textAdresaActuala}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <AdressEmailPhonePhoto idDat={classes.pozaAdresaEmailTelefon} type={'email'}></AdressEmailPhonePhoto>
            <div>
              <ProfileUserDataString text={stare.textEmail} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString text={stare.Email} idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <AdressEmailPhonePhoto idDat={classes.pozaAdresaEmailTelefon} type={'phone'}></AdressEmailPhonePhoto>
            <div>
              <ProfileUserDataString text={stare.textTelefon} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={stare.Numartelefon}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <div>
              <ProfileUserDataString text={stare.textFunctia} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString text={stare.Functia} idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <div>
              <ProfileUserDataString text={stare.textDataAngajare} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={DataAngajariiDisplay}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <div>
              <ProfileUserDataString text={stare.textDataNastere} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={stare.DataNasterii}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <div>
              <ProfileUserDataString text={stare.textSalariu} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={stare.Salariu.toString()}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
        </div>
        <div className={classes.stilADouaJumatateDePagina}>
          <div className={classes.styleCnpSerieNumarCi}>
            <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
              <div>
                <ProfileUserDataString text={stare.textCnp} idDat={classes.textNumePrenume}></ProfileUserDataString>
                <ProfileUserDataString text={stare.Cnp} idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}></ProfileUserDataString>
              </div>
            </div>
            <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
              <div>
                <ProfileUserDataString text={stare.textSerieNumarCi} idDat={classes.textNumePrenume}></ProfileUserDataString>
                <ProfileUserDataString
                  text={stare.SeriaNumarBuletin}
                  idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
                ></ProfileUserDataString>
              </div>
            </div>
          </div>
          <div className={classes.styleContainerConcediileMele}>
            <ProfileUserDataString text={stare.textTabelConcedii} idDat={classes.textNume}></ProfileUserDataString>
            <ProfileTabelConcediiState
              emailUtilizator={stare.Email}
              idDat={classes.stilTabel}
              idDivButoane={classes.stilDivButoane}
              idDatButonInainte={classes.stilButonInainte}
              idPagLabel={classes.stilPagLabel}
              idDatButonInapoi={classes.stilButonInapoi}
            ></ProfileTabelConcediiState>
          </div>
          <div className={classes.styleContainerConcediileMele}>
            <ProfileUserDataString text={stare.textAtasamente} idDat={classes.textNume}></ProfileUserDataString>
            <div className={classes.butonUploadAtasament}>
              <ProfileAddAtachment idDat={classes.butonUploadAtasamentButon}></ProfileAddAtachment>
              <div>
                <ProfileUserDataString
                  text={stare.textAtasamenteUpload}
                  idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
                ></ProfileUserDataString>
                <ProfileUserDataString text={stare.textAtasamenteUploadTypes} idDat={classes.textNumePrenume}></ProfileUserDataString>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
Profile.propTypes = {
  stare: PropTypes.object.isRequired
}

export default Profile
