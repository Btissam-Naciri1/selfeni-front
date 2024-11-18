import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelfeniHome from './Components/page-acceuil';
import About from './Components/About';
import Contact from './Components/Contact';
import Faqs from './Components/Faqs';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SelfeniHome />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faqs" element={<Faqs />} />
            </Routes>
        </Router>
    );
}

export default App;
