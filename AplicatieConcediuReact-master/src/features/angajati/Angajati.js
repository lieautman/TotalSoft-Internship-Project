import { React, useState, useEffect } from 'react'
import TabelAngajati from './TabelAngajati'
import { Link } from 'react-router-dom'
import stilAngajati from './StilAngajati'
import stilButoane from './StilButoane'
import Filtrare from './Filtrare'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { ANGAJATI_DATA_QUERY } from './QueryAngajati'
import { useApolloClient } from '@apollo/client'
import { gql } from '@apollo/client'

const stilAng = makeStyles(stilAngajati)
const stilBtn = makeStyles(stilButoane)

// function createData(id, nume, prenume, email, manager, echipa) {
//   return { id, nume, prenume, email, manager, echipa }
// }

//info din randuri
// const rows = [
//   createData('1', 'Popescu', 'Ioana', 'ioana@gmail.com', 'Popa Irina', 'IT'),
//   createData('2', 'Ionescu', 'Ana', 'ana@yahoo.ro', 'Popescu Mihai', 'Marketing'),
//   createData('3', 'Vasilescu', 'Mihai', 'mihai@gmail.com', 'Ionescu Cristina', 'Resurse Umane'),
//   createData('4', 'Enescu', 'Ion', 'ion@gmail.com', 'Soare Mihaela', 'Marketing'),
//   createData('5', 'Georgescu', 'Alina', 'alina@gmail.com', 'Enescu George', 'IT')
// ]

export default function Angajati() {
  const { data, loading } = useQueryWithErrorHandling(ANGAJATI_DATA_QUERY)
  const checkin = true
  const stilButoanePaginare = stilAng()
  const stilButoaneActiuni = stilBtn()
  const history = useHistory()
  const [filteredArray, setFilteredArray] = useState([])

  useEffect(() => {
    if (loading || !data) return
    setFilteredArray(data.angajatiData)
  }, [data, loading])

  const [idRand, setIdRand] = useState(null)

  const setareId = id => () => {
    setIdRand(id)
    console.log(id)
  }

  const handleFilterNume = input => {
    const value = input.target.value

    const newArray = data?.angajatiData.filter(el => {
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

    const newArray = data?.angajatiData.filter(el => {
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

    const newArray = data?.angajatiData.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.email.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }
  const handleFilterManager = input => {
    const value = input.target.value

    const newArray = data?.angajatiData.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.manager.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }
  const handleFilterEchipa = input => {
    const value = input.target.value

    const newArray = data?.angajatiData.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.echipa.toLowerCase().includes(value)
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

  const handleClick = () => {
    if (idRand && date?.userData?.isAdmin) {
      history.push({ pathname: `/angajati/Promovare/${idRand}` })
    }
  }

  function afisareButonPromovare() {
    if (date?.userData?.isAdmin) {
      return (
        <button className={stilButoaneActiuni.buton} onClick={handleClick}>
          PROMOVEAZA ANGAJAT
        </button>
      )
    }
  }
  function afisareButonAdaugare() {
    if (date?.userData?.isAdmin || date?.useData?.isManager) {
      return (
        <Link to='/adauga_angajat'>
          <button className={stilButoaneActiuni.buton}>ADAUGA UN ANGAJAT NOU</button>
        </Link>
      )
    }
  }

  return (
    <div>
      <div className={stilButoanePaginare.divMarebutoane}>
        <div>{afisareButonAdaugare()}</div>
        <div>{afisareButonPromovare()}</div>
      </div>
      <br></br>
      <div className={stilButoanePaginare.divMareTextField}>
        {
          <Filtrare
            handleFilterNume={handleFilterNume}
            handleFilterPrenume={handleFilterPrenume}
            handleFilterEmail={handleFilterEmail}
            handleFilterManager={handleFilterManager}
            handleFilterEchipa={handleFilterEchipa}
          ></Filtrare>
        }
      </div>
      <br></br>
      <TabelAngajati
        rows={data ? data.angajatiData : []}
        setareId={setareId}
        filtrare={filteredArray}
        idRand={idRand}
        checkin={checkin}
      ></TabelAngajati>
    </div>
  )
}
Angajati.propTypes = {
  rows: PropTypes.array
}
