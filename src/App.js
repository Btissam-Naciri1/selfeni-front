import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelfeniHome from './Components/page-acceuil';
import About from './Components/About';
import Contact from './Components/Contact';
import Faqs from './Components/Faqs';
import Login from './Components/login';
import Formulaire from './Components/Formulaire';
import MonCompte from './Components/moncompte';
import EditProfile from './Components/editprofile';
import Logout from './Components/logout';
import Header from './Components/header';  // Import Header

function App() {
    // Define the onLogout function
    const onLogout = () => {
        // Remove authentication tokens from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        // Redirect to login page after logout
        window.location.href = '/login';  // You can also use navigate('/login') if using useNavigate()
    };

    return (
        <Router>
            <Header onLogout={onLogout} />  {/* Pass onLogout function to Header */}
            <Routes>
                <Route path="/" element={<SelfeniHome />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/formulaire" element={<Formulaire />} />
                <Route path="/moncompte" element={<MonCompte />} />
                <Route path="/EditProfile" element={<EditProfile />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    );
}

export default App;
