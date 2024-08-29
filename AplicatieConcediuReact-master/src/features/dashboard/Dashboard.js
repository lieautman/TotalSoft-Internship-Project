import React from 'react'
import CardEchipa from './CardEchipa'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'
import StilCarduri from './StilCarduri'
import carduri from './StilCarduri'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import ECHIPE_DATA_QUERY from './Queries'

const useStyles = makeStyles(carduri)
// const echipeArray = [
//   {
//     id: 1,
//     nume: 'Marketing',
//     descriere: 'test',
//     poza: './images/HouseOfMarketing.png'
//   },
//   {
//     id: 2,
//     nume: 'Resurse umane',
//     descriere: 'test1',
//     poza: './images/HouseOfHumanResources.png'
//   },
//   {
//     id: 3,
//     nume: 'Dezvoltare',
//     descriere: 'test1',
//     poza: './images/HouseOfDevelopment.png'
//   },
//   {
//     id: 4,
//     nume: 'Servicii financiare',
//     descriere: 'test1',
//     poza: './images/HouseOfFinancialServices.png'
//   },
//   {
//     id: 5,
//     nume: 'IT Suport',
//     descriere: 'test1',
//     poza: './images/HouseOfItSupport.png'
//   }
// ]

export default function Dashboard() {
  const { data } = useQueryWithErrorHandling(ECHIPE_DATA_QUERY)

  const carduriStyle = useStyles()
  return (
    <Grid container className={carduriStyle.displayCarduri}>
      {data?.echipaData.map(echipa => (
        <CardEchipa echipa={echipa} key={echipa.id}></CardEchipa>
      ))}
    </Grid>
  )
}
