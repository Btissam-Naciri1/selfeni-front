import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ClientsList = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
   
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/credits/")
      .then((response) => setClients(response.data))
      .catch((error) => console.error("Erreur lors de la récupération des données :", error));
  }, []);

  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const paginatedData = clients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDetails = (clientCode) => {
    navigate(`/ScorerClient/${clientCode}`);
    console.log("Afficher les détails du client :", clientCode);
  };

  const handleScore = (clientCode) => {
    console.log("Lancer le score pour le client :", clientCode);
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg text-gray-700 mb-4">Liste des Clients</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant demandé</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date de demande</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {paginatedData.map((client, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.montant_demande}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.date_demande}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-2">
                    <button onClick={() => handleDetails(client.code)} className="px-3 py-1 text-sm border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-50">
                      Détails
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-4 py-3 mt-4">
          <p className="text-sm text-gray-700">
            Affichage <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> à{" "}
            <span className="font-medium">{Math.min(currentPage * itemsPerPage, clients.length)}</span> sur <span className="font-medium">{clients.length}</span> résultats
          </p>
          <nav className="inline-flex items-center space-x-2">
            <button onClick={handlePrevious} disabled={currentPage === 1} className={`inline-flex items-center px-3 py-1 text-sm font-medium border rounded-md ${currentPage === 1 ? "text-gray-300 border-gray-300" : "text-gray-700 border-gray-300 hover:bg-gray-100"}`}>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              Précédent
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index + 1} onClick={() => setCurrentPage(index + 1)} className={`px-4 py-1 text-sm font-medium border rounded-md ${currentPage === index + 1 ? "bg-blue-500 text-white" : "text-gray-700 border-gray-300 hover:bg-gray-100"}`}>
                {index + 1}
              </button>
            ))}
            <button onClick={handleNext} disabled={currentPage === totalPages} className={`inline-flex items-center px-3 py-1 text-sm font-medium border rounded-md ${currentPage === totalPages ? "text-gray-300 border-gray-300" : "text-gray-700 border-gray-300 hover:bg-gray-100"}`}>
              Suivant
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ClientsList;
