import React, { useState } from 'react'
import {ReButton,ReInput} from "./units"
import { Container, Typography } from '@material-ui/core'

export const Form = () => {
  const [form, setForm] = useState('signIn')
  console.log(form)
  const dataButtons =[
    {
      id:0,
      title:"Login",
      styles:"text-third bg-sec rounded-2xl"
    },
    {
      id:1,
      title:"SignUp",
      styles:"text-third bg-sec rounded-2xl"
    },
  ]
  const dataInputs =[
    {
      id:0,
      label:"Email",
      types:"email"
    },
    {
      id:1,
      label:"Password",
      types:"password"
    },
  ]
  return (
      <>
        <div className='border-2 border-sec  w-1/2 absolute top-1/2 rounded-3xl bg-third'>
          <Container maxWidth='xs'>
            {form === 'signIn'&&<>
              <div className='flex justify-around my-3'>
                {dataButtons.map((data)=><ReButton key={data.id} variant='contained' title={data.title} styles={data.styles}></ReButton>)}
              </div>
              <div className='mx-auto w-5/6 my-2'>
                {dataInputs.map((data)=><ReInput label={data.label} types={data.types} styles="w-full hover:border-red-500 my-1"></ReInput>)}
              </div>
              <div className='flex justify-center'>
                <ReButton variant='contained' title='Login' styles='text-third bg-base my-3 rounded-2xl'></ReButton>
              </div>
              <Typography variant='subtitle2' className='my-3 text-sec text-center'>Don't have an account?
              <ReButton title='Sign Up' className='my-3 text-sec text-xs' fnc={()=>{setForm('signUp')}}></ReButton>
              </Typography>
            </>}
          </Container>
          </div>
      </>
  )
}
