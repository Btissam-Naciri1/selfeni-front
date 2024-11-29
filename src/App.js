import './App.css';
import Navbar from './AgentComponents/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Dashboard from './AgentComponents/Dashboard/Dashboard';
import ScorerClient from './AgentComponents/ScorerClient/ScorerClient';
import AgentProfil from './AgentComponents/AgentProfil/AgentProfil';
import './styles/globals.css'

function App() {
  const location = useLocation(); // Obtenez la route actuelle

  // Vérifiez si la route actuelle est "/ScorerClient" ou "/Qualitatif"
  const showSidebar = location.pathname !== "/ScorerClient" && location.pathname !== "/Qualitatif"&& location.pathname !== "/Dashboard"&& location.pathname !== "/Correctif";

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar /> {/* Barre supérieure */}
        <main style={{ marginLeft: showSidebar ? "240px" : "0", padding: "20px", width: "100%" }}>
          {/* Définition des routes */}
          <Routes>
          <Route path="/" element={<Navigate to="/Dashboard" />} />
          
            <Route path="/Dashboard" element={<Dashboard />} /> {/* Tableau de bord */}
            <Route path="/ScorerClient" element={<ScorerClient />} /> {/* Scorer un client */}
            <Route path="/AgentProfil" element={<AgentProfil />} />{/* Profil Correctif */}
            
          </Routes>
        </main>
      </div>
    
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;