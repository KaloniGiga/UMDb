"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { deflate } from "zlib";

interface Props {
    title: string,
    param: string,
}

export default function NavbarItem({title, param}:Props) {

        const params = useSearchParams();
        const genre = params.get("genre");

    return (
        <Link className={`font-semibold p-2 mx-6 my-3 hover:text-amber-600 ${genre && genre === param && "underline decoration-6 decoration-amber-500 rounded-lg"}`}
        href={`/?genre=${param}`}>{title}</Link>
    )
}