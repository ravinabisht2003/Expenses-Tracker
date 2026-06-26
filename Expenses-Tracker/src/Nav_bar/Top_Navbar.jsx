import React from 'react'
import {Search,Bell} from 'lucide-react'

export default function Top_Navbar() {
  return (
    <div className='p-0 m-10 flex space-x-1'>
    <div>
      <h1 className='text-2xl font-bold'>Welcome back, Adaline</h1>
    </div>
    <div className='flex'>
      <div><Search/></div>
      <div><Bell /></div>
    </div>
    </div>
  )
}
