import React, { Fragment, useMemo } from 'react'
import DatePickerIncepere from './DatePickerIncepere'
import DatePickerIncetare from './DatePickerIncetare'
import ComboBoxTipConcediu from './ComboBoxTipConcediu'
import ComboBoxInlocuitor from './ComboBoxInlocuitor'
import { makeStyles } from '@material-ui/core/styles'
import CreareConcediuCSS from './CreareConcediuCSS'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import ZILE_DISP_DATA_QUERY from './QueryZileDisp'
import { gql, useApolloClient } from '@apollo/client'

const useStyles = makeStyles(CreareConcediuCSS)
function CreareConcediuComp(props) {
  const classes = useStyles()
  const client = useApolloClient()
  const date = client.readQuery({
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
  const { handleChange } = props
  const { localState } = props
  const { data } = useQueryWithErrorHandling(ZILE_DISP_DATA_QUERY, {
    variables: { idAngajat: date?.userData?.id },
    skip: !date?.userData?.id
  })

  const nrZileDisp = useMemo(() => {
    if (localState?.tipConcediuId === null) return 0
    return data?.zileConcediuData.find(x => x.id === localState?.tipConcediuId)?.zile
  }, [data?.zileConcediuData, localState?.tipConcediuId])

  const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24))

  // const nrZileSelectate = useMemo(() => {
  //   return diffDays(new Date(localState.dataSfarsit), new Date(localState.dataInceput))
  // }, [localState.dataSfarsit, localState.dataInceput])

  return (
    <>
      <div style={{ marginLeft: '70px', marginTop: '1rem', marginBottom: '1rem' }}>
        <ComboBoxTipConcediu className={classes.combobox} handleChange={handleChange}></ComboBoxTipConcediu>
      </div>
      <div className={classes.datePicker}>
        <DatePickerIncepere handleChange={handleChange} value={localState.DatePickerIncepere} localState={localState}></DatePickerIncepere>
        <DatePickerIncetare handleChange={handleChange} value={localState.DatePickerIncetare} localState={localState}></DatePickerIncetare>
      </div>
      <div>
        <TextField
          disabled
          className={classes.TextField}
          id='filled-disabled'
          label='Numar de zile selectat'
          value={localState.numarZileSelectat}
          variant='filled'
          onChange={(event, value) => handleChange('numarZileSelectat', event.target.value)}
        />

        <TextField
          disabled
          className={classes.TextField}
          id='filled-disabled'
          // label='Numar zile disponibile'
          value={nrZileDisp}
          variant='filled'
          onChange={(event, value) => handleChange('numarZileDisponibile', event.target.value)}
        />
      </div>

      <div style={{ marginLeft: '70px', marginTop: '1rem' }}>
        <ComboBoxInlocuitor handleChange={handleChange} localState={localState}></ComboBoxInlocuitor>
      </div>
      <br></br>
      <div style={{ marginLeft: '150px' }}>
        <TextField
          id='outlined-multiline-static'
          label='Comentarii'
          value={localState.comentarii}
          onChange={event => handleChange('comentarii', event.target.value)}
          multiline
          rows={4}
          variant='outlined'
        />
      </div>
    </>
  )
}

export default CreareConcediuComp

CreareConcediuComp.propTypes = {
  handleChange: PropTypes.func,
  localState: PropTypes.object
}
