import React from 'react'
import {Container} from "@material-ui/core"
import  {Form} from "./containers"
export const Background = () => {
  return (
      <>
          <Container maxWidth="sm" >
            <div  className='bg-base h-64 relative border-1 rounded-b-full w-full'>
              <div className='absolute w-full '>
              <div className=' text-third text-3xl mx-auto w-1/6'>Sportify</div>

              </div>
                <div className='mx-auto w-1/2'>
                  <Form></Form>
                </div>
            </div>
          </Container>
      </>
  )
}
