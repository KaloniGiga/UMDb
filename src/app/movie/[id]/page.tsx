import Image from "next/image";


export default async function MoviePage({params}:any) {
    const movieId = params.id;

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);

     const movie = await res.json();

     return (
         
         <div>

            <div>

                <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                     width={500}
                     height={300}
                     placeholder="blur"
                     blurDataURL="/spinner.svg"
                     alt="Movie"
                 ></Image>

                 <div className="p-2">
                     <h2 className="text-lg mb-3 font-bold">
                        {movie.title || movie.name}
                     </h2>
                     <p className="text-lg mb-3">
                        <span className="font-semibold">OverView</span>
                         <span>{movie.overview}</span>
                     </p>

                     <p className="text-lg mb-3">
                        <span className="font-semibold mr-1">Date Released</span>
                        <span>{movie.release_date || movie.first_air_date}</span>
                     </p>

                     <p className="mb-3">
                        <span className="font-semibold mr-1">Rating</span>
                        <span>{movie.vote_count}</span>
                     </p>
                 </div>
            </div>
         </div>
     )


}