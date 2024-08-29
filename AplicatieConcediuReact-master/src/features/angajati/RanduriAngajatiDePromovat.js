import * as React from 'react'
import { styled } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import { tableCellClasses } from '@mui/material/TableCell'
import TableRow from '@material-ui/core/TableRow'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

export default function RanduriAngajatiDePromovat(props) {
  const { row, indexSelectat, setareId, index } = props
  return (
    <StyledTableRow key={row.name}>
      <Checkbox
        color='primary'
        checked={indexSelectat !== undefined && indexSelectat !== null ? indexSelectat === index : false}
        onChange={setareId(index)}
        inputProps={{
          'aria-label': 'select all desserts'
        }}
      />
      <StyledTableCell component='th' scope='row' align='center'>
        {index + 1}
      </StyledTableCell>
      <StyledTableCell component='th' scope='row' align='center'>
        {row.nume}
      </StyledTableCell>
      <StyledTableCell align='center'>{row.prenume}</StyledTableCell>
      <StyledTableCell align='center'>{row.echipa}</StyledTableCell>
    </StyledTableRow>
  )
}

RanduriAngajatiDePromovat.propTypes = {
  row: PropTypes.object.isRequired,
  indexSelectat: PropTypes.number,
  index: PropTypes.number,
  setareId: PropTypes.func
}
