import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import TIP_CONCEDIU_DATA_QUERY from './QueryTipConcediu'
import PropTypes from 'prop-types'

const ComboBoxTipConcediu = props => {
  const { handleChange } = props
  const { data } = useQueryWithErrorHandling(TIP_CONCEDIU_DATA_QUERY)
  // Our sample dropdown options
  // const options = [
  //   { id: 1, name: 'Concediu de odihna' },
  //   { id: 2, name: 'Concediu fara plata' },
  //   { id: 3, name: 'Concediu medical' }
  // ]

  // eslint-disable-next-line no-unused-vars
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

  return (
    <div>
      <Autocomplete
        options={data?.tipConcediuData || []}
        style={{ width: 380 }}
        getOptionLabel={data => data?.nume}
        onChange={(event, value) => handleChange('tipConcediuId', value.id)}
        renderInput={params => <TextField {...params} label='Selecteaza tipul concediului' variant='outlined' />}
      />
    </div>
  )
}

export default ComboBoxTipConcediu

ComboBoxTipConcediu.propTypes = {
  handleChange: PropTypes.func
}
