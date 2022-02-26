import React, { useEffect, useState } from 'react'
import { OurModal } from './containers'
import { db,auth } from '../auth/firebase'
import { ref,onValue, onChildAdded } from 'firebase/database'
import { DisplayTerrain } from './containers'
export const Terrain = () => {
    const [data, setData] = useState(undefined)
    const [f, setf] = useState(undefined)
    useEffect(() => {
      const stadiumRef=ref(db,'stadiums/'+auth.currentUser.uid)
      onValue(stadiumRef,(snapshot)=>{
        if(snapshot.val()!==null){
          setf([snapshot.val()])
        }
      })
  }, [])
  useEffect(() => {
    const newRef=ref(db,'stadiums')
  onValue(newRef,data=>{
    const childData = data.val();
  console.log([childData].map(d=><div>d</div>))
    setData([childData])
  })
  }, [])
  // console.log(f)   

// FIXME: refresh doesnt work on production
  return (
    <>
      <div className='grid content-center h-full'>
        <div className='w-5/6 border border-sec shadow-sm mx-auto rounded-md'>
          <div className='flex justify-end my-3 mr-2'>
            <OurModal/>
          </div>
{/* {          data.map(d=><div>{d.cost}</div>) */}
          {/* {data!==undefined&&data.map((d,i)=><DisplayTerrain key={i} name={d.name} cost={d?.cost} lng={d.lng} lat={d.lat} />)} */}

        </div>
      </div>
    </>
  )
}
