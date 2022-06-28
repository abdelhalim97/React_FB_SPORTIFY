import { useState, useEffect } from "react";
import { ref,onValue } from 'firebase/database'
import { db } from "../auth/firebase";

const useFetchReservationsUser = (terrain)=>{
    const [rentData, setRentData] = useState([]);
    useEffect(() => {
        if(terrain){
          onValue(ref(db,'reservation'),(snapshot)=>{
            setRentData([])
            const dataLocalRent = snapshot.val();
            if(dataLocalRent!==null){
              Object.values(dataLocalRent).map((d)=>{
                console.log(d.stadiumUid.includes(terrain))
                if(d.stadiumUid.includes(terrain))
                setRentData((oldArray)=>[...oldArray,d]);
                return 0
              })
            }
          })  
        }
      }, [])
    return rentData
}
export default useFetchReservationsUser