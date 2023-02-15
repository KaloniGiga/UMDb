import Image from 'next/image'
import { Inter } from '@next/font/google'
import CardContainer from '@/component/CardContainer'
import { useSearchParams } from 'next/navigation'

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ['latin'] })

const API_KEY = process.env.API_KEY;





export default async function Home({params}:any) {

  

  const res = await fetch(`https://api.themoviedb.org/3/${params.genre === "fetchTopRated" ? "movie/top_rated" : 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`, {next: {revalidate: 10000}})

  if(!res.ok) {
      throw new Error("Failed to fetch data")
  }

  const data = await res.json();

  const results = data.results;

  

  return (
      <div>
         <CardContainer results={results} />
      </div>
  )
}
