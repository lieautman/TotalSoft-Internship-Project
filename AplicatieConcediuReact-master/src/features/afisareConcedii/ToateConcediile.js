import React, { useEffect } from 'react'
import TabelConcediu from './TabelConcediu'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import filtrari from './Filtrari'
import butoane from './Butoane'
import culoare from './CuloareButoane'
import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import CONCEDII_DATA_QUERY from './Queries'
import { useApolloClient } from '@apollo/client'
import { gql } from '@apollo/client'

const useStyles = makeStyles(filtrari)
const useStylesB = makeStyles(butoane)
const useStylesCB = makeStyles(culoare)

// const rows = [
//   {
//     id: 1,
//     name: 'Concediu medical',
//     dataInceput: '10/16/2022',
//     dataSfarsit: '10/17/2022',
//     inlocuitor: 'Andrei Ionescu',
//     comentarii: '',
//     angajat: 'Ion Popescu'
//   },
//   {
//     id: 2,
//     name: 'Concediu de odihna',
//     dataInceput: '9/1/2022',
//     dataSfarsit: '9/29/2022',
//     inlocuitor: 'Maria Iancu',
//     comentarii: '',
//     angajat: 'Ion Popescu'
//   },
//   {
//     id: 3,
//     name: 'Concediu de odihna',
//     dataInceput: '8/28/2022',
//     dataSfarsit: '8/30/2022',
//     inlocuitor: 'Andreea Bogdan',
//     comentarii: '',
//     angajat: 'Ion Popescu'
//   }
// ]

export default function ToateConcediile() {
  const [indexStart, setIndexStart] = useState(0)
  const [indexEnd, setIndexEnd] = useState(5)
  const nrElemPag = 5
  const { data, loading } = useQueryWithErrorHandling(CONCEDII_DATA_QUERY, {
    variables: { index1: indexStart, index2: indexEnd, nrElemPePagina: nrElemPag }
  })

  const culoareStyle = useStylesCB()
  const butoaneStyle = useStylesB()
  const filtrareStyle = useStyles()
  const [filteredArray, setFilteredArray] = useState([])

  useEffect(() => {
    if (loading || !data) return
    setFilteredArray(data.concediiData?.listaConcedii)
  }, [data, loading])

  const concediiInAsteptareaAprobarii = false
  const seFiltreaza = true

  const handleFilterNume = input => {
    const value = input.target.value

    const newArray = data?.concediiData?.listaConcedii.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.name.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }

  const handleFilterAngajat = input => {
    const value = input.target.value

    const newArray = data?.concediiData?.listaConcedii.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.angajat.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }

  const handleFilterInlocuitor = input => {
    const value = input.target.value

    const newArray = data?.concediiData?.listaConcedii.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.inlocuitor.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }

  //preluare date din cache apollo
  const client = useApolloClient()
  let date = client.readQuery({
    query: gql`
      query userData {
        userData {
          id
          isAdmin
          isManager
          email
        }
      }
    `
  })

  function afisareButon() {
    if (date?.userData?.isAdmin || date?.userData?.isManager) {
      return (
        <Link to='./AprobareConcedii'>
          <Button variant='contained' style={{ backgroundColor: '#26c6da' }}>
            Aproba concedii
          </Button>
        </Link>
      )
    }
  }

  function handleClickInapoi() {
    if (indexStart !== 0) {
      setIndexStart(indexStart - nrElemPag)
      setIndexEnd(indexEnd - nrElemPag)
    }
  }
  function handleClickInainte() {
    if (indexEnd !== nrElemPag * data?.concediiData?.numarPagini) {
      setIndexStart(indexStart + nrElemPag)
      setIndexEnd(indexEnd + nrElemPag)
    }
  }

  return (
    <div>
      <div>
        <div align='right'>{afisareButon()}</div>
      </div>
      <br></br>
      <div className={filtrareStyle.displayFiltrari}>
        <SearchBar onFilter={handleFilterNume} filtrareNume={'tipul de concediu'} />
        <SearchBar onFilter={handleFilterInlocuitor} filtrareNume={'numele inlocuitorului'} />
        <SearchBar onFilter={handleFilterAngajat} filtrareNume={'numele angajatului'} />
      </div>
      <TabelConcediu
        rows={data ? data.concediiData.listaConcedii : []}
        concediiInAsteptareaAprobarii={concediiInAsteptareaAprobarii}
        filtrare={filteredArray}
        seFiltreaza={seFiltreaza}
        // seFiltreaza={seFiltreaza}
      ></TabelConcediu>
      <div className={butoaneStyle.stilButoane}>
        <Button onClick={handleClickInapoi} className={culoareStyle.culoareButoane}>
          Inapoi
        </Button>
        <h5>
          {indexEnd / nrElemPag}/{data?.concediiData?.numarPagini}
        </h5>
        <Button onClick={handleClickInainte} className={culoareStyle.culoareButoane}>
          Inainte
        </Button>
      </div>
    </div>
  )
}
