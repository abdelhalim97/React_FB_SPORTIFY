import { Grid } from '@mui/material'
import React from 'react'
import useFetchStadiums from '../../custom-hooks/useFetchStadiums'
import useFetchReservationsUser from '../../custom-hooks/useFetchReservationsUser'
import { Card } from './units'
import iconStadium from '../../assets/images/stadium.png'
import iconReservation from '../../assets/images/reservation2.png'
import iconMoney from '../../assets/images/money.png'

export const Cards = () => {
    const stadiumsData = useFetchStadiums()
    const stadiumsUserArrya=stadiumsData.map(d=>d.uid)
    const reservationUserData = useFetchReservationsUser(stadiumsUserArrya)
    const reservationCost =reservationUserData.reduce((accumulator,currentElement,index)=>parseFloat(accumulator)+((
        (parseInt(currentElement.toHours)*60+parseInt(currentElement.toMinutes))-(parseInt(currentElement.fromHours)*60+parseInt(currentElement.fromMinutes))
    )/60)*parseInt(currentElement.cost),'0')
    const cardsData = [
        {
        id:0,
        dataLength:stadiumsData.length,
        desc:'Stadiums',
        icon:iconStadium
    },
    {
        id:1,
        dataLength:reservationUserData.length,
        desc:'Reservations',
        icon:iconReservation
    },
    {
        id:2,
        dataLength:reservationCost,
        desc:'Earned',
        icon:iconMoney
    },
]
  return (
    <>
        {cardsData.map(cardData=>
        <Grid key={cardData.id} item xs={12} sm={4}>
            <Card desc={cardData.desc} nb={cardData.dataLength} icon={cardData.icon} id={cardData.id} />
        </Grid>)}
    </>
  )
}
