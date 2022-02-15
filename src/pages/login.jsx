import React from 'react'
import { Background } from '../components'
import { signOut } from 'firebase/auth'
import { Button } from '@material-ui/core'
import { auth } from '../auth/firebase'
export const Login = () => {
  const handleLogout=async()=>{
  await signOut(auth)
}
// console.log(auth)

  return (
  <>
    <Background></Background>
  </>
  )

      
}
