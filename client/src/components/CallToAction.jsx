import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
      <div className='flex flex-col sm:flex-row p-3 border border-teal-500 rounded-tl-3xl rounded-br-3xl justify-center items-center text-center'>
          <div className='flex-1 justify-center flex flex-col '>
            <h2 className='text-2xl' >Want to know more about latest updates</h2>
          <p className='text-gray-500 my-2'>
              Checkout these resources
          </p>
          <Button className='rounded-tl-xl rounded-bl-xl' gradientDuoTone='purpleToPink' >
              <a href="https://www.businesstoday.in/technology" target='_blank' rel='noopener noreferrer' >Tech news</a>
          </Button>
        </div>
          <div className='p-7 flex-1 w-full'>
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>      
    </div>
  )
}

