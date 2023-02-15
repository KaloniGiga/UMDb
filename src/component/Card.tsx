import Image from "next/image";
import Link from "next/link";
import {FiThumbsUp} from 'react-icons/fi'

export interface resultProps {
       result: {
        id: string,
        backdrop_path: string,
        poster_path: string,
        overview: string,
        title: string,
        name: string,
        release_date: string,
        first_air_date: string,
        vote_count: string 
       }
}

export default function Card({result}:resultProps) {

    return (
        <div>
            <Link href={`/movie/${result.id}`}>
             
              <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    alt="Image is not available"
                    width={500}
                    height={300}
                    className="hover:opacity-80"
              ></Image>
              <div className="p-2">

                 <p className="text-md">{result.overview}</p>

                 <h2 className="text-lg">{result.title || result.name}</h2>

                 <p className="flex items-center">{result.release_date || result.first_air_date}</p>
                 <FiThumbsUp size={22} className="mr-1 ml-3" /> 
                 <span>{result.vote_count}</span>
              </div>
            </Link>
        </div>
    )
}