import React from 'react'

export default function Footer() {

  const list = 
  [
    {
    list:"Property"
    },
    
    {
    list:"Services"
    },

    {
    list:"Product"
    },

    {
    list:"About Us"
    },
]

  return (
    <div className='container flex text-center flex-col space-y-10 md:flex-row py-10 justify-between'>
      
      {/* left side */}
      <div className=''>
        <h1 className='text-3xl font-bold text-blue-700 mb-4'>Homyz</h1>
        <p className='text-sm text-gray-400'>Our vision is to make all people</p>
        <p className='text-sm text-gray-400'>the best place to live for them.</p>
      </div>
      {/* right side */}
      <div className=''>
        <h1 className='text-4xl font-bold text-[#1F3E72]'>Information</h1>
        <p className='text-sm text-gray-400'>145 New York, FL 5467, USA</p>
        <ul className='flex justify-center space-x-3 mt-5'>
          {list.map((list)=>{
            return  <li>{list.list}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
