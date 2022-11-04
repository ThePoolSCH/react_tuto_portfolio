import React from 'react'

function Clients() {
  return (
    <div className='p-8 flex flex-col items-center justify-center gap-8 mt-8'>
        <h1 className='text-4xl font-medium text-gray-800 text-center'>Trusted by big companies</h1>
        <div className='flex flex-wrap flex-col md:flex-row items-center gap-8 md'>
            <img src="airbnb.png" className='w-52'></img>
            <img src="cocacola.png" className='w-52'></img>
            <img src="amazon.png" className='w-52'></img>
            <img src="tesla.png" className='w-52'></img>
        </div>
    </div>
  )
}

export default Clients