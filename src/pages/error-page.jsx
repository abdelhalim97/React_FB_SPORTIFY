import React from 'react'
import { auth } from '../auth/firebase'
import { TypographyIcon } from '../components/containers/units'

export const ErrorPage = () => {
  return (
    <>
      {!auth.currentUser.emailVerified&&<TypographyIcon text={`${auth.currentUser.displayName} please verify your email`}/>}
    </>
  )
}

