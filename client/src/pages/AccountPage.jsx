// Import necessary dependencies from React and other modules
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import ItemPage from "./ItemPage";

// Define the main component for the account page
export default function AccountPage() {
    // Define and initialize state variables
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);

    // Extract the 'subpage' parameter from the URL using React Router's useParams
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    // Define an async function to handle user logout
    async function logout() {
        // Send a logout request to the server using axios
        await axios.post('/logout');
        // Update the state to redirect the user and clear user information
        setRedirect('/');
        setUser(null);
    }

    // Check if the user data is still loading
    if (!ready) {
        return 'Loading...'; // Display a loading message
    }

    // Check if the user is not logged in and there is no redirection
    if (ready && user === null && !redirect) {
        return <Navigate to={'/login'} />; // Redirect to the login page
    }

    // Define a function to manage CSS classes for navigation links
    function linkClasses(type = null) {
        let classes = ' inline-flex gap-1 py-2 px-6 rounded-full';
        if (type === subpage) {
            classes += ' bg-primary text-white '; // apply special styling to the active link
        } else {
            classes += ' bg-gray-200'; // needs space before bg ex space bg-gray-300 to work
        }
        return classes;
    }

    // Check if a redirection is necessary
    if (redirect) {
        return <Navigate to={redirect} />; // Redirect the user to the specified URL
    }

    // Render the account page content
    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
                <Link className={linkClasses('profile')} to={'/account'} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    My profile
                </Link>
                <Link className={linkClasses('orders')} to={'/account/orders'} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    My orders
                </Link>
                <Link className={linkClasses('selling')} to={'/account/selling'} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>
                    My selling
                </Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
            {subpage == 'selling' && (
                <ItemPage />
            )}
        </div>
    );
}
