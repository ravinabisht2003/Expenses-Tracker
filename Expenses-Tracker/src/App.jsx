import React from 'react'
import Nav_bar from './Nav_bar/Nav_bar'
import Top_Navbar from './Nav_bar/Top_Navbar'
import Dashboard from './Dashboard/Dashboard'

export default function App() {
  return (
    <div className='m-2 p-0 flex gap-5 '>
    <div >
      <Nav_bar/>
    </div>
    <div className='w-full min-h-screen p-10'>
      <Top_Navbar/>
      <Dashboard/>
    </div>

    </div>
  )
}
