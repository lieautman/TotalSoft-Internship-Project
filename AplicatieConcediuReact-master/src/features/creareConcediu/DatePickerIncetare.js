import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}))

export default function DatePicker(props) {
  const classes = useStyles()
  const { handleChange, localState } = props
  const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24))
  return (
    <>
      <div initialmonth={new Date(2017, 3)} disableddays={[new Date(2017, 3, 12), { daysOfWeek: [0, 6] }]} />
      <form className={classes.container} noValidate>
        <TextField
          id='date'
          label='Selectati data de incetare'
          type='date'
          onChange={event => {
            var Difference_In_Time = new Date(event.target.value).getTime() - localState.dataInceput.getTime()
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
            console.log(Difference_In_Days)
            handleChange('numarZileSelectat', Difference_In_Days), handleChange('dataSfarsit', new Date(event.target.value))
          }}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    </>
  )
}
DatePicker.propTypes = {
  handleChange: PropTypes.func,
  localState: PropTypes.object
}
