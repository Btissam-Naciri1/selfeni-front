import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

export default function About() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
            {/* Sticky Header */}
            <header className="sticky top-0 z-10 bg-white shadow-md">
                <Header
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
            </header>

            {/* About Section */}
            <div className="relative isolate py-20 sm:py-32">
                {/* Background Blur Effect */}
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

                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-indigo-700">À propos de Selfeni</h1>
                    <p className="mt-6 text-lg text-gray-700">
                        Découvrez qui nous sommes et notre mission. Chez Selfeni, nous nous engageons à offrir des solutions de gestion de crédit transparentes et fiables pour aider nos clients à atteindre leurs objectifs financiers.
                    </p>
                </div>
            </div>
            {/* Footer Section */}
            <Footer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
    );
}
