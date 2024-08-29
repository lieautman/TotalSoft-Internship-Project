/* eslint-disable react/react-in-jsx-scope */
import react from 'react'
import NavigateNext from '@material-ui/icons/NavigateNext'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import { IconButton, makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'

const stilAng = makeStyles(stilAngajati)

export default function Paginare() {
  const stilButoanePaginare = stilAng()
  return (
    <div className={stilButoanePaginare.divMarebutoane}>
      <div>
        <IconButton aria-label='NavigateBefore' style={{ backgroundColor: '#05241d', color: 'white' }}>
          <NavigateBefore />
        </IconButton>
      </div>
      <div className={stilButoanePaginare.divButonInainte}>
        <IconButton aria-label='NavigateNext' style={{ backgroundColor: '#05241d', color: 'white' }}>
          <NavigateNext />
        </IconButton>
      </div>
    </div>
  )
}
