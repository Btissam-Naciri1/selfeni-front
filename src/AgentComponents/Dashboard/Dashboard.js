import React, { useState } from "react";
import "./Dashboard.css";
import Clientslist from "../ListeClient/Clientslist";
import Navbar from "../Navbar/Navbar";
import Footer from '../footer/footer';


const Dashboard = () => {
  // Données pour les cartes
  const cardsData = [
    { value: "12", label: "Total des clients" },
    { value: "86%", label: "Clients Scorés" },
    { value: "45", label: "Nouveaux clients" },
    { value: "$12,400", label: "Revenus ce mois" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="dashboard-wrapper">
      {/* Barre de navigation */}
      <Navbar />

      {/* Arrière-plan stylisé */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Section des cartes */}
      <div className="dashboard-cards grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12 px-6 py-12">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-3xl font-semibold text-indigo-600">{card.value}</h3>
            <p className="mt-2 text-lg text-gray-500">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Liste des clients */}
      <Clientslist />

      {/* Pied de page */}
      <Footer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </div>
  );
};

export default Dashboard;
