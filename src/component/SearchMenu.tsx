"use client"

import {useState} from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineSearch } from 'react-icons/hi';

function SearchMenu() {
    
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!search){
      return ;
    }

    router.push('/search')
  }


  return (

    <form onSubmit={handleSubmit}
      className="flex items-center justify-between px-3 flex-1 mx-w-6xl"
    >
    
    <input 
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search keywords..."
    className='h-12  px-2 mr-2 rounded placeholder-slate-200 dark:bg-gray-600 bg-transparent flex-1'
     />

     <button 
     disabled={!search}
     type="submit"
     className='text-amber-500 disabled:text-slate-200'
     >
      <HiOutlineSearch  size={25} />
     </button>

    </form>
  )
}

export default SearchMenu