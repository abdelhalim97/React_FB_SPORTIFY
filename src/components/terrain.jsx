import React, { useEffect, useState } from 'react'
import { OurModal } from './containers'
import { db,auth } from '../auth/firebase'
import { ref,onValue } from 'firebase/database'
import { DisplayTerrain } from './containers'
export const Terrain = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      onValue(ref(db,'stadiums',auth.currentUser.uid),(snapshot)=>{
        setData([])
        const dataLocal = snapshot.val();
        if(dataLocal!==null){
          Object.values(dataLocal).map((d)=>{
            setData((oldArray)=>[...oldArray,d]);
          })
        }
      })
  }, [])
// FIXME: refresh doesnt work on production
return (
    <>
      <div className='grid content-center h-full'>
        <div className='w-5/6 border border-sec shadow-sm mx-auto rounded-md'>
          <div className='flex justify-end my-3 mr-2'>
            <OurModal/>
          </div>
          {/* {data.map((d,i)=><div key={i}>f:{d.cost}</div>)} */}
          {data!==[]&&data?.map((d,i)=><DisplayTerrain key={i} name={d.name} cost={d.cost} lng={d.lng} lat={d.lat} />)}
        </div>
      </div>
    </>
  )
}
