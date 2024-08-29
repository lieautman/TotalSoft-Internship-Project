import * as React from 'react'
import TabelAngajati from 'features/angajati/TabelAngajati'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { useHeader } from 'providers/AreasProvider'
import NavigateNext from '@material-ui/icons/NavigateNext'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import stilAngajati from '../angajati/StilAngajati'
import { IconButton, makeStyles } from '@material-ui/core'

const stilAng = makeStyles(stilAngajati)

const rows = [
  {
    id: 1,
    nume: 'Popescu',
    prenume: 'Ioana',
    email: 'ioana@gmail.com',
    manager: 'Popa Irina',
    echipa: 'IT'
  },
  {
    id: 2,
    nume: 'Ionescu',
    prenume: 'Ana',
    email: 'ana@yahoo.ro',
    manager: 'Popescu Mihai',
    echipa: 'Marketing'
  },
  {
    id: 3,
    nume: 'Enescu',
    prenume: 'Ion',
    email: 'ion@gmail.com',
    manager: 'Soare Mihaela',
    echipa: 'Resurse Umane'
  }
]

export default function AprobareAngajati() {
  const stilButoanePaginare = stilAng()

  useHeader(
    <div variant='subtitles1' className={stilButoanePaginare.stilTitlu}>
      {'Aprobare angajati'}
    </div>
  )

  const [idRand, setIdRand] = useState(null)
  const esteAdmin = true

  const setareId = id => () => {
    if (id !== idRand) {
      setIdRand(id)
    } else {
      setIdRand(null)
    }
  }

  return (
    <div>
      <div>
        <div align='left'>
          <Button variant='contained' style={{ backgroundColor: '#26c6da' }}>
            Aproba
          </Button>
          <Button variant='contained' style={{ backgroundColor: '#FE4900' }}>
            Respinge
          </Button>
        </div>
      </div>
      <div>
        <br></br>
        <TabelAngajati rows={rows} setareId={setareId} esteAdmin={esteAdmin} idRand={idRand}></TabelAngajati>
      </div>
      <div className={stilButoanePaginare.divMarebutoane}>
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
      </div>
    </div>
  )
}
