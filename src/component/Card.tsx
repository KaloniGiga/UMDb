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
        <div className="cursor-pointer p-3 hover:shadow-slate-300 shadow-md rounded-lg border-slate-400 m-2 transition-shadow duration-200 group">
            <Link href={`/movie/${result.id}`}>
             
              <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    alt="Image is not available"
                    width={500}
                    height={300}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                    placeholder="blur"
                    blurDataURL="/spinner.gif"
                    className="hover:opacity-80 rounded-t-lg group-hover:opacity-80"
              ></Image>
              <div className="p-2  ">

                 <p className="line-clamp-2 text-md mb-2">{result.overview}</p>

                 <h2 className="truncate font-bold text-lg mb-2 ">{result.title || result.name}</h2>
                  
                 <p className="flex items-center justify-between">
                 <span className="font-semibold">{result.release_date || result.first_air_date}</span>

                 <span className="flex items-center">
                 <FiThumbsUp size={22} className="mr-1 ml-3" /> 
                 <span className="ml-3">{result.vote_count}</span>
                 </span>
                 </p>
              </div>
            </Link>
        </div>
    )
}