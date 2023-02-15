"use client"

import { useEffect } from "react";

interface ErrorProps {
    error: string,
    reset: Function
}

export default function Error({error, reset}: ErrorProps){

    useEffect(() => {
        console.log(error);
    }, [error])
    return (
        <div>
            <h1>Something went wrong</h1>
            <button onClick={() => reset()}
            className="hover:text-amber-600">Try again</button>
        </div>
    )
}