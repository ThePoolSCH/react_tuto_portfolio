import React from 'react'
import work1 from "./assets/work1.png"
import work2 from "./assets/work2.png"
import work3 from "./assets/work3.png"
import work4 from "./assets/work4.png"
import work5 from "./assets/work5.png"


function Works() {
  return (
    <div className='px-20 py-32'>
        <div className='mb-8'>
            <h1 className='text-4xl font-bold'>We create world class Products</h1>
            <p className='text-xl text-gray-500'>
                Help find solutions intuitive and in accordance with clients
                business goals.
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-2'>
                <img src={work1} className='mb-4 w-full rounded-3xl'></img>
                <p className='text-gray-400'>App desing - November 1, 2022</p>
                <h3 className='text-2xl font-bold'>App Redesing</h3>
                <p className='text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestiae
                    sint perspiciatis laborum consequatur blanditiis numquam 
                    voluptas ut. Soluta nisi veniam reiciendis illo 
                    necessitatibus autem minus cumque itaque, ab voluptate.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex flex-col gap-4'>
                    <img src={work2}  className='rounded-3xl'></img>
                    <p className='text-gray-400'>App design - october 31, 2022</p>
                    <h3 className='text-2xl font-bold'>Channel App design</h3>
                </div>
                <div className='flex flex-col gap-4'>
                    <img src={work3}  className='rounded-3xl'></img>
                    <p className='text-gray-400'>App design - october 31, 2022</p>
                    <h3 className='text-2xl font-bold'>Channel App design</h3>
                </div>
                <div className='flex flex-col gap-4'>
                    <img src={work4}  className='rounded-3xl'></img>
                    <p className='text-gray-400'>App design - october 31, 2022</p>
                    <h3 className='text-2xl font-bold'>Map App design</h3>
                </div>
                <div className='flex flex-col gap-4'>
                    <img src={work5}  className='rounded-3xl'></img>
                    <p className='text-gray-400'>App design - october 31, 2022</p>
                    <h3 className='text-2xl font-bold'>Calendar App design</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works