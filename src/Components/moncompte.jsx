import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import axios from "axios";

const MonCompte = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [credits, setCredits] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("access_token"); // Get access token from localStorage
                const response = await axios.get("http://54.86.182.184/api/profile/", {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                    },
                });

                setUser(response.data); // Set the user data
                setLoading(false); // Stop the loading state
            } catch (err) {
                console.error("Error fetching profile:", err);
                setError("Failed to fetch profile data");
                setLoading(false);
            }
        };

        fetchProfile();
    }, []); // Run only once on component mount

    useEffect(() => {
        const fetchCredits = async () => {
            try {
                const token = localStorage.getItem("access_token"); // Get the token from localStorage
                const response = await axios.get("http://54.86.182.184/api/credits/", {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the Authorization header
                    },
                });

                setCredits(response.data); // Set the fetched data to the state
                setLoading(false); // Stop loading
            } catch (err) {
                console.error("Error fetching credits:", err);
                setError("Failed to fetch credit data");
                setLoading(false);
            }
        };

        fetchCredits();
    }, []); // Fetch data on component mount

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

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
            <div className="max-w-7xl mx-auto px-6 py-16 mt-32 relative">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-extrabold text-indigo-700 mb-8">Mon Profil</h2>

                    {/* Profile Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Informations Personnelles</h3>
                            <div className="mt-4 space-y-2 text-gray-600">
                                <p><strong>Nom:</strong> {user.nom} {user.prenom}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Téléphone:</strong> {user.telephone}</p>
                                <p><strong>Adresse:</strong> {user.adresse}</p>
                            </div>
                        </div>
                    </div>

                    {/* Button to Edit Profile - Right side, centered vertically */}
                    <div className="absolute top-1/2 right-60 transform -translate-y-1/2">
                        <Link
                            to="/editprofile"
                            className="inline-flex items-center bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-indigo-700 transition"
                        >
                            Modifier mon profil
                        </Link>
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
                                    <td className="py-3 px-6 text-sm text-gray-800">{credit.montant_demande} MAD</td>
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
