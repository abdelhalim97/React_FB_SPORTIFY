import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
export const IconButton = (props) => {
  return (
    <>
        <Button variant='text' className={'w-4/5  lg:w-3/5 rounded-md  '+props.styles} onClick={props.fnc} >
          <FontAwesomeIcon icon={props.icon} className='mr-2'/>{props.title}
        </Button>
    </>
  )
}
