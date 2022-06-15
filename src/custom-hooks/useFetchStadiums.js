import { useState, useEffect } from "react";
import { ref,onValue } from 'firebase/database'
import { auth, db } from "../auth/firebase";

const useFetchStadiums = ()=>{
    const [data, setData] = useState([]);
    useEffect(() => {
        onValue(ref(db,'stadiums'),(snapshot)=>{
          setData([])
          const dataLocal = snapshot.val();
          if(dataLocal!==null){
            Object.values(dataLocal).map((d)=>{
              if(d.userEmail===auth.currentUser.email){
                setData((oldArray)=>[...oldArray,d]);
              }
              return 0
            })
          }
        })
    }, [])
    return data
}
export default useFetchStadiums