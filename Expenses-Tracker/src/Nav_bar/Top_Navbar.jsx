import React from 'react'
import {Search,Bell,CalendarDays} from 'lucide-react'
import expenses_logo from "../assets/expenses_logo.jpg";

export default function Top_Navbar() {
  return (
    <div className='w-full p-10'>
    <div className='flex items-center justify-between'>
    <div>
      <h1 className='text-3xl font-bold'>Welcome back, Adaline!</h1>
      <h6 className='text-gray-300 font-bold text-xs mt-1'>It is the best time to manage your finances</h6>
    </div>
    
    <div className='flex items-center gap-6'>
      <div className='flex gap-6 items-center '>
      <span className='border-2 border-gray-400 p-1 rounded-full'><Search/></span>
      <span className='border-2 border-gray-400 p-1 rounded-full'><Bell/></span>
      </div>
      <div className='flex justify-center items-center gap-2 border-2 border-gray-300 rounded-full pl-4 pr-4'>
        <div >
          <img src={expenses_logo} alt="" className='h-12 w-12 rounded-full '/>
        </div>
        <div className='flex-col flex'>
          <h6 className='text-xs font-bold p-0 m-0'>Adaline Lively</h6>
          <span className='text-xs p-0 m-0 text-gray-400'>adalinelively@gmail.com</span>
        </div>
      </div>
    </div>
    </div>
    <div className='mt-10 flex items-center justify-between'>
      <div className='flex items-center gap-2 '>
      <span className='border-2 p-2 rounded-full border-gray-300'><CalendarDays size={20}/></span>
      <div className='border-2 border-gray-400 p-2 rounded-full text-xs'>This month</div>
      </div>
      <div>
        <span></span>
        <span>Manage widgets</span>
      </div>
    </div> 
    </div>
    
    
  )
}
