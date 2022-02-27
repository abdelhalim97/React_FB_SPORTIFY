import { Box, Grid, Typography } from '@material-ui/core'
import React, {  useState } from 'react'
import { MapBox } from './units'
export const DisplayTerrain = (props) => {
  const [lat, setLat] = useState(props.lat)
  const [lng, setLng] = useState(props.lng)
  return (
    <>
    <Grid container className=' my-4' justifyContent="space-around" >
      <Grid  sm={9} md={7} item container justifyContent="center">
        <Grid item xs={11}>
        <MapBox lat={lat} lng={lng} setLat={setLat} setLng={setLng} initialZ={18}/>
        <Box mt={9}></Box>
        </Grid>
      </Grid>
      <Grid sm={9} md={4} item className='bg-gray-100  flex items-center  rounded-md'>
        <div className='mx-auto'>
          <Typography variant='subtitle1' className='text-center'>Stadium name: <span className='text-base font-bold'>{props.name}</span></Typography>
          <Typography variant='subtitle1' className='text-center'>cost: <span className='text-base font-bold'>{props.cost}</span></Typography>
        </div>
      </Grid>
    </Grid>
        
    </>
  )
}
