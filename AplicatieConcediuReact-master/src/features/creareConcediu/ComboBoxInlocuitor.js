import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import INLOCUITOR_QUERY from './QueryInlocuitor'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { LocalState } from '@apollo/client/core/LocalState'
import { useApolloClient } from '@apollo/client'
import { gql } from '@apollo/client'
import PropTypes from 'prop-types'

const ComboBoxInlocuitor = props => {
  // Our sample dropdown options
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
  const { localState, handleChange } = props

  const { data } = useQueryWithErrorHandling(INLOCUITOR_QUERY, {
    variables: { dataInceput: localState.dataInceput, dataSfarsit: localState.dataSfarsit, idAngajat: date?.userData?.id }
  })

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
        options={data?.inlocuitoriData || []}
        style={{ width: 380 }}
        onChange={(event, value) => handleChange('inlocuitorId', value.id)}
        getOptionLabel={data => data?.inlocuitor}
        renderInput={params => <TextField {...params} label='Selecteaza un inlocuitor' variant='outlined' />}
      />
    </div>
  )
}
export default ComboBoxInlocuitor

ComboBoxInlocuitor.propTypes = {
  handleChange: PropTypes.func,
  localState: PropTypes.object
}
