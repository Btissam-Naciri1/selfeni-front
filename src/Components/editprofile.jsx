import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

const EditProfile = () => {
    // Simulated user data (In real use, you'd fetch this from the server)
    const user = {
        name: 'Jean Dupont',
        email: 'jeandupont@gmail.com',
        phone: '+33 6 12 34 56 78',
        address: '123 Rue de Paris, 75000 Paris',
    };

    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Normally here you would send formData to the server to save the changes
        console.log('Updated Profile:', formData);
        // You can redirect or show a success message after submission
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
            {/* Header */}
            <Header mobileMenuOpen={false} setMobileMenuOpen={() => {}} />

            {/* Edit Profile Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 mt-32">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-extrabold text-indigo-700 mb-8">Modifier mon profil</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
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
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adresse</label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                value={formData.address}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                            >
                                Sauvegarder les modifications
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <Footer mobileMenuOpen={false} setMobileMenuOpen={() => {}} />
        </div>
    );
};

export default EditProfile;
