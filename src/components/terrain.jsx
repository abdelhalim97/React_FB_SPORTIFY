import React, { useEffect, useState } from 'react'
import { OurModal,DisplayTerrain } from './containers'
import { db,auth } from '../auth/firebase'
import { ref,onValue } from 'firebase/database'
import ReactPaginate from 'react-paginate'
import { Container, Grid } from '@mui/material'
import { Border, TypographyIcon } from './containers/units'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
export const Terrain = () => {
    const [data, setData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const dataPerPage=1
    const pagesVisited=dataPerPage*pageNumber
    useEffect(() => {
      onValue(ref(db,'stadiums'),(snapshot)=>{
        setData([])
        const dataLocal = snapshot.val();
        if(dataLocal!==null){
          Object.values(dataLocal).map((d)=>{
            console.log(d.userId)
            if(d.userId===auth.currentUser.uid){
              setData((oldArray)=>[...oldArray,d]);
            }
            return 0
          })
        }
      })
  }, [])
  const pageCount = Math.ceil(data.length/dataPerPage)
  const changePage=({selected})=>setPageNumber(selected)
  return (
    <>
      <Border>
          <Grid item xs={12} className='flex justify-end my-3 mr-2'>
            <OurModal/>
          </Grid>
          <Grid item xs={12}>
            {data.length>0 &&
            data?.slice(pagesVisited,pagesVisited+dataPerPage).map((d,i)=>
            <DisplayTerrain key={d.i} name={d.name} cost={d.cost} lng={d.lng} lat={d.lat} uid={d.uid} />
            )}
            {data.length===0 && <TypographyIcon variant='body1' styles='text-red-600 text-center mb-3' icon={faTriangleExclamation} text='you dont have any Stadiums yet'/>}
          </Grid>
          {data.length!==0&&<ReactPaginate previousLabel={'<'} nextLabel={'>'} pageCount={pageCount} onPageChange={changePage}
            containerClassName={'bg-gray-100 flex mx-auto rounded-full px-4 py-1  justify-center items-center'}
            previousLinkClassName={'text-sec px-1'} nextLinkClassName={'text-sec px-1'}
            activeClassName={'bg-base rounded-full py-1'}
            activeLinkClassName={'bg-opacity-0 mx-0'}
            pageLinkClassName={'bg-sec text-third rounded-full px-2 pb-1 mx-1'}
            breakLabel="..."/>}
        </Border>
    </>
  )
}
