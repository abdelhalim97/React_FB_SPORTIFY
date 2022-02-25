import { Box, Typography } from '@material-ui/core'
import React, {  useState } from 'react'
import { MapBox } from './units'
export const DisplayTerrain = (props) => {
  const [lat, setLat] = useState(props.lat)
  const [lng, setLng] = useState(props.lng)
  return (
    <>
      <div className='flex justify-between'>
        <div className='w-2/3 my-3 mx-2'>
          <MapBox lat={lat} lng={lng} setLat={setLat} setLng={setLng} initialZ={18}/>
          <Box mt={9}></Box>
        </div>
        <div className='bg-gray-100 w-1/3 flex items-center my-3 mx-2 rounded-md'>
          <div className='mx-auto'>
            <Typography variant='subtitle1' className='text-center'>Stadium name: <span className='text-base font-bold'>{props.name}</span></Typography>
            <Typography variant='subtitle1' className='text-center'>cost: <span className='text-base font-bold'>{props.cost}</span></Typography>
          </div>
        </div>
      </div>
    </>
  )
}
