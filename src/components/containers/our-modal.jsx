import React, { useState } from 'react'
import { Box, Button, Modal, TextField, Typography } from '@material-ui/core';
import { MapBox, IconButton } from './units';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
export const OurModal = () => {
  const [open, setOpen] = useState(false);
  const [form, setform] = useState({})
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleForm=(key,value)=>{
    setform({...form,...{[key]:value}})
    console.log(form)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4,
  };
  const addStadium=()=>{
    console.log('f')
  }
  const fildsData =[
    {
      id:'name',
      label:'name',
    },
    {
      id:'cost',
      label:'1 hour cost',
    },
  ]
  return (
    <>
      <Button onClick={handleOpen}>Add a Stadium</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style} className='border-2 border-sec rounded-3xl bg-third w-5/6 sm:w-2/3 md:w-1/2'>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center bg-base text-third rounded-3xl p-1  '>
            Add a new Stadium
          </Typography>
          <div >
            <MapBox/>
            {fildsData.map(data=>
            <div key={data.id} className='flex justify-center '>
              <TextField variant='standard' label={data.label} className='my-3 w-1/2' value={form[data.id]} 
              onChange={(e)=>{handleForm(data.id,e.target.value)}} />
            </div>
            )}
            <div className='flex justify-center'>
              <IconButton title='add Stadium' icon={faAdd} fnc={addStadium} styles='text-third bg-base mt-3 rounded-2xl p-2'/>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}
