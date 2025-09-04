import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=' text-white  flex justify-between p-3 cursor-pointer items-center bg-gradient-to-r from-[#484746] to-black'>
    <div>
        <h1 className='text-2xl font-bold'>Homyz</h1>
    </div>

    {/* Desktop menu */}
    <div className='hidden md:block'>
        <ul className='flex space-x-3 items-center font-semibold p-2' >
            <li> <a href="#residencies">Residencies</a></li>
            <li> <a href="#our_value">Our Value</a></li>
            <li> <a href="#contact_us">Contact Us</a></li>
            <li> <a href="#get_started">Get Started</a></li>
        </ul>
    </div>

    {/* Mobile actions */}
    <button aria-label='Toggle menu' className='md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-white/10' onClick={() => setIsOpen(v => !v)}>
      <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        {isOpen ? (
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
        ) : (
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
        )}
      </svg>
    </button>

    {/* Mobile menu dropdown */}
    {isOpen && (
      <div className='absolute left-0 top-14 w-full md:hidden bg-black/90 backdrop-blur-sm border-t border-white/10 text-center'>
        <ul className='flex flex-col space-y-2 p-4 font-semibold'>
          <li className='py-2 px-2 hover:bg-white/10 rounded'><a href="#residencies">Residencies</a></li>
          <li className='py-2 px-2 hover:bg-white/10 rounded'><a href="#our_value">Our Value</a></li>
          <li className='py-2 px-2 hover:bg-white/10 rounded'><a href="#contact_us">Contact Us</a></li>
          <li><a href="#get_started">Get Started</a></li>
        </ul>
      </div>
    )}
      
    </div>
  )
}
