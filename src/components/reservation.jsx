import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Border,Pagination,TypographyIcon } from './containers/units'
import { DataGrid } from '@mui/x-data-grid';
import useFetchStadiums from '../custom-hooks/useFetchStadiums';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import useFetchReservations from '../custom-hooks/useFetchReservations';

export const Reservation = () => {
  const data = useFetchStadiums()
  const [rentUid, setRentUid] = useState('')
  const [pageNumber, setPageNumber] = useState(0)
  const dataPerPage=1
  const pagesVisited=dataPerPage*pageNumber
  useEffect(() => {
    data?.slice(pagesVisited,pagesVisited+dataPerPage).map((d)=>setRentUid(d.uid))
  }, [data,pageNumber])
  const dataReservations = useFetchReservations(rentUid)
    const columns = [
        { field: 'Terrain name', headerName: 'Terrain name', width: 150 },
        // { field: 'Client email', headerName: 'Client email', width: 130 },
        // { field: 'Client name', headerName: 'Client name', width: 130 },
        { field: 'cost',headerName: 'Cost',width: 50,},
        { field: 'Reservation duration',headerName: 'Reservation duration',width: 150,},
      ]
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
  return (
    <Border>
      {data.length>0 &&
        data?.slice(pagesVisited,pagesVisited+dataPerPage).map((d,i)=>
          <Grid key={i} item xs={12} style={{height:400}}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection/>
          </Grid>
            )}
      {data.length===0 && <TypographyIcon variant='body1' styles='text-red-600 text-center mb-3' icon={faTriangleExclamation} text='you dont have any Stadiums yet'/>}
      <Pagination data={data} setPageNumber={setPageNumber} dataPerPage={dataPerPage} setRentUid={setRentUid} />
    </Border>
  )
}