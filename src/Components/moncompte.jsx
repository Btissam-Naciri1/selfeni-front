import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const MonCompte = () => {

    const user = {
        name: 'Jean Dupont',
        email: 'jeandupont@gmail.com',
        phone: '+33 6 12 34 56 78',
        address: '123 Rue de Paris, 75000 Paris',
        creditStatus: 'Approved',
    };

    // Simulated credit data
    const credits = [
        { statut: 'En cours', montant: 5000, duree: 24 },
        { statut: 'Approuvé', montant: 10000, duree: 36 },
        { statut: 'Refusé', montant: 2000, duree: 12 },
        // Add more rows as needed
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // You can change this to show more or fewer items per page
    const totalItems = credits.length;

    // Paginate logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = credits.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
            {/* Header */}
            <Header mobileMenuOpen={false} setMobileMenuOpen={() => {}} />

            {/* Profile Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 mt-32">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-extrabold text-indigo-700 mb-8">Mon Profil</h2>

                    {/* Profile Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Informations Personnelles</h3>
                            <div className="mt-4 space-y-2 text-gray-600">
                                <p><strong>Nom:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Téléphone:</strong> {user.phone}</p>
                                <p><strong>Adresse:</strong> {user.address}</p>
                            </div>
                            <div className="mt-6">
                                <Link
                                    to="/editprofile"
                                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                                >
                                    Modifier mon profil
                                </Link>
                            </div>
                        </div>

                        {/* Credit Status */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">État de mon Crédit</h3>
                            <div className="mt-4 space-y-2 text-gray-600">
                                <p><strong>Statut:</strong> {user.creditStatus}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Credit Table Section */}
            <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-extrabold text-indigo-700 mb-8">Mes Crédits</h2>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead>
                            <tr className="border-b">
                                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Statut</th>
                                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Montant</th>
                                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Durée (mois)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentItems.map((credit, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-6 text-sm text-gray-800">{credit.statut}</td>
                                    <td className="py-3 px-6 text-sm text-gray-800">{credit.montant} €</td>
                                    <td className="py-3 px-6 text-sm text-gray-800">{credit.duree} mois</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex justify-between items-center">
                        <button
                            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                            className="px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                        >
                            Précédent
                        </button>
                        <div className="flex space-x-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`px-4 py-2 text-sm rounded-md ${currentPage === i + 1 ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 hover:bg-indigo-100'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
                            className="px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                        >
                            Suivant
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer mobileMenuOpen={false} setMobileMenuOpen={() => {}} />
        </div>
    );
};

export default MonCompte;
