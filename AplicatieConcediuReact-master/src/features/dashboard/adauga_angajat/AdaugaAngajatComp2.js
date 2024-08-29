import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Adauga_Angajatcss from './Adauga_Angajatcss'
import { Autocomplete } from '@material-ui/lab'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'

const useStyles = makeStyles(Adauga_Angajatcss)

export function AdaugaAngajatComp2(props) {
  const classes = useStyles()
  const { handleChange } = props
  const { localState } = props
  const { listaEchipe } = props
  const { listaManageri } = props

  return (
    <Grid>
      <Container className={classes.containeradaugaangajatright} maxWidth='sm'>
        <div>
          <TextField
            className={classes.TextField}
            label={'Numardetelefon'}
            variant='outlined'
            value={localState.numardetelefon}
            onChange={event => handleChange('numartelefon', event.target.value)}
          ></TextField>
          <br></br>
          <TextField
            className={classes.TextField}
            label={'Salariu'}
            variant='outlined'
            value={localState.salariu}
            //type='number'
            //onChange={event => handleChange('salariu', parseFloat(event.target.value).toFixed(1))}
            onChange={event => handleChange('salariu', event.target.value)}
          ></TextField>
          <TextField
            className={classes.TextField}
            label={'Parola'}
            variant='outlined'
            value={localState.parola}
            onChange={event => handleChange('parola', event.target.value)}
          ></TextField>
          <br></br>
          <TextField
            id='date'
            label='DataAngajarii'
            variant='outlined'
            type='date'
            value={localState.dataAngajarii}
            onChange={event => handleChange('dataAngajarii', event.target.value)}
            className={classes.Combobox}
            InputLabelProps={{
              shrink: true
            }}
          />{' '}
          <br></br>
          <Autocomplete
            id='combo-box-echipe'
            key={option => option.id}
            options={listaEchipe}
            className={classes.Combobox}
            onChange={(event, value) => handleChange('idEchipa', value.id)}
            getOptionLabel={option => option.nume}
            renderInput={params => <TextField {...params} label='Echipa' variant='outlined' />}
          />
          <Autocomplete
            id='combo-box-manageri'
            options={listaManageri}
            className={classes.Combobox}
            onChange={(event, value) => handleChange('managerId', value.id)}
            getOptionLabel={option => option.manageri}
            renderInput={params => <TextField {...params} label='Manager' variant='outlined' />}
          />
        </div>
      </Container>
    </Grid>
  )
}
AdaugaAngajatComp2.propTypes = {
  handleChange: PropTypes.func,
  localState: PropTypes.object,
  listaEchipe: PropTypes.array,
  listaManageri: PropTypes.array
}
