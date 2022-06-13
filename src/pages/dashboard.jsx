import React from 'react'
import { Grid } from '@mui/material'
import { LinkIconButton } from '../components/containers/units'
import { faFutbol,faRightFromBracket,faEarthAfrica, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import {faIdBadge} from '@fortawesome/free-regular-svg-icons'
import { Routes,Route } from "react-router-dom";
import { Home, Terrain, AllTerrains, Reservation } from '../components';
import { signOut } from 'firebase/auth'
import { auth } from '../auth/firebase'
import { ErrorPage } from '.'

export const Dashboard = () => {
    const handleLogout=async()=>{
        await signOut(auth)
    }
    // TODO: add route displaying all elements 
    const buttonsData=[
        {
            id:0,
            title:'Profile',
            icon:faIdBadge,
            link:'./',
        },
        {
            id:1,
            title:'My Stadiums',
            icon:faFutbol,
            link:'./terrain',
        },
        {
            id:3,
            title:'Reservations',
            icon:faDollarSign,
            link:'./reservations',
        },
        {
            id:4,
            title:'All Stadiums',
            icon:faEarthAfrica,
            link:'./all-stadiums',
        },
        {
            id:5,
            title:'Logout',
            icon:faRightFromBracket,
            link:'./',
            fnc:handleLogout
        },
    ]
  return (
    <>
        <Grid container>
            <Grid item xs={3} sm={2}  className='bg-sec relative' style={{ height:'94vh' }}>
                <div className='text-third text-center text-sm sm:text-xl font-bold'>SPORTIFY</div>
                {buttonsData.map(data=>
                    <LinkIconButton key={data.id} link={data.link} icon={data.icon} title={data.title} fnc={data.fnc} />
                )}
            </Grid>
            <Grid item xs={9} sm={10} >
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/* auth.currentUser.emailVerified&& */}
                    {<Route path="/terrain" element={<Terrain/>}/>}
                    {<Route path="/reservations" element={<Reservation/>}/>}
                    {/* auth.currentUser.emailVerified&& */}
                    {<Route path="/all-stadiums" element={<AllTerrains/>}/>}
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </Grid>
        </Grid>
    </>
  )
}
