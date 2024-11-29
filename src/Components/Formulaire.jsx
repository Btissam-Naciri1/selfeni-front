'use client';

import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

export default function Formulaire() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [step, setStep] = useState(1); // Current step
    const [amount, setAmount] = useState(10000);
    const [duration, setDuration] = useState(24);
    const [monthlyPayment, setMonthlyPayment] = useState(469.4);

    const handleNextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const handlePreviousStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const calculateMonthlyPayment = (amount, duration) => {
        const rate = 0.05; // Example 5% annual interest rate
        const monthlyRate = rate / 12;
        const payment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -duration));
        setMonthlyPayment(payment.toFixed(2));
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

            {/* Progress Bar */}
            <div className="w-full max-w-lg mx-auto mt-6 flex items-center relative">
                {/* Step 1 */}
                <div
                    className={`flex-1 text-center py-3 relative ${
                        step === 1 ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-gray-700'
                    }`}
                >
                    <span className="font-bold">1</span>
                    <p className="text-sm">Simuler mon crédit</p>
                    {step === 1 && (
                        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2">
                            <div className="w-4 h-4 bg-yellow-400 transform rotate-45"></div>
                        </div>
                    )}
                </div>

                {/* Step 2 */}
                <div
                    className={`flex-1 text-center py-3 relative ${
                        step === 2 ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-gray-700'
                    }`}
                >
                    <span className="font-bold">2</span>
                    <p className="text-sm">Mes coordonnées</p>
                    {step === 2 && (
                        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2">
                            <div className="w-4 h-4 bg-yellow-400 transform rotate-45"></div>
                        </div>
                    )}
                </div>

                {/* Step 3 */}
                <div
                    className={`flex-1 text-center py-3 relative ${
                        step === 3 ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-gray-700'
                    }`}
                >
                    <span className="font-bold">3</span>
                    <p className="text-sm">Mes infos personnelles</p>
                    {step === 3 && (
                        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2">
                            <div className="w-4 h-4 bg-yellow-400 transform rotate-45"></div>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center py-16">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                    {step === 1 && (
                        <>
                            <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">Simuler mon crédit</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="project" className="block text-sm font-medium text-gray-700">
                                        Mon projet
                                    </label>
                                    <select
                                        id="project"
                                        name="project"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option>J'ai besoin d'argent</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                                        Je suis
                                    </label>
                                    <select
                                        id="userType"
                                        name="userType"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option>Fonctionnaire</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                                        Montant (en DH): <span className="font-bold">{amount}</span>
                                    </label>
                                    <input
                                        type="range"
                                        id="amount"
                                        name="amount"
                                        min="1000"
                                        max="100000"
                                        step="1000"
                                        value={amount}
                                        onChange={(e) => {
                                            const value = parseInt(e.target.value, 10);
                                            setAmount(value);
                                            calculateMonthlyPayment(value, duration);
                                        }}
                                        className="w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                                        Durée (en mois): <span className="font-bold">{duration}</span>
                                    </label>
                                    <input
                                        type="range"
                                        id="duration"
                                        name="duration"
                                        min="6"
                                        max="60"
                                        step="1"
                                        value={duration}
                                        onChange={(e) => {
                                            const value = parseInt(e.target.value, 10);
                                            setDuration(value);
                                            calculateMonthlyPayment(amount, value);
                                        }}
                                        className="w-full"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="monthlyPayment" className="block text-sm font-medium text-gray-700">
                                        Mensualités (en DH)
                                    </label>
                                    <input
                                        type="text"
                                        id="monthlyPayment"
                                        name="monthlyPayment"
                                        value={monthlyPayment}
                                        readOnly
                                        className="mt-1 block w-full rounded-md bg-gray-100 border-gray-300 shadow-sm"
                                    />
                                </div>
                            </form>
                        </>
                    )}

                    {/* Navigation Buttons */}
                    <div className="mt-6 flex justify-between">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={handlePreviousStep}
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                            >
                                Retour
                            </button>
                        )}
                        {step < 3 && (
                            <button
                                type="button"
                                onClick={handleNextStep}
                                className="bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500"
                            >
                                Continuer
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
    );
}
