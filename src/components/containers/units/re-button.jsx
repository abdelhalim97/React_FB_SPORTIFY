import React from 'react'
import {Button} from "@material-ui/core"

export const ReButton = (props) => {
  return (
    <>
      <Button variant={props.variant} className={props.styles} onClick={props.fnc}>{props.title}</Button>
    </>
  )
}
