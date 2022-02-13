import React, { useState } from 'react'
import {ReButton,ReInput} from "./units"
import { Container, Typography } from '@material-ui/core'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../auth/firebase'
export const Form = () => {
  const [form, setForm] = useState('login')
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [number, setNumber] = useState(null)
  // const [pass, setPass] = useState('')
  const [formData, setFormData] = useState({})
  const [formDataLogIn, setFormDataLogIn] = useState({})

  const dataButtons =[
    {
      id:0,
      title:"Login",
      styles:"text-third bg-sec rounded-2xl",
      param:"login",
    },
    {
      id:1,
      title:"SignUp",
      styles:"text-third bg-sec rounded-2xl",
      param:"signUp",
    },
  ]
  const dataLogin =[
    {
      id:'email',
      label:"Email",
      types:"email"
    },
    {
      id:'password',
      label:"Password",
      types:"password"
    },
  ]
  const dataSignUp =[
    {
      id:'name',
      label:"Name",
      types:"text"
    },
    {
      id:'email',
      label:"Email",
      types:"email"
    },
    {
      id:'number',
      label:"Phone Number",
      types:"number"
    },
    {
      id:'password',
      label:"Password",
      types:"password"
    },
  ]
  const handleChangeSignUp=(value,key)=>{
    setFormData({...formData,...{[key]:value}})
  }
  const handleChangeLogIn=(value,key)=>{
    setFormDataLogIn({...formData,...{[key]:value}})
  }
  const signUp=async()=>{
    try {
      const {name,email,number,password}=formData
    const {user}=await createUserWithEmailAndPassword(auth,email,password)
    await updateProfile(user,{
      'displayName':name,
      'phoneNumber':number
    })
    } catch (error) {
      console.log(error)
    }
  }
  const logIn=async()=>{
    try {
      const {email,password}=formDataLogIn
      await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
      console.log(error)
    }
  }
  return (
      <>
        <div className='border-2 border-sec w-1/2 absolute top-1/2 rounded-3xl bg-third shadow-lg'>
          <Container maxWidth='xs'>
              <div className='flex justify-around my-3'>
                {dataButtons.map(data=><ReButton key={data.id} variant='contained' title={data.title} fnc={()=>{setForm(data.param)}}
                styles={`${form==='login'&&data.id===0?'text-third bg-sec rounded-2xl':form==='signUp'&&data.id===1?'text-third bg-sec rounded-2xl':
                form==='login'&&data.id===1?'text-sec bg-third rounded-2xl':'text-sec bg-third rounded-2xl'}`}></ReButton>)}
              </div>
            {form === 'login'&&<>
              <div className='mx-auto w-5/6 my-2'>
                {dataLogin.map(data=>
                <ReInput key={data.id} value={formDataLogIn[data.id]} onChange={(e)=>{handleChangeLogIn(e.target.value,data.id)}} label={data.label} types={data.types} styles="w-full my-1"></ReInput>
                )}
              </div>
              <div className='flex justify-center'>
                <ReButton variant='contained' title='Login'fnc={()=>{logIn()}} styles='text-third bg-base my-3 rounded-2xl'></ReButton>
              </div>
              <Typography variant='subtitle2' className='my-3 text-sec text-center text-sm'>Don't have an account?
              <ReButton title='Sign Up' variant='text' styles='my-3 text-base text-xs' fnc={()=>{setForm('signUp')}}></ReButton>
              </Typography>
            </>}
            {form === 'signUp'&&<>
              <form>
                <div className='mx-auto w-5/6 my-2'>
                  {dataSignUp.map(data=>
                  <ReInput key={data.id} value={formData[data.id]} onChange={(e)=>{handleChangeSignUp(e.target.value,data.id)}} label={data.label} types={data.types} styles="w-full my-1"/>
                  )}
                </div>
                <div className='flex justify-center'>
                  <ReButton variant='contained' title='SignUp' styles='text-third bg-base my-3 rounded-2xl' fnc={()=>{signUp()}}/>
                </div>
              </form>
              <Typography variant='subtitle2' className='my-3 text-sec text-center text-sm'>Already have an account?
              <ReButton title='LogIn' variant='text' styles='my-3 text-base text-xs' fnc={()=>{setForm('login')}}/>
              </Typography>
            </>}
          </Container>
          </div>
      </>
  )
}
