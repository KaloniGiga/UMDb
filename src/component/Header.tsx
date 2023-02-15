import Link from 'next/link';
import React, {useState} from 'react';
import {BiMenu} from 'react-icons/bi'
import DarkModeSwitch from './DarkModeSwitch';
import Menu from './Menu';
import SearchMenu from './SearchMenu';

const Header = () => {

    

    return(
        // Header
        <div className='flex items-center  justify-between px-4 py-6 max-w-8xl mx-auto'>
            {/* logo */}
         <div className='flex items-center space-x-5'>
           <div>
               <Link href={'/'} >
                <h1 className='font-bold text-2xl bg-amber-500 py-1 px-2 rounded-lg mr-1'>UMDb</h1>
               </Link>
           </div>

           {/* Menu */}
          
            {/* <button><BiMenu /></button> */}
             <Menu />
     
           </div>

            <div className='flex items-center justify-around flex-1'>
            {/* SearchMenu */}
            
              <SearchMenu />
            
            {/* DarkMode */}
       
             <DarkModeSwitch />

           </div>
        </div>
    )
    
}

export default Header