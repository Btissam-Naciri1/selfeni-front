'use client';

import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
];

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
    return (
        <header className="absolute inset-x-0 top-0 z-50 shadow-sm">
            <nav className="flex items-center justify-between bg-white/90 backdrop-blur-md p-6 lg:px-8 rounded-b-lg shadow-md">
                <div className="flex items-center gap-6 lg:flex-1">
                    <Link to="/" className="flex items-center gap-4">
                        <div className="h-16 w-auto flex items-center justify-center">
                            <img
                                alt="Selfeni Logo"
                                src="/images/Selefni.png"
                                className="h-28 w-40 object-contain"
                            />
                        </div>
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Ouvrir le menu principal</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm font-semibold text-gray-800 hover:text-indigo-600 transition"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        to="/login"
                        className="flex items-center text-sm font-semibold text-gray-800 hover:text-indigo-600 transition"
                    >
                        {/* Lock Icon as SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17v-2m0 0v-4m0 0V7a4 4 0 118 0v6a4 4 0 01-8 0v6m0 0H8a4 4 0 01-4-4v-6a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4h-4z" />
                        </svg>
                        Mon compte
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
                >
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                            <div className="h-12 w-auto flex items-center justify-center">
                                <img
                                    alt="Selfeni Logo"
                                    src="/images/Selefni.png"
                                    className="h-16 w-auto object-contain"
                                />
                            </div>
                            <span className="text-lg font-semibold text-indigo-600">Selfeni</span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Fermer le menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-200">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-indigo-600"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
