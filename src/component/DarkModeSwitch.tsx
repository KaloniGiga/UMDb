"use client";

import {useState, useEffect} from 'react';
import {MdLightMode} from 'react-icons/md';
import {BsFillMoonFill} from 'react-icons/bs';
import {useTheme} from 'next-themes';


function DarkModeSwitch() {

   const [mounted, setMounted] = useState(false);
   const {systemTheme, theme, setTheme} = useTheme();

   useEffect(() => setMounted(true), [])

   const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
       {mounted && (

        currentTheme === "dark" ? (

        <button  className='text-xl cursor-pointer hover:text-amber-500'
        onClick={() => setTheme("light")
        }
        >
        <MdLightMode size={25} />
        </button>

       ) : (

         <button className='text-xl cursor-pointer hover:text-amber-500'
         onClick={() => setTheme("dark")} 
         >
            <BsFillMoonFill size={25}/>
         </button>

       )
       )
       }
      </>
    
  )
}

export default DarkModeSwitch