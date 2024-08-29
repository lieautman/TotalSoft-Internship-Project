import * as React from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import RanduriAngajatiDePromovat from './RanduriAngajatiDePromovat'
import TableBody from '@material-ui/core/TableBody'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'
import HeaderTabelPromovare from './HeaderTabelPromovare'

const useStyles = makeStyles(stilAngajati)

export default function TabelAngajatiDePromovat(props) {
  const { rows, setIdRand, indexSelectat, setareId } = props
  const stilTabel = useStyles()
  return (
    <div>
      <TableContainer component={Paper}>
        <div className={stilTabel.tabel}>
          <Table sx={{ minWidth: 400 }} aria-label='customized table'>
            <HeaderTabelPromovare></HeaderTabelPromovare>
            <TableBody>
              {rows.map((row, index) => (
                <RanduriAngajatiDePromovat
                  row={row}
                  key={index}
                  index={index}
                  setIdRand={setIdRand}
                  indexSelectat={indexSelectat}
                  setareId={setareId}
                ></RanduriAngajatiDePromovat>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  )
}
TabelAngajatiDePromovat.propTypes = {
  rows: PropTypes.array.isRequired,
  setIdRand: PropTypes.func,
  indexSelectat: PropTypes.number,
  setareId: PropTypes.func
}
