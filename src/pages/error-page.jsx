import React from 'react'
import { auth } from '../auth/firebase'
import { TypographyIcon } from '../components/containers/units'

export const ErrorPage = () => {
  return (
    <>
      <div style={{ height:'41vh' }}>
      {!auth?.currentUser?.emailVerified &&auth?.currentUser?.emailVerified!==undefined &&<TypographyIcon text={`${auth?.currentUser?.displayName} please verify your email`}/>}
        404</div>
    </>
  )
}

