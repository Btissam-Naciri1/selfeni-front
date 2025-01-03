import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer'; 
const Historique = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Updated to show 5 items per page
  
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get('http://54.86.182.184/api/admin/credits/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCredits(response.data); // Set data only once
      } catch (err) {
        console.error('Error fetching encours credits:', err);
        setError('Failed to load credits. Make sure you have admin access.');
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, []); // Avoid duplicate calls

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const totalPages = Math.ceil(credits.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Get the paginated data
  const paginatedData = credits.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );




  return (
    <div>
        <Navbar/>
    <div className="p-8 min-h-screen">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg text-gray-700 mb-4">Liste des Crédits</h3>
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
              {paginatedData.map((credit, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{credit.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{credit.montant_demande}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(credit.date_demande).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{credit.statut}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-4 py-3 mt-4">
          <p className="text-sm text-gray-700">
            Affichage <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> à{" "}
            <span className="font-medium">{Math.min(currentPage * itemsPerPage, credits.length)}</span> sur{" "}
            <span className="font-medium">{credits.length}</span> résultats
          </p>
          <nav className="inline-flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`inline-flex items-center px-3 py-1 text-sm font-medium border rounded-md ${
                currentPage === 1 ? "text-gray-300 border-gray-300" : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              Précédent
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-1 text-sm font-medium border rounded-md ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`inline-flex items-center px-3 py-1 text-sm font-medium border rounded-md ${
                currentPage === totalPages ? "text-gray-300 border-gray-300" : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Suivant
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Historique;
