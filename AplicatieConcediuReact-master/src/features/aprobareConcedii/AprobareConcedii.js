import * as React from 'react'
import TabelConcediu from 'features/afisareConcedii/TabelConcediu'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { styled } from '@material-ui/core/styles'
import { useState } from 'react'
import headerStyle from 'assets/jss/components/headerStyle'
import { useHeader } from 'providers/AreasProvider'
import Typography from '@material-ui/core/Typography'
import NavigateNext from '@material-ui/icons/NavigateNext'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import stilAngajati from '../angajati/StilAngajati'
import { IconButton, makeStyles } from '@material-ui/core'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import CONCEDII_SPRE_APROBARE_DATA_QUERY from './Queries'
import CONCEDIU_APROBAT_MUTATION from './MutationAprobare'
import CONCEDIU_RESPINS_MUTATION from './MutationRespingere'
import { useMutation } from '@apollo/client'

const stilAng = makeStyles(stilAngajati)
// const rows = [
//   {
//     id: 1,
//     name: 'Concediu medical',
//     dataInceput: '10/16/2022',
//     dataSfarsit: '10/17/2022',
//     inlocuitor: 'Andrei Ionescu',
//     motiv: '',
//     angajat: 'Ion Popescu'
//   },
//   {
//     id: 2,
//     name: 'Concediu de odihna',
//     dataInceput: '9/1/2022',
//     dataSfarsit: '9/29/2022',
//     inlocuitor: 'Maria Iancu',
//     motiv: '',
//     angajat: 'Ion Popescu'
//   },
//   {
//     id: 3,
//     name: 'Concediu de odihna',
//     dataInceput: '8/28/2022',
//     dataSfarsit: '8/30/2022',
//     inlocuitor: 'Andreea Bogdan',
//     motiv: '',
//     angajat: 'Ion Popescu'
//   }
// ]

export default function AprobareConcedii() {
  const { data, refetch } = useQueryWithErrorHandling(CONCEDII_SPRE_APROBARE_DATA_QUERY)

  const stilButoanePaginare = stilAng()

  useHeader(
    <div variant='subtitles1' className={stilButoanePaginare.stilTitlu}>
      {'Aprobare concedii'}
    </div>
  )

  const [idRand, setIdRand] = useState(null)
  const concediiInAsteptareaAprobarii = true
  const nuSeFiltreaza = true

  const setareId = id => () => {
    if (id !== idRand) {
      setIdRand(id)
    } else {
      setIdRand(null)
    }
  }

  const [aprobareConcediu] = useMutation(CONCEDIU_APROBAT_MUTATION, { onCompleted: () => refetch() })
  const [respingereConcediu] = useMutation(CONCEDIU_RESPINS_MUTATION, { onCompleted: () => refetch() })

  const handleClickAprobare = async () => {
    await aprobareConcediu({
      variables: { updateConcediuId: idRand }
    })
    // refetch()
  }

  const handleClickRespingere = async () => {
    await respingereConcediu({
      variables: { updateStareConcediuId: idRand }
    })
    // refetch()
  }

  return (
    <div>
      <div>
        <div align='left'>
          <Button variant='contained' style={{ backgroundColor: '#26c6da' }} onClick={handleClickAprobare}>
            Aproba
          </Button>

          <Button variant='contained' style={{ backgroundColor: '#FE4900' }} onClick={handleClickRespingere}>
            Respinge
          </Button>
        </div>
      </div>
      <div>
        <br></br>
        <TabelConcediu
          rows={data ? data.concediiSpreAprobareData : []}
          setareId={setareId}
          concediiInAsteptareaAprobarii={concediiInAsteptareaAprobarii}
          idRand={idRand}
          nuSeFiltreaza={nuSeFiltreaza}
          // nuSeFiltreaza={nuSeFiltreaza}
        ></TabelConcediu>
      </div>
      {/* <div className={stilButoanePaginare.divMarebutoane}>
        <div>
          <IconButton aria-label='NavigateBefore' style={{ backgroundColor: '#05241d', color: 'white' }}>
            <NavigateBefore />
          </IconButton>
        </div>
        <div className={stilButoanePaginare.divButonInainte}>
          <IconButton aria-label='NavigateNext' style={{ backgroundColor: '#05241d', color: 'white' }}>
            <NavigateNext />
          </IconButton>
        </div>
      </div> */}
    </div>
  )
}
