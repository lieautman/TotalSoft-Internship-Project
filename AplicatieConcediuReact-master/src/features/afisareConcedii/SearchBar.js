import { React } from 'react'
import TextField from '@material-ui/core/TextField'
import { PropTypes } from 'prop-types'

function SearchBar(props) {
  const { onFilter, filtrareNume } = props
  return (
    <TextField
      id='outlined-basic'
      variant='outlined'
      witdh='70%'
      height='5%'
      label={'Filtreaza dupa ' + filtrareNume}
      onChange={onFilter}
    />
  )
}

SearchBar.propTypes = {
  onFilter: PropTypes.func,
  props: PropTypes.func,
  filtrareNume: PropTypes.string
}

export default SearchBar
