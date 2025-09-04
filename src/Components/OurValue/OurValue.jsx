import React from 'react'
import Value from '../../assets/value.png'
import AccordionItem from '../AccordionItem/AccordionItem'

export default function OurValue() {
  return (
    <div id='our_value' className='container flex flex-col md:flex-row items-center gap-8 py-10'>
        {/* image */}
      <div className='flex-1 flex '>
        <img src={Value} alt="" className="w-64 sm:w-80 md:w-[500px] rounded-t-full shadow-lg object-cover border-6 border-gray-300" />
      </div>
      {/* content */}
      <div className='flex-1 space-y-1 text-center md:text-left'>
            <h4 className='text-[#F4A502] text-2xl font-bold'>Our Value</h4>
            <h1 className='text-[#1F3E72] text-3xl md:text-4xl font-bold'>Value We Give to You</h1>
            <p className='text-gray-400 text-sm'>We always ready to help by providijng the best services for you.</p>
            <p className='text-gray-400 text-sm'>We beleive a good blace to live can make your life better</p>
            <AccordionItem/>
      </div>
      
    </div>
  )
}
