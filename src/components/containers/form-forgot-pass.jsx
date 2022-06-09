import { Button, TextField, Typography } from '@material-ui/core'
import { sendPasswordResetEmail } from 'firebase/auth'
import React from 'react'
import { auth } from '../../auth/firebase'

export const FormForgotPass = ({setForgetPassStat,forgetPassStat,setForgetPass,forgetPass,setForm}) => {
            // await confirmPasswordReset('user@example.com', code)
    
    const resetPassword=async()=>{
        await sendPasswordResetEmail(auth,forgetPass)
        .then(() => {
            setForgetPassStat(1)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
  return (
    <>
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
    </>
  )
}
