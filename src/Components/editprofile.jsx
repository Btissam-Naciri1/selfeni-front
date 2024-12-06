import React, { useState,useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import axios from "axios"

const EditProfile = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    /*const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({ ...passwordData, [name]: value });
    };*/


    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Handle password change logic here (e.g., send data to the server)
        console.log('Password Change:', passwordData);
        setIsModalOpen(false); // Close the modal after submitting
    };


     //change password
     const handleChangePassword = (e) => {
        if(e){
        e.preventDefault();}

        const token = localStorage.getItem('access_token'); // Retrieve JWT

        axios
            .post(
                'http://127.0.0.1:8000/api/change-password/',
                { old_password: oldPassword, new_password: newPassword },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                setMessage(response.data.success || 'Password changed successfully');
                setOldPassword('');
                setNewPassword('');
            })
            .catch((error) => {
                const errorMsg = error.response?.data?.error || 'An error occurred';
                setMessage(errorMsg);
            });
    };

    // this here to update

    const [userData, setUserData] = useState({
        nom: "",
        email: "",
        telephone: "",
        adresse: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const [userId, setUserId] = useState(null); // State to store the user ID

    // Fetch the logged-in user's profile and set the user ID
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("access_token"); // Get JWT token
                const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUserId(response.data.id); // Set the user ID dynamically
                setUserData({
                    nom: response.data.nom,
                    email: response.data.email,
                    telephone: response.data.telephone,
                    adresse: response.data.adresse,
                });
                setLoading(false);
            } catch (err) {
                console.error("Error fetching user profile:", err);
                setError("Failed to load user profile.");
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!userId) {
            setError("User ID not found.");
            return;
        }

        try {
            const token = localStorage.getItem("access_token");
            const response = await axios.patch(
                `http://127.0.0.1:8000/api/users/${userId}/`,
                userData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setSuccess(true);
            console.log("User updated successfully:", response.data);
        } catch (err) {
            console.error("Error updating user:", err);
            setError("Failed to update user.");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
            {/* Header */}
            <Header mobileMenuOpen={false} setMobileMenuOpen={() => {}} />

            {/* Edit Profile Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 mt-32">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-extrabold text-indigo-700 mb-8">Modifier mon profil</h2>
                    {success && <p className="text-green-500">Profile updated successfully!</p>}

                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input
                                id="nom"
                                name="nom"
                                type="text"
                                value={userData.nom}
                                onChange={handleInputChange}
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                            <input
                                id="telephone"
                                name="telephone"
                                type="tel"
                                value={userData.telephone}
                                onChange={handleInputChange}
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">Adresse</label>
                            <input
                                id="adresse"
                                name="adresse"
                                type="text"
                                value={userData.adresse}
                                onChange={handleInputChange}
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="flex justify-end space-x-4">
                            {/* Button for changing password */}
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                            >
                                Changer mot de passe
                            </button>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                            >
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Password Change Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Changer le mot de passe</h3>

                        <form onSubmit= {handleChangePassword} className="space-y-4">
                            <div>
                                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Mot de passe actuel</label>
                                <input
                                    id="currentPassword"
                                    name="currentPassword"
                                    type="password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                                <input
                                    id="newPassword"
                                    name="newPassword"
                                    type="password"
                                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </form>
                        {message && (
                <div className={`mt-4 text-sm ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
                    {message}
                </div>
            )}
                    </div>
                </div>
            )}

            {/* Footer */}
            <Footer mobileMenuOpen={false} setMobileMenuOpen={() => {}} />
        </div>
    );
};

export default EditProfile;
