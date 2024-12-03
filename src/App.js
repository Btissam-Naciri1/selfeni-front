import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelfeniHome from './Components/page-acceuil';
import About from './Components/About';
import Contact from './Components/Contact';
import Faqs from './Components/Faqs';
import Login from'./Components/login'
import Formulaire from './Components/Formulaire';
import MonCompte from './Components/moncompte';
import EditProfile from './Components/editprofile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SelfeniHome />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/formulaire" element={<Formulaire />} />
                <Route path="/moncompte" element={<MonCompte/>} />
                <Route path="/EditProfile" element={<EditProfile/>} />
            </Routes>
        </Router>
    );
}

export default App;
