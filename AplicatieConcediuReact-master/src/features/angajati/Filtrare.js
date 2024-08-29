/* eslint-disable react/react-in-jsx-scope */
import SearchBar from '../afisareConcedii/SearchBar'
import react from 'react'
import { makeStyles } from '@material-ui/core'
import filtrari from '../afisareConcedii/Filtrari'
import { useState } from 'react'
import PropTypes from 'prop-types'

const filtr = makeStyles(filtrari)

export default function Filtrare(props) {
  const { handleFilterNume, handleFilterPrenume, handleFilterEmail, handleFilterManager, handleFilterEchipa } = props
  const stil = filtr()

  return (
    <div>
      <div className={stil.displayFiltrari}>
        <SearchBar onFilter={handleFilterNume} filtrareNume={'nume'} />
        <SearchBar onFilter={handleFilterPrenume} filtrareNume={'prenume'} />
        <SearchBar onFilter={handleFilterEmail} filtrareNume={'email'} />
        <SearchBar onFilter={handleFilterManager} filtrareNume={'manager'} />
        <SearchBar onFilter={handleFilterEchipa} filtrareNume={'echipa'} />
      </div>
    </div>
  )
}
Filtrare.propTypes = {
  handleFilterNume: PropTypes.func,
  handleFilterPrenume: PropTypes.func,
  handleFilterEmail: PropTypes.func,
  handleFilterManager: PropTypes.func,
  handleFilterEchipa: PropTypes.func
}
