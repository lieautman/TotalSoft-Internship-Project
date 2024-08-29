import * as React from 'react'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'

export default function HeaderTabelPromovare() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#05241d',
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding='checkbox'></StyledTableCell>
        <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
          Nr. Crt
        </StyledTableCell>
        <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
          Nume
        </StyledTableCell>
        <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
          Prenume
        </StyledTableCell>
        <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
          Echipa
        </StyledTableCell>
      </TableRow>
    </TableHead>
  )
}
