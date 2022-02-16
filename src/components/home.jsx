import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import img from '../assets/images/avatar.png'
import { auth } from '../auth/firebase'
import { TypographyIcon } from './containers/units'
export const Home = () => {
  console.log(auth)
  return (
    <>
      <div className='bg-base h-2/5'>
        {!auth.currentUser.emailVerified&&<TypographyIcon text={`${auth.currentUser.displayName} please verify your email`}/>}
        <Container maxWidth='lg' className='py-5'>
          <Grid item md={3}>
            <img src={img} className='rounded-full bg-third mx-auto h-16 w-16' alt='avatar'/>
            <Typography variant='h6' className='text-third text-center'>{auth.currentUser.displayName}</Typography>
            <Typography variant='h6' className='text-third text-center'>{auth.currentUser.phoneNumber}</Typography>
          </Grid>
          <Grid item md={9}>

          </Grid>
        </Container>
      </div>
    </>
  )
}