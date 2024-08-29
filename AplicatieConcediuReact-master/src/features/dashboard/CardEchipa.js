import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

export default function CardEchipa(props) {
  const { echipa } = props
  return (
    <Grid item xs={4}>
      <Card>
        <CardMedia component='img' height='250' image={`data:image/*;base64,${echipa.poza}`} alt='poza echipei' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {echipa.nume}
          </Typography>
          <Typography variant='body2'>
            {echipa.descriere}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/angajati_echipe/${echipa.nume}`}>
            <Button variant='contained' style={{ backgroundColor: '#26c6da' }}>
              Vizualizeaza echipa
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

CardEchipa.propTypes = {
  echipa: PropTypes.object.isRequired
}
