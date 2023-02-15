import NavbarItem from "./NavbarItem";



export default function Navbar() {
     
    return (
        <div className="flex justify-center dark:bg-gray-600  lg:text-xl p-4">
            <NavbarItem title="Trending" param="fetchTrending" />
            <NavbarItem title="Top Rated" param="fetchTopRated" />
            
        </div>
    )
}