import { TextField } from '@material-ui/core'
import React from 'react'

export const ReInput = (props) => {
  return (
      <>
        <TextField variant='standard' label={props.label} className={props.styles}  type={props.types}></TextField>
      </>
  )
}
