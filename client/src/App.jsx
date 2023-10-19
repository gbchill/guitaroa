// Import necessary dependencies and components from React and other modules
import './App.css';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import AccountPage from './pages/AccountPage';

// Configure the default base URL and credentials for axios requests
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

// Define the main App component
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          {/* Creates routes for different locations in the app */}
          <Route index element={<IndexPage />} /> // Define the index page route
          <Route path="/login" element={<LoginPage />} /> // Define the login page route
          <Route path="/register" element={<RegisterPage />} /> // Define the registration page route
          <Route path="/account/:subpage?" element={<AccountPage />} /> // Define the account page route with optional subpages
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
