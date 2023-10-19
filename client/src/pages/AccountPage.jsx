// Import necessary dependencies from React and other modules
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

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
    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />; // Redirect to the login page
    }

    // Define a function to manage CSS classes for navigation links
    function linkClasses(type = null) {
        let classes = ' py-2 px-6 ';
        if (type === subpage) {
            classes += ' bg-primary text-white rounded-full'; // Apply special styling to the active link
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
                <Link className={linkClasses('profile')} to={'/account'} > My profile</Link>
                <Link className={linkClasses('orders')} to={'/account/orders'} > My orders</Link>
                <Link className={linkClasses('selling')} to={'/account/selling'} > My selling</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
        </div>
    );
}
