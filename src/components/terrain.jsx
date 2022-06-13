import React, { useState } from 'react'
import { OurModal,DisplayTerrain } from './containers'
import { Grid } from '@mui/material'
import { Border, TypographyIcon } from './containers/units'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import useFetchStadiums from '../custom-hooks/useFetchStadiums'
import {Pagination} from './containers/units'

export const Terrain = () => {
  const data=useFetchStadiums()
  const [pageNumber, setPageNumber] = useState(0)
  const dataPerPage=1
  const pagesVisited=dataPerPage*pageNumber
  return (
    <>
      <Border>
          <Grid item xs={12} className='flex justify-end my-3 mr-2'>
            <OurModal/>
          </Grid>
          <Grid item xs={12}>
            {data.length>0 &&
            data?.slice(pagesVisited,pagesVisited+dataPerPage).map((d,i)=>
            <DisplayTerrain key={i} name={d.name} cost={d.cost} lng={d.lng} lat={d.lat} uid={d.uid} />
            )}
            {data.length===0 && <TypographyIcon variant='body1' styles='text-red-600 text-center mb-3' icon={faTriangleExclamation} text='you dont have any Stadiums yet'/>}
          </Grid>
          <Pagination data={data} setPageNumber={setPageNumber} dataPerPage={dataPerPage} />
        </Border>
    </>
  )
}
