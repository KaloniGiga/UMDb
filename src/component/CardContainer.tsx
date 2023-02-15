import Card, { resultProps } from "./Card"

export interface Result {
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


export interface Results{
   results: Result[]
}

export default function CardContainer({results}: Results) {

    return (
        <div>
            {results.map((result) => (
                <Card key={result.id} result={result}/>
            ))}
        </div>
    )
}