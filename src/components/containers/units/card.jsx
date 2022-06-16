import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export const Card = (props) => {
  return (
    <Paper elevation={3} className='mt-4 sm:mt-8'>
        <Container maxWidth='lg'>
            <Grid container alignItems="center" className='py-3 '>
                <div className='w-full flex justify-center'>
                    <img src={props.icon} alt='stadium' width='64' height='64' className={`${props.id===0&&'top-5'} ${props.id===1&&'top-3'} ${props.id===2&&'top-4'} absolute `}/>

                </div>
                {/* <img src={props.icon} alt='stadium' width='64' height='64' className={`${props.id===1?'bottom-14':'bottom-12'} absolute right-10 xl:right-32 lg:right-24 md:right-18 sm:right-14`}/> */}

                <Grid item xs={12}>
                    <Typography variant='h6' className='text-center'>{props.nb}</Typography>
                    <Typography variant='body2' className='text-center text-sec'>{props.desc}</Typography>
                </Grid>
            </Grid>
        </Container>
    </Paper>
  )
}
