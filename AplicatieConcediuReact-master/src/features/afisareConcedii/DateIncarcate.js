import * as React from 'react'
import { styled } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import { tableCellClasses } from '@mui/material/TableCell'
import TableRow from '@material-ui/core/TableRow'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.common.white,
    fontSize: 16
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

export default function DateIncarcate(props) {
  const { row, setareId, concediiInAsteptareaAprobarii, idRand } = props
  return (
    <StyledTableRow>
      {concediiInAsteptareaAprobarii && (
        <StyledTableCell align='center'>
          <Checkbox
            style={{ color: '#26c6da' }}
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={idRand !== undefined && idRand !== null ? row.id === idRand : false}
            onChange={setareId(row.id)}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </StyledTableCell>
      )}

      <StyledTableCell component='th' scope='row' align='center'>
        {row.name}
      </StyledTableCell>
      <StyledTableCell align='center'>{row.dataInceput.substring(0, 10)}</StyledTableCell>
      <StyledTableCell align='center'>{row.dataSfarsit.substring(0, 10)}</StyledTableCell>
      <StyledTableCell align='center'>{row.inlocuitor}</StyledTableCell>
      <StyledTableCell align='center'>{row.comentarii}</StyledTableCell>
      <StyledTableCell align='center'>{row.angajat}</StyledTableCell>
    </StyledTableRow>
  )
}

DateIncarcate.propTypes = {
  row: PropTypes.object.isRequired,
  setareId: PropTypes.func,
  concediiInAsteptareaAprobarii: PropTypes.bool.isRequired,
  idRand: PropTypes.number
}
