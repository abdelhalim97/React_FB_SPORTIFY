import { TextField } from '@material-ui/core'
import React from 'react'

export const ReInput = (props) => {
  return (
      <>
        <TextField variant='standard' value={props.value} onChange={props.onChange} label={props.label} className={props.styles} type={props.types}>
        </TextField>
      </>
  )
}
