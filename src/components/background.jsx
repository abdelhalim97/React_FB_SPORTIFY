import React from 'react'
import {Container} from "@material-ui/core"
import  {Form} from "./containers"
export const Background = () => {
  return (
      <>
          <Container maxWidth="sm" >
            <div  className='bg-base h-64 relative border-1 rounded-b-full w-full   '>
                <div className='absolute text-third text-2xl left-52  lg:left-60 md:left-60 sm:left-60'>Sportify</div>
                <div className='mx-auto w-1/2'>
                  <Form></Form>
                </div>
            </div>
          </Container>
      </>
  )
}
