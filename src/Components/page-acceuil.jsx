'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

export default function SelfeniHome() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
            {/* Header */}
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

            {/* Hero Section */}
            <div className="relative isolate px-6 pt-29 lg:px-8">
                <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight text-indigo-700 sm:text-7xl">
                        Obtenez le crédit qui vous correspond
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                        Avec Selfeni, découvrez une gestion de crédit rapide et intelligente. Notre application analyse
                        vos données pour évaluer votre éligibilité et vous accompagner dans vos démarches en toute
                        transparence.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {/* Navigate to the Form */}
                        <Link
                            to="/formulaire"
                            className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-indigo-500 transition"
                        >
                            Commencer maintenant
                        </Link>
                        <Link
                            to="#"
                            className="text-sm font-semibold text-gray-800 hover:text-indigo-600 transition"
                        >
                            En savoir plus <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform overflow-hidden blur-2xl sm:top-[calc(100%-40rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-indigo-500 opacity-50 sm:w-[70rem]"
                    />
                </div>
            </div>

            {/* Footer Section */}
            <Footer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
    );
}
