import { Container, Grid } from '@mui/material'
import React from 'react'

export const Border = ({children}) => {
  return (
    <Container maxWidth='lg'  className='grid content-center h-full '>
        <Grid container className=' border border-sec shadow-md mx-auto rounded-md pb-2   overflow-x-auto'>
            {children}
        </Grid>
    </Container>
  )
}