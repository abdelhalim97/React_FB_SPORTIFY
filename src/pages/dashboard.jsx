import React from 'react'
import {  Button, Grid, Typography } from '@material-ui/core'
import { IconButton } from '../components/containers/units'
import { faFutbol,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {faIdBadge} from '@fortawesome/free-regular-svg-icons'
import { Routes,Route } from "react-router-dom";
import { Home, Terrain } from '../components';
import { signOut } from 'firebase/auth'
import { auth } from '../auth/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Dashboard = () => {
    const handleLogout=async()=>{
        await signOut(auth)
    }
    const buttonsData=[
        {
            id:0,
            title:'Profile',
            icon:faIdBadge,
            link:'./',
        },
        {
            id:1,
            title:'Terrain',
            icon:faFutbol,
            link:'./terrain',
        },
        {
            id:2,
            title:'Logout',
            icon:faRightFromBracket,
            link:'./',
            fnc:handleLogout
        },
    ]
  return (
    <>
        <Grid container>
            <Grid item xs={4} sm={2}  className='bg-sec relative' style={{ height:'100vh' }}>
                <Typography variant='h6' className='text-third text-center'>SPORTIFY</Typography>
                {buttonsData.map(data=>
                    <IconButton key={data.id} link={data.link} icon={data.icon} title={data.title} fnc={data.fnc} />
                )}
                {/* <div className='flex justify-center'>
                    <Button variant='text' onClick={handleLogout} className='flex justify-center rounded-md w-4/5 '>
                        <FontAwesomeIcon icon={faRightFromBracket} className='mr-2'/>Logout
                    </Button>
                </div> */}
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
