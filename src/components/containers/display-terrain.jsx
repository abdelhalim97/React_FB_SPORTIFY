import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MapBoxFlyTo,IconButtonNormal, MapBox } from './units'
import {faTrash,faPenToSquare, faCircleXmark, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { ref, remove, set } from 'firebase/database'
import { auth, db } from '../../auth/firebase'

export const DisplayTerrain = (props) => {
  const [lat, setLat] = useState(props.lat)
  const [lng, setLng] = useState(props.lng)
  const [update, setupdate] = useState(false)
  const [name, setName] = useState(null)
  const [cost, setCost] = useState(null)
  const updateStadium =()=>{
    const reff=ref(db,'stadiums'+'/'+props.uid)
    set(reff, 
      {name:name||props.name,
      cost:parseFloat(cost)||parseFloat(props.cost),
      uid:props.uid,
      lng:props.lng===lng?props.lng:lng,
      lat:props.lat===lat?props.lat:lat,
      userEmail:auth.currentUser.email,
    }
    );
  }
  const deleteStadium =()=>{
    const redDB=ref(db,'stadiums'+'/'+props.uid)
    remove(redDB)
  }
  return (
      <Grid container className=' my-4' justifyContent="space-around" >
        <Grid sm={9} md={7} item container justifyContent="center">
          <Grid item xs={11}>
            {!update?
              <MapBoxFlyTo lat={props.lat} lng={props.lng} initialZ={16}/>
              :<>
              <MapBox lng={props.lng} setLng={setLng} lat={props.lat} setLat={setLat} initialZ={16}/>
              </>}
            <Box mt={9}></Box>
          </Grid>
        </Grid>
        <Grid sm={9} md={4} item className='bg-gray-100 rounded-md mt-2' style={{display:'grid',gridTemplateRows:'1fr 5fr'}}>
            <div className='flex justify-end w-full'>
              {!update?<IconButtonNormal icon={faPenToSquare} fnc={()=>{setupdate(true)}} styles='text-green-500' title=''/>
              :<>
                <IconButtonNormal icon={faCircleXmark} fnc={()=>{setupdate(false)}} styles='text-red-500' title=''/>
                <IconButtonNormal icon={faCircleCheck} fnc={()=>{updateStadium();setupdate(false)}} styles='text-green-500' title=''/>
              </>}
              <IconButtonNormal icon={faTrash} fnc={()=>{deleteStadium()}} styles='text-red-500' title=''/>
            </div>
            <Grid container alignItems='center'>
              {!update?
              <Container maxWidth='xl' className='mx-auto'>
                <Typography variant='subtitle1' className='text-center w-full'>Stadium name: <span className='text-base font-bold'>{props.name}</span></Typography>
                <Typography variant='subtitle1' className='text-center w-full'>cost: <span className='text-base font-bold'>{props.cost}</span></Typography>
              </Container>
              :<Container maxWidth='xl' className='mx-auto'>
                <TextField variant='standard' label='name' defaultValue={props.name||name} onChange={(e)=>{setName(e.target.value)}} /><br/>
                <TextField variant='standard' label='cost' defaultValue={props.cost||cost} onChange={(e)=>{setCost(e.target.value)}} />
              </Container>
              }
            </Grid>
        </Grid>
      </Grid>
  )
}
