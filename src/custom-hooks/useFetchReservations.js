import { useState, useEffect } from "react";
import { ref,onValue } from 'firebase/database'
import { db } from "../auth/firebase";

const useFetchReservations = (terrain)=>{
    const [rentData, setRentData] = useState([]);
    useEffect(() => {
        if(terrain){
          onValue(ref(db,'reservation'),(snapshot)=>{
            setRentData([])
            const dataLocalRent = snapshot.val();
            if(dataLocalRent!==null){
              Object.values(dataLocalRent).map((d)=>{
                if(d.stadiumUid===terrain)
                setRentData((oldArray)=>[...oldArray,d]);
                return 0
              })
            }
          })  
        }
      }, [terrain])
    return rentData
}
export default useFetchReservations
