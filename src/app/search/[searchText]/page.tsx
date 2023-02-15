import CardContainer from "@/component/CardContainer";


export default async function Search({params}:any) {

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchText}&language=en-US&include_adult=false`);

    if(!res.ok) {
        throw new Error("Error fetching data");
    }


    const data = await res.json();

    const results = data.results;

    return (
        <div>
            {results && results.lenght === 0 && (
                <h1 className="text-center pt-6">No result found</h1>
            )}

            {results && <CardContainer results={results} />}
        </div>
    )
}