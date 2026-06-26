import React from 'react'
import Nav_bar from './Nav_bar/Nav_bar'
import Top_Navbar from './Nav_bar/Top_Navbar'

export default function App() {
  return (
    <div className='m-5 p-0 flex gap-5 '>
    <div >
      <Nav_bar/>
    </div>
    <div className='w-full min-h-screen'>
      <Top_Navbar/>
    </div>
    </div>
  )
}
