// Import necessary dependencies and components from React and other modules
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

// Define the Header component responsible for the site's top navigation
export default function Header() {
    // Access the user data from the UserContext using useContext
    const { user } = useContext(UserContext);

    return (
        <header className="flex justify-between">
            {/* Logo and site title */}
            <Link to={'/'} className="flex items-center gap-1">
                <div className="text-primary">
                    {/* Logo SVG */}
                    <img className=" w-10 h-15" src="/images/headstock.png" alt="" />
                </div>
                <img className=" w-15 h-7" src="/images/logoname.png" alt="" />
            </Link>

            {/* Search and filter options */}
            <div className=" p-2 h-12 flex border border-gray-300 rounded-full py-2 px-19 gap-2 shadow-md shadow-gray-350">
                {/* Display search and filter options */}
                <div className="flex items-center font-semibold ">Electric Guitars</div>
                <div className="border-l border-gray-300"></div>
                <div className="flex items-center font-semibold">Acoustic Guitars</div>
                <div className="border-l border-gray-300"></div>
                <div className="flex items-center font-semibold">Guitar Accessories</div>
                <div className="border-l border-gray-300"></div>
                <div className="flex items-center font-semibold">Basses</div>
                <button className=" bg-primary text-white p-1 rounded-full ">
                    {/* Icon for search */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>

            {/* User profile and notification */}
            <Link to={user ? '/account' : '/login'} className=" h-12 flex items-center border border-gray-300 rounded-full py-2 px-2 gap-3 ">
                {/* Icon for user profile and notification */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
                    {/* Icon for user profile image */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                </div>
                {/* Display user name if user is logged in */}
                {!!user && (
                    <div className="font-semibold">
                        {user.name}
                    </div>
                )}
            </Link>
        </header>
    )
}
