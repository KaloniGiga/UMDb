import Link from 'next/link'
import React from 'react'
import { HiOutlineHome, HiOutlineUserGroup } from 'react-icons/hi'


function Menu() {

  return (
    
    <div className='flex items-center '>
       <Link href="/" className='mx-4 lg:mx-8 hover:text-primary flex' >
        <HiOutlineHome size={25}/>
        <span className='hidden md:inline-block text-md ml-3'>Home</span>
        </Link>

       <Link href="/about" className='mx-4 lg:mx-8 hover:text-primary flex'>
        <HiOutlineUserGroup size={25}/>
        <span className='hidden md:inline-block text-md ml-3'>About</span>
        </Link>
      </div>
  )
}

export default Menu