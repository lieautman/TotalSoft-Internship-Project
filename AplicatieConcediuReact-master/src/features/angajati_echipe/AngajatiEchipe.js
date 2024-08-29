import React, { useEffect } from 'react'
import TabelAngajati from 'features/angajati/TabelAngajati'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import ANGAJATI_PER_ECHIPA_DATA_QUERY from './Queries'
import PropTypes from 'prop-types'
import { Link, useRouteMatch } from 'react-router-dom'
import { Button } from '@material-ui/core'
import filtrari from '../afisareConcedii/Filtrari'
import { makeStyles } from '@material-ui/core'
import { useState } from 'react'
import SearchBar from '../afisareConcedii/SearchBar'

const useStyles = makeStyles(filtrari)

// function createData(nume, prenume, email, manager, echipa) {
//   return { nume, prenume, email, manager, echipa }
// }
// const rows = [
//   createData('Popescu', 'Ioana', 'ioana@gmail.com', 'Popa Irina', 'IT'),
//   createData('Ionescu', 'Ana', 'ana@yahoo.ro', 'Popescu Mihai', 'Marketing'),
//   createData('Vasilescu', 'Mihai', 'mihai@gmail.com', 'Ionescu Cristina', 'Resurse Umane'),
//   createData('Enescu', 'Ion', 'ion@gmail.com', 'Soare Mihaela', 'Marketing'),
//   createData('Georgescu', 'Alina', 'alina@gmail.com', 'Enescu George', 'IT')
// ]

export default function AngajatiEchipe() {
  const afisareEchipe = true
  const checkin = false

  const match = useRouteMatch()
  const { data, loading } = useQueryWithErrorHandling(ANGAJATI_PER_ECHIPA_DATA_QUERY, { variables: { echipa: match.params.nume } })

  const filtrareStyle = useStyles()
  const [filteredArray, setFilteredArray] = useState([])

  useEffect(()=>{
    if(loading||!data)
      return
    setFilteredArray(data.cardData)
  },[data, loading])

  const handleFilterNume = input => {
    const value = input.target.value

    const newArray = data?.cardData.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.nume.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }

  const handleFilterPrenume = input => {
    const value = input.target.value

    const newArray = data?.cardData.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.prenume.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }

  const handleFilterEmail = input => {
    const value = input.target.value

    const newArray = data?.cardData.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.email.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }

  return (
    <div>
      <div className={filtrareStyle.displayFiltrari}>
        <SearchBar onFilter={handleFilterNume} filtrareNume={'nume'} />
        <SearchBar onFilter={handleFilterPrenume} filtrareNume={'prenume'} />
        <SearchBar onFilter={handleFilterEmail} filtrareNume={'email'} />
      </div>
      <TabelAngajati
        rows={data ? data.cardData : []}
        afisareEchipe={afisareEchipe}
        checkin={checkin}
        filtrare={filteredArray}
      ></TabelAngajati>
    </div>
  )
}
