import { Box, Grid, Typography } from '@material-ui/core'
import React, {  useState } from 'react'
import { MapBoxFlyTo } from './units'
import {faBan} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ref, remove } from 'firebase/database'
import { auth, db } from '../../auth/firebase'
export const DisplayTerrain = (props) => {
  const [lat, setLat] = useState(props.lat)
  const [lng, setLng] = useState(props.lng)
  const deleteStadium =()=>{
    const redDB=ref(db,'stadiums'+auth.currentUser.uid+'/'+props.uid)
    // set(ref, 
    //   null
    // );
    remove(redDB)
  }
  return (
    <>
      <Grid container className=' my-4' justifyContent="space-around" >
        <Grid sm={9} md={7} item container justifyContent="center">
          <Grid item xs={11}>
            <MapBoxFlyTo lat={props.lat} lng={props.lng} setLng={setLng} setLat={setLat} initialZ={18}/>
            <Box mt={9}></Box>
          </Grid>
        </Grid>
        <Grid sm={9} md={4} item className='bg-gray-100 rounded-md'>
          <div className='flex justify-end'>
            <button onClick={()=>{deleteStadium()}}>
              <FontAwesomeIcon icon={faBan} className='mt-2 mr-2 text-red-500'/>
            </button>
          </div>
          <div className='flex items-center h-full'>
            <div className='mx-auto'>
              <Typography variant='subtitle1' className='text-center'>Stadium name: <span className='text-base font-bold'>{props.name}</span></Typography>
              <Typography variant='subtitle1' className='text-center'>cost: <span className='text-base font-bold'>{props.cost}</span></Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
