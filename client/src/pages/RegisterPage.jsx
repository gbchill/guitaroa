// Import necessary dependencies and components from React and other modules
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// Define the main component for the registration page
export default function RegisterPage() {
    // Define and initialize state variables for name, email, and password
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Define an async function to handle user registration
    async function registerUser(ev) {
        ev.preventDefault();
        try {
            // Send a registration request to the server with user input (name, email, and password)
            await axios.post('/register', {
                name,
                email,
                password
            });
            alert('Registration successful. Now you can log in'); // Show success message
        } catch (e) {
            alert('Registration failed. Please try again later'); // Show an error message on failure
        }
    }

    // Render the registration form and related content
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>

                    <input type="text" placeholder="George B"
                        value={name}
                        onChange={ev => setName(ev.target.value)} />

                    <input type="email" placeholder="your@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />

                    <input type="password" placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />

                    <button className="primary">Register</button>
                    <div className="text-center py-2 ">
                        <span className="text-gray-500">Already a member?</span>
                        <Link className="text-black-500 underline text-bn" to={'/login'}> Login now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
