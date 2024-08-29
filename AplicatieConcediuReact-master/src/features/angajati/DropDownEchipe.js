import * as React from 'react'
import { Autocomplete } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'
import InputLabel from '@mui/material/InputLabel'
import { TextField } from '@material-ui/core'
import { useReducer } from 'react'
import { initialState, reducer } from './PromovareStateDefine'
import PropTypes from 'prop-types'

const useStyles = makeStyles(stilAngajati)

export default function DropDownEchipa(props) {
  const { listaEchipe, handleChange } = props

  // const [dispatch] = useReducer(reducer, initialState)

  const stilPromovare = useStyles()
  return (
    <div>
      <div className={stilPromovare.divSelect}>
        <InputLabel id='demo-simple-select-autowidth-label'>Alege echipa</InputLabel>
        <Autocomplete
          id='combo-box-echipe'
          options={listaEchipe}
          handleChange={handleChange}
          className={stilPromovare.Combobox}
          onChange={(event, value) => handleChange('Echipa', value)}
          getOptionLabel={option => option.nume}
          renderInput={params => <TextField {...params} label='Echipa' variant='outlined' />}
        />
      </div>
    </div>
  )
}
DropDownEchipa.propTypes = {
  listaEchipe: PropTypes.array,
  handleChange: PropTypes.func
}
