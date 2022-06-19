import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export const LinkIconButton = (props) => {
  console.log()
  return (
    <>
      <Link to={props.link} className={`${props.dashBoardDisplay?'flex':'hidden sm:hidden'} lg:flex md:flex  w-full justify-center`} >
        <Button variant='text' className='rounded-md w-4/5 font-bold text-xs text-slate-900 ' onClick={props.fnc}>
          <FontAwesomeIcon icon={props.icon} className='mr-2 text-slate-900'/>{props.title}
        </Button>
      </Link>
    </>
  )
}
