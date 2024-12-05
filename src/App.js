import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelfeniHome from './Components/page-acceuil';
import About from './Components/About';
import Contact from './Components/Contact';
import Faqs from './Components/Faqs';
import Login from'./Components/login'
import Formulaire from './Components/Formulaire';
import Dashboard from './AgentComponents/Dashboard/Dashboard';
import AgentProfil from './AgentComponents/AgentProfil/AgentProfil';
import ScorerClient from './AgentComponents/ScorerClient/ScorerClient';
import FaqsPage from './AgentComponents/FAQs/FaqsPage';

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
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/AgentProfil" element={<AgentProfil />} />
                <Route path="/ScorerClient" element={<ScorerClient />} />
                <Route path="/ScorerClient/:code" element={<ScorerClient />} />
                <Route path="/FaqsPage" element={<FaqsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
