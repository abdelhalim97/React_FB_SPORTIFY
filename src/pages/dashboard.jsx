import React from 'react'
import {  Grid, Typography } from '@material-ui/core'
import { IconButton } from '../components/containers/units'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import {faIdBadge} from '@fortawesome/free-regular-svg-icons'
import { Routes,Route } from "react-router-dom";
import { Home, Terrain } from '../components';
import img from '../assets/images/motif.jpg'
export const Dashboard = () => {
    const buttonsData=[
        {
            id:0,
            title:'Profile',
            icon:faIdBadge,
            link:'./'
        },
        {
            id:1,
            title:'Terrain',
            icon:faFutbol,
            link:'./terrain'
        },
    ]
  return (
      <>
      <Grid container>
      <Grid item xs={4} sm={2}  className='bg-sec relative' style={{ height:'100vh' }}>
          {/* <img src={img} className='absolute opacity-40'/> */}
            <Typography variant='h6' className='text-third text-center'>SPORTIFY</Typography>
            {buttonsData.map(data=>
                <IconButton key={data.id} link={data.link} icon={data.icon} title={data.title} />
            )}
        </Grid>
        <Grid item xs={8} sm={10} >
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/terrain" element={<Terrain/>}></Route>
            </Routes>
        </Grid>
      </Grid>
    </>
  )
}
