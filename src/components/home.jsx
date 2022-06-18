import { Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import img from '../assets/images/avatar.png'
import { auth } from '../auth/firebase'
import { TypographyIcon } from './containers/units'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { onAuthStateChanged } from 'firebase/auth'
import { Cards, Charts } from './containers'

export const Home = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth,user=>{
    setUser(user)
    if (initializing) setInitializing(false);
  })
  return (
    <>
     {initializing?  null:
     <div className='bg-base '>
     {/* {!user.emailVerified&&
       <TypographyIcon styles='text-red-800 text-center' icon={faTriangleExclamation} variant='h6' text={`please verify your email ${user.email}`}/>
     } */}
     <Container maxWidth='lg' className='py-5'>
     <Grid container>
       <Grid item sm={12} md={3} className='mx-auto'>
         <img src={img} className='rounded-full bg-third mx-auto h-16 w-16' alt='avatar'/>
         <Typography variant='h6' className='text-third text-center'>{user.displayName? user.displayName:user.email}</Typography>
       </Grid>  
       <Grid item container spacing={3} sm={12} md={9}>
        <Cards/>
       </Grid>
       <Grid item xs={12}>
        <Charts/>
       </Grid>
      </Grid>
     </Container>
   </div> 
     } 
    </>
  )
}