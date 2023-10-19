// Import necessary dependencies and components from React and other modules
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";

// Define the main component for the login page
export default function LoginPage() {
    // Define and initialize state variables for email, password, and redirection
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);

    // Define an async function to handle the login form submission
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            // Send a login request to the server with user input (email and password)
            const { data } = await axios.post('/login', { email, password }, { withCredentials: true });
            // Update the user data and show a success message
            setUser(data);
            alert('Login successful');
            setRedirect(true); // Set redirection to true to navigate to the home page
        } catch (e) {
            alert('Login failed'); // Show an error message if login fails
        }
    }

    // Check if a redirection is required
    if (redirect) {
        return <Navigate to={'/'} />; // Redirect to the home page
    }

    // Render the login form and related content
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                    <input type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary">Login</button>
                    <div className="text-center py-2">
                        <span className="text-gray-500">Don't have an account yet?</span>
                        <Link className="text-black-500 underline text-bn" to={'/register'}> Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
