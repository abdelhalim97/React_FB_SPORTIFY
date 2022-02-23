import React from 'react'
import {Button} from "@material-ui/core"

export const ReButton = (props) => {
  return (
    <>
      <Button className='text-third bg-base rounded-2xl' onClick={props.fnc}>{props.text}</Button>
    </>
  )
}
