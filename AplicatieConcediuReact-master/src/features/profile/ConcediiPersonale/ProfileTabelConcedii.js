import React from 'react'
import { styled } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import { tableCellClasses } from '@mui/material/TableCell'
import MuiTableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import { props } from 'ramda'

//css
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontSize: 16
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
const TableHead = withStyles(theme => ({
  root: {
    backgroundColor: '#05241d'
  }
}))(MuiTableHead)
const TableHeaderCell = withStyles(theme => ({
  root: {
    color: 'white'
  }
}))(TableCell)

//date
const rows = [
  {
    id: '1',
    name: 'Concediu medical',
    dataInceput: '10/16/2022',
    dataSfarsit: '10/17/2022',
    inlocuitor: 'Andrei Ionescu',
    motiv: '',
    stareConcediu: 'Aprobat'
  },
  {
    id: '2',
    name: 'Concediu de odihna',
    dataInceput: '9/1/2022',
    dataSfarsit: '9/29/2022',
    inlocuitor: 'Maria Iancu',
    motiv: '',
    stareConcediu: 'Trimis'
  },
  {
    id: '3',
    name: 'Concediu de odihna',
    dataInceput: '8/28/2022',
    dataSfarsit: '8/30/2022',
    inlocuitor: 'Andreea Bogdan',
    motiv: '',
    stareConcediu: 'Respins'
  },
  {
    id: '4',
    name: 'Concediu de odihna',
    dataInceput: '8/28/2022',
    dataSfarsit: '8/30/2022',
    inlocuitor: 'Andreea Bogdan',
    motiv: '',
    stareConcediu: 'Respins'
  },
  {
    id: '5',
    name: 'Concediu de odihna',
    dataInceput: '8/28/2022',
    dataSfarsit: '8/30/2022',
    inlocuitor: 'Andreea Bogdan',
    motiv: '',
    stareConcediu: 'Respins'
  }
]

function ProfileTabelConcedii(props) {
  function handleClickInapoi() {
    if (props.state.indexStartActual !== 0) {
      props.dispatch({
        inputName: 'indexStartActual',
        inputValue: props.state.indexStartActual - props.state.numarElemPePag,
        inputType: 'field'
      })
      props.dispatch({
        inputName: 'indexEndActual',
        inputValue: props.state.indexEndActual - props.state.numarElemPePag,
        inputType: 'field'
      })
    }
  }
  function handleClickInainte() {
    if (props.state.indexEndActual !== props.state.numarElemPePag * props.state.numarPagini) {
      props.dispatch({
        inputName: 'indexStartActual',
        inputValue: props.state.indexStartActual + props.state.numarElemPePag,
        inputType: 'field'
      })
      props.dispatch({
        inputName: 'indexEndActual',
        inputValue: props.state.indexEndActual + props.state.numarElemPePag,
        inputType: 'field'
      })
    }
  }
  return (
    <div>
      <TableContainer className={props.idDat} component={Paper}>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              <TableHeaderCell align='center' style={{ fontWeight: 'bold' }}>
                Tipul Concediului
              </TableHeaderCell>
              <TableHeaderCell align='center' style={{ fontWeight: 'bold' }} width='500px'>
                Data de inceput
              </TableHeaderCell>
              <TableHeaderCell align='center' style={{ fontWeight: 'bold' }} width='500px'>
                Data de sfarsit
              </TableHeaderCell>
              <TableHeaderCell align='center' style={{ fontWeight: 'bold' }}>
                Inlocuitor
              </TableHeaderCell>
              <TableHeaderCell align='center' style={{ fontWeight: 'bold' }}>
                Motiv
              </TableHeaderCell>
              <TableHeaderCell align='center' style={{ fontWeight: 'bold' }}>
                Starea concediului
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.state?.tableData?.map(row => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component='th' scope='row' align='center'>
                  {row.tipConcediu}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.dataInceput.substring(0, 10)}</StyledTableCell>
                <StyledTableCell align='center'>{row.dataSfarsit.substring(0, 10)}</StyledTableCell>
                <StyledTableCell align='center'>{row.numeInlocuitor}</StyledTableCell>
                <StyledTableCell align='center'>{row.comment}</StyledTableCell>
                <StyledTableCell align='center'>{row.stareConcediu}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={props.idDivButoane}>
        <Button className={props.idDatButonInapoi} onClick={handleClickInapoi}>
          Inapoi
        </Button>
        <h5 className={props.idPagLabel}>
          {props.state.indexEndActual / props.state.numarElemPePag}/{props.state.numarPagini}
        </h5>
        <Button className={props.idDatButonInainte} onClick={handleClickInainte}>
          Inainte
        </Button>
      </div>
    </div>
  )
}
ProfileTabelConcedii.propTypes = {
  emailUtilizator: PropTypes.string.isRequired,
  idDat: PropTypes.string.isRequired,
  idDivButoane: PropTypes.string.isRequired,
  idDatButonInainte: PropTypes.string.isRequired,
  idPagLabel: PropTypes.string.isRequired,
  idDatButonInapoi: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
export default ProfileTabelConcedii
