import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@material-ui/core'
import React from 'react'

export const TypographyIcon = (props) => {
  return (
      <>
        <Typography variant='h6' className='text-red-800 text-center'><FontAwesomeIcon icon={faTriangleExclamation}/>
        &nbsp;{props.text}</Typography>
      </>
  )
}
