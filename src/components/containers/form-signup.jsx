import { Button, TextField, Typography } from '@material-ui/core'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import React from 'react'
import { auth } from '../../auth/firebase'

export const FormSignup = ({setFormData,formData,setForm}) => {
  const handleChangeSignUp=(value,key)=>setFormData({...formData,...{[key]:value}})
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
  return (
    <>
        <form>
            <div className='mx-auto w-5/6 my-2'>
                {dataSignUp.map(data=>
                <TextField key={data.id} value={formData[data.id]} onChange={(e)=>{handleChangeSignUp(e.target.value,data.id)}} 
                label={data.label} type={data.types} className="w-full my-1"/>
                )}
            </div>
            <div className='flex justify-center'>
                <Button variant='contained' className='text-third bg-base my-3 rounded-2xl' onClick={()=>{signUp()}}>SignUp</Button>
            </div>
        </form>
        <Typography variant='subtitle2' className='my-3 text-sec text-center text-sm'>Already have an account?
            <Button variant='text' className='my-3 text-base text-xs' onClick={()=>{setForm('login')}}>LogIn</Button>
        </Typography>
    </>
  )
}