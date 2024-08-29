import { React, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import stilAngajati from './StilAngajati'
import stilButoane from './StilButoane'
import { Button, makeStyles } from '@material-ui/core'
import TabelAngajatiDePromovat from './TabelAngajatiDePromovat'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import { useHeader } from 'providers/AreasProvider'
import DropDownEchipa from './DropDownEchipe'
import { useTranslation } from 'react-i18next'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { ANGAJATI_DE_FORMAT_ECHIPA } from './QueryAngajati'
import PropTypes from 'prop-types'
import ECHIPA_DATA_QUERY from './QueryEchipe'
import { Link, useRouteMatch } from 'react-router-dom'
import ID_ANGAJATI_DATA_QUERY from './QueryIdAngajatSelectat'
import { UPDATE_MANAGER_ECHIPA } from './MutationPromovare'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

const useStyles = makeStyles(stilAngajati)

export default function Promovare(props) {
  const { dispatch, state } = props
  const history = useHistory()
  const match = useRouteMatch()

  useQueryWithErrorHandling(ANGAJATI_DE_FORMAT_ECHIPA, {
    variables: { id: parseInt(match.params.id) },
    onCompleted: data => {
      dispatch({ inputName: 'listaAngDeAdaugatDinBaza', inputValue: data.angajatiDeFormatEchipaData })
    }
  })
  //id ang din path

  const { data } = useQueryWithErrorHandling(ID_ANGAJATI_DATA_QUERY, { variables: { idAngajatSelectat: parseInt(match.params.id) } })
  const { data: listaEchipe } = useQueryWithErrorHandling(ECHIPA_DATA_QUERY)
  const [updateManagerEchipa] = useMutation(UPDATE_MANAGER_ECHIPA, {
    onCompleted: data => {}
  })

  const { t } = useTranslation()
  const stilPromovare = useStyles()
  useHeader(
    <div variant='subtitles1' className={stilPromovare.stilTitlu}>
      {t('NavBar.Promovare')}
    </div>
  )
  //functie pt autocomplete pt retinere info selectata
  const handleChange = (propertyName, value) => {
    dispatch({ inputName: 'OnPropertyChanged', propertyName, value })
  }

  const stilButon = makeStyles(stilButoane)
  const stilBtn = stilButon()

  const [indexSelectat1, setIdRand1] = useState(null)

  const setareId1 = id => () => {
    if (id !== indexSelectat1) {
      setIdRand1(id)
    } else {
      setIdRand1(null)
    }
  }

  const [indexSelectat2, setIdRand2] = useState(null)
  const setareId2 = id => () => {
    if (id !== indexSelectat2) {
      setIdRand2(id)
    } else {
      setIdRand2(null)
    }
  }

  //functie de actiune pe buton pt adaugare angajati in lista de formare echipa
  function AdaugaElem() {
    if (indexSelectat1 !== null && indexSelectat1 !== undefined && props.state.listaAngajatiDeAdaugat[indexSelectat1]) {
      props.dispatch({ inputName: 'modificareListe', actiune: 'Adaugare', index: indexSelectat1, inputValue: parseInt(match.params.id) })
    }
  }

  function ScoateElem() {
    if (indexSelectat2 !== null && indexSelectat2 !== undefined && props.state.listaAngajatiAdaugati[indexSelectat2]) {
      props.dispatch({ inputName: 'modificareListe', actiune: 'Scoatere', index: indexSelectat2 })
    }
  }
  const addToast = useToast()
  const handleClick = async () => {
    let echipaManager = 1
    switch (state.Echipa) {
      case 'Marketing': {
        echipaManager = 1
        break
      }
      case 'Resurse Umane': {
        echipaManager = 2
        break
      }
      case 'Dezvoltare': {
        echipaManager = 3
        break
      }
      case 'Servicii financiare': {
        echipaManager = 4
        break
      }
      case 'Suport IT': {
        echipaManager = 5
        break
      }
      default:
        echipaManager = 1
    }
    let inputValue = {
      nume: data?.angajatIdData.nume,
      prenume: data?.angajatIdData.prenume,
      email: data?.angajatIdData.email,
      cnp: '',
      ManagerId: null,
      IdEchipa: echipaManager
    }

    let listaBuffer = [...state.listaAngajatiAdaugatiMirror, inputValue]
    const update = await updateManagerEchipa({
      variables: {
        input: listaBuffer
      }
    })
    if (update?.data.updateManagerIdEchipaId === 'Angajat promovat') {
      history.push({ pathname: `/angajati` })
      addToast('Angajat promovat cu succes', 'success')
    } else {
      addToast('Nu s-a putut promova angajatul', 'error')
    }
  }

  return (
    <div>
      <div className={stilPromovare.divPromovare}>
        <div>
          <Card sx={{ width: 450, height: 140 }}>
            <CardContent>
              <div className={stilPromovare.divInfoCard}>
                <div>
                  <img
                    src={'data:image/*;base64,' + data?.angajatIdData.poza}
                    className={stilPromovare.pozaAngajat}
                    aria-label='recipe'
                  ></img>
                </div>
                <div className={stilPromovare.textManager}>
                  <Typography sx={{ fontSize: 18 }} color='text.secondary' gutterBottom>
                    {data?.angajatIdData.nume}
                  </Typography>
                  <Typography sx={{ fontSize: 18 }} color='text.secondary' gutterBottom>
                    {data?.angajatIdData.prenume}
                  </Typography>
                  <Typography variant='h5' component='div'></Typography>
                  <Typography sx={{ fontSize: 14 }} color='text.secondary'>
                    {data?.angajatIdData.echipa}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className={stilPromovare.divSelect}>
          <DropDownEchipa handleChange={handleChange} listaEchipe={listaEchipe?.echipaData}></DropDownEchipa>
          <Button
            // onClick={() => {
            //   console.log(state.listaAngajatiAdaugatiMirror)
            //   updateManagerEchipa()
            // }}
            onClick={handleClick}
            className={stilBtn.buton}
          >
            SALVEAZA MODIFICARILE
          </Button>
        </div>
      </div>
      <div className={stilPromovare.divTabelePromovare}>
        <div>
          <TabelAngajatiDePromovat
            rows={state.listaAngajatiDeAdaugat}
            setIdRand={setIdRand1}
            indexSelectat={indexSelectat1}
            setareId={setareId1}
          ></TabelAngajatiDePromovat>
        </div>
        <div className={stilBtn.butoaneListePromovare}>
          <IconButton aria-label='KeyboardArrowRight' onClick={AdaugaElem} style={{ backgroundColor: '#26c6da', color: 'white' }}>
            <KeyboardArrowRight />
          </IconButton>
          <IconButton aria-label='KeyboardArrowLeft' onClick={ScoateElem} style={{ backgroundColor: '#26c6da', color: 'white' }}>
            <KeyboardArrowLeft />
          </IconButton>
        </div>
        <div>
          <TabelAngajatiDePromovat
            rows={state.listaAngajatiAdaugati}
            setIdRand={setIdRand2}
            indexSelectat={indexSelectat2}
            setareId={setareId2}
          ></TabelAngajatiDePromovat>
        </div>
      </div>
    </div>
  )
}

Promovare.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
