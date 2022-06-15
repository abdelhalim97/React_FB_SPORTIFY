import { TextField } from '@mui/material'
import React from 'react'

const MapChange = ({name,setName,dName}) => {
    console.log(name)
  return (
    <input   defaultValue={dName} value={dName}
                 onChange={(e)=>{setName(e.target.value)}} 
                 />
  )
}

export default MapChange