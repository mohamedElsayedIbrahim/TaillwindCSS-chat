import React from 'react'

export default function Base(props) {
    
  return <>
  
  <div className='bg-gray-900 p-0 m-0 box-border h-screen text-white flex'>
    {props.children}
  </div>
  
  </>
}
