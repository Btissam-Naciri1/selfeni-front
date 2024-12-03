import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

export default function SimpleContactForm() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div
            className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
            style={{
                backgroundImage: "url('/images/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                imageRendering: "auto",
            }}
        >
            {/* Sticky Header */}
            <header className="sticky top-0 z-10 bg-white shadow-md">
                <Header
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
            </header>

            {/* Contact Form Section */}
            <div className="flex-grow flex items-center justify-center px-6 py-40 bg-transparent">
                <div className="bg-white p-10 rounded-xl shadow-lg max-w-xl w-full space-y-6">
                    <h2 className="text-3xl font-extrabold text-indigo-600 text-center sm:text-4xl">
                        L'ÉQUIPE EST À VOTRE DISPOSITION
                    </h2>
                    <p className="text-lg text-gray-700 text-center">
                        Vous pouvez nous contacter via ce formulaire de contact, ou directement par téléphone :
                        <strong className="block mt-2 text-indigo-600 text-lg">+212 6 65 55 55 55</strong>
                    </p>

                    <form action="#" method="POST" className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full rounded-lg border-gray-300 text-gray-800 shadow focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                                placeholder="Nom complet"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full rounded-lg border-gray-300 text-gray-800 shadow focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                                placeholder="Adresse e-mail"
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="mt-1 block w-full rounded-lg border-gray-300 text-gray-800 shadow focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                                placeholder="Sujet "
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="mt-1 block w-full rounded-lg border-gray-300 text-gray-800 shadow focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                                placeholder="Message"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-medium py-2.5 rounded-lg shadow hover:bg-indigo-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Section */}
            <Footer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
    );
}
