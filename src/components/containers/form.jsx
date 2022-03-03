import React, { useState } from 'react'
import {ReInput} from "./units"
import { Button, Container, TextField, Typography } from '@material-ui/core'
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../auth/firebase'
export const Form = () => {
  const [forgetPass, setForgetPass] = useState('')
  const [forgetPassStat, setForgetPassStat] = useState(0)
  const [form, setForm] = useState('login')
  const [formData, setFormData] = useState({})
  const [formDataLogIn, setFormDataLogIn] = useState({})
  const logIn=async()=>{
    try {
      const {email,password}=formDataLogIn
      await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSetFormtoForgotPasword=()=>setForm('forgotPassword')
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
  const dataButtons2 =[
    {
      id:0,
      title:"Login",
      fnc:logIn,
      styles:'text-third bg-base my-3 rounded-2xl',
      variant:'contained'
    },
    {
      id:1,
      title:"Forgot Password?",
      fnc:handleSetFormtoForgotPasword,
      styles:'my-3 text-base text-xs',
      variant:'text'
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
      id:'password',
      label:"Password",
      types:"password"
    },
  ]
  const handleChangeSignUp=(value,key)=>{
    setFormData({...formData,...{[key]:value}})
  }
  const handleChangeLogIn=(value,key)=>{
    setFormDataLogIn({...formDataLogIn,...{[key]:value}})
  }
  const signUp=async()=>{
    try {
      const {name,email,password}=formData
      const {user}=await createUserWithEmailAndPassword(auth,email,password)
      await updateProfile(user,{
        'displayName':name,
      })
      await sendEmailVerification(user)
    } catch (error) {
      console.log(error)
    }
  }
  const resetPassword=async()=>{
    try {
    await sendPasswordResetEmail(auth,forgetPass)
    setForgetPassStat(1)
    } catch (error) {
    setForgetPassStat(2)
    }
  }
  return (
      <>
        <div className='border-2 border-sec w-4/6  md:w-1/2 absolute top-1/2 rounded-3xl bg-third shadow-lg'>
          <Container maxWidth='xs'>
              <div className='flex justify-around my-3'>
                {dataButtons.map(data=>
                <Button key={data.id} variant='contained' onClick={()=>{setForm(data.param);setForgetPassStat(0)}}
                className={`${form==='login'&&data.id===0?'text-third bg-sec rounded-2xl':form==='signUp'&&data.id===1?'text-third bg-sec rounded-2xl':
                form==='login'&&data.id===1?'text-sec bg-third rounded-2xl':'text-sec bg-third rounded-2xl'}`}>{data.title}</Button>)}
              </div>
            {form === 'login'&&<>
              <div className='mx-auto w-5/6 my-2'>
                {dataLogin.map(data=>
                <ReInput key={data.id} value={formDataLogIn[data.id]} onChange={(e)=>{handleChangeLogIn(e.target.value,data.id)}} label={data.label} types={data.types} styles="w-full my-1"/>
                )}
              </div>
              {dataButtons2.map(data=>
                <div key={data.id} className='flex justify-center'>
                  <Button variant={data.variant} onClick={()=>{data.fnc()}} className={data.styles}>{data.title}</Button>
                </div>
                )}
              <Typography variant='subtitle2' className='my-3 text-sec text-center text-sm'>Don't have an account?
              <Button variant='text' className=' text-base text-xs' onClick={()=>{setForm('signUp')}}>Sign Up</Button>
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
                  <Button variant='contained' className='text-third bg-base my-3 rounded-2xl' onClick={()=>{signUp()}}>SignUp</Button>
                </div>
              </form>
              <Typography variant='subtitle2' className='my-3 text-sec text-center text-sm'>Already have an account?
                <Button variant='text' className='my-3 text-base text-xs' onClick={()=>{setForm('login')}}>LogIn</Button>
              </Typography>
            </>}
            {form === 'forgotPassword'&&<>
              <form>
                <div className='mx-auto w-5/6 my-2'>
                  <TextField variant="standard" value={forgetPass} onChange={(e)=>{setForgetPass(e.target.value)}} label="Forgot Password" className="w-full my-1 "/>
                </div>
              {forgetPassStat===0?<></>:forgetPassStat===1?<Typography className='text-center my-2' variant='body2' >Email has been sent</Typography>:<Typography className='text-center my-2' variant='body2'>something went wrong</Typography>}
                <div className='flex justify-center'>
                  <Button variant='contained' className='text-third bg-base my-3 rounded-2xl' onClick={()=>{resetPassword()}}>Reset Password</Button>
                </div>
              </form>
              <div className='flex justify-center'>
                <Button variant='text' className='my-3 text-base text-xs' onClick={()=>{setForm('login');setForgetPassStat(0)}}>Back to LogIn</Button>
              </div>
            </>}
          </Container>
          </div>
      </>
  )
}
