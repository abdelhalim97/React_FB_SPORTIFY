import React, { useEffect, useState } from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import { auth, db } from '../../auth/firebase';
import { onValue, ref } from 'firebase/database';
  ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
export const Charts = () => {
    const [stadiums, setStadiums] = useState([]);
    useEffect(() => {
        onValue(ref(db,'stadiums'),(snapshot)=>{
            setStadiums([])
          const dataLocal = snapshot.val();
          if(dataLocal!==null){
            Object.values(dataLocal).map((d)=>{
              if(d.userEmail===auth.currentUser.email){
                setStadiums((oldArray)=>[...oldArray,d]);
              }
              return 0
            })
          }
        })
    }, [])
    const labels = stadiums.map(stade=>stade.name)
    const [reservationData, setReservationData] = useState([]);
    useEffect(() => {
        if(stadiums){
          onValue(ref(db,'reservation'),(snapshot)=>{
            setReservationData([])
            const dataLocalRent = snapshot.val();
            if(dataLocalRent!==null){
              Object.values(dataLocalRent).map((d)=>{
                setReservationData((oldArray)=>[...oldArray,d]);
                return 0
              })
            }
          })  
        }
      }, [stadiums])
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };
    const dataBef = stadiums.map(stade=>
        { return{
            data: reservationData&&
                reservationData.filter(d=>d.stadiumUid===stade.uid).reduce((accumulator,currentElement)=> 
                parseFloat(accumulator)+((
                    (parseInt(currentElement.toHours)*60+parseInt(currentElement.toMinutes))-(parseInt(currentElement.fromHours)*60+parseInt(currentElement.fromMinutes))
                )/60)*parseInt(currentElement.cost),0),
            }
        })
        const dataNew = []
        dataBef.map(d=>dataNew.push(d.data))
        const label = stadiums.map(stade=>stade.name)
      const data={
        labels,
        datasets:
                [{ 
                    label: 'Stadiums profit',
                    data: dataNew,
                    backgroundColor: '#8fb1e9'
                }]
                }
  return (
    <Bar options={options} data={data} />
  )
}
