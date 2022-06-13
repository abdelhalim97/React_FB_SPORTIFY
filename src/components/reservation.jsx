import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
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
        { field: 'cost', headerName: 'Cost', width: 150 },
        // { field: 'Client email', headerName: 'Client email', width: 130 },
        // { field: 'Client name', headerName: 'Client name', width: 130 },
        // { field: 'cost',headerName: 'Cost',width: 50,},
        // { field: 'Reservation duration',headerName: 'Reservation duration',width: 150,},
      ]
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }
      ];
      // console.log(data.map(d=>d.uid===rentUid&&d.name))
  return (
    <>
      <Typography align='center' variant='h5' style={{fontWeight:'bold'}}>{data&&data.map(d=>d.uid===rentUid&&d.name)}</Typography>
      <Border>
        {data.length>0 && data?.slice(pagesVisited,pagesVisited+dataPerPage).map((d,i)=>
        <TableContainer key={i} component={Paper} className='mb-3'>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Cost</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Reservation from</TableCell>
                <TableCell align="left">Reservation to</TableCell>
                <TableCell align="left">Duration</TableCell>
                <TableCell align="left">reserverID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataReservations?.length>0&&dataReservations.map((row) => (
                <TableRow key={row.uid} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{row.cost}</TableCell>
                  <TableCell align="left">{row.day}/{row.month}/{row.year}</TableCell>
                  <TableCell align="left">{row.fromHours}:{row.fromMinutes}</TableCell>
                  <TableCell align="left">{row.toHours}:{row.toMinutes}</TableCell>
                  <TableCell align="left">
                    {Math.floor((parseInt(row.toHours*60)+parseInt(row.toMinutes)-(parseInt(row.fromHours*60)+parseInt(row.fromMinutes)))/60)}:
                    {Math.floor((parseInt(row.toHours*60)+parseInt(row.toMinutes)-(parseInt(row.fromHours*60)+parseInt(row.fromMinutes)))%60)}
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
              )}
              {dataReservations.length===0&&
              <TypographyIcon variant='body1' styles='text-red-600 text-center mb-3 w-full' icon={faTriangleExclamation} text='There s no reservation yet'/>}
        {data.length===0 && <TypographyIcon variant='body1' styles='text-red-600 text-center mb-3' icon={faTriangleExclamation} text='you dont have any Stadiums yet'/>}
        <Pagination data={data} setPageNumber={setPageNumber} dataPerPage={dataPerPage} setRentUid={setRentUid} />
      </Border>
    </>
  )
}