import React, { useState } from 'react'
import { LinkIconButton } from '../components/containers/units'
import { faFutbol,faRightFromBracket, faDollarSign, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import {faIdBadge} from '@fortawesome/free-regular-svg-icons'
import { Routes,Route } from "react-router-dom";
import { Home, Terrain, AllTerrains, Reservation } from '../components';
import { signOut } from 'firebase/auth'
import { auth } from '../auth/firebase'
import { ErrorPage } from '.'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Dashboard = () => {
    const [dashBoardDisplay, setDashBoardDisplay] = useState(true)
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
        // {
        //     id:4,
        //     title:'All Stadiums',
        //     icon:faEarthAfrica,
        //     link:'./all-stadiums',
        // },
        {
            id:5,
            title:'Logout',
            icon:faRightFromBracket,
            link:'./',
            fnc:handleLogout
        },
    ]
  return (
        <div container className='relative md:static flex' >
            <div className={`${dashBoardDisplay?'w-4/7 sm:w-1/4':'w-1/12 sm:w-1/12'} bg-sec md:w-1/5 lg:w-1/5 absolute md:static z-30`} style={{minHeight:'100vh'}}>
                <div className={`${dashBoardDisplay?'opacity-100':'sm:opacity-0 opacity-0'} md:opacity-100 text-white text-center text-sm sm:text-xl font-bold`}>SPORTIFY</div>
                {buttonsData.map(data=>
                    <LinkIconButton dashBoardDisplay={dashBoardDisplay} key={data.id} link={data.link} icon={data.icon} title={data.title} fnc={data.fnc} />
                )}
                <FontAwesomeIcon icon={dashBoardDisplay?faArrowAltCircleLeft:faArrowAltCircleRight} onClick={()=>setDashBoardDisplay(!dashBoardDisplay)} 
                    className='md:hidden absolute right-0 cursor-pointer text-third hover:text-black active:text-third z-40'/>
            </div>
            <div className='w-full md:w-4/5 lg:w-4/5' >
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {auth.currentUser.emailVerified&&
                    <>
                        <Route path="/terrain" element={<Terrain/>}/>
                        <Route path="/reservations" element={<Reservation/>}/>
                        <Route path="/all-stadiums" element={<AllTerrains/>}/>
                    </>
                    }
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </div>
        </div>
  )
}
