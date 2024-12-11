
'use client';

import React, { useState } from 'react';
import Header from './header';

import Footer from './footer';
import PersonalDetailsForm from './PersonalDetailsForm';
import AdditionalInfoForm from "./AdditionalInfoForm";

export default function Formulaire() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [step, setStep] = useState(1); // Current step
    const [loan_amount, setAmount] = useState(10000);
    const [loan_amount_term, setDuration] = useState(24);
    const [monthlyPayment, setMonthlyPayment] = useState(469.4);

    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1); // Increment the step directly
        }
    };
    

    const handlePreviousStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleValidation = () => {
        alert('Les informations saisies ont été validées avec succès.');
    };

    const calculateMonthlyPayment = (loan_amount, loan_amount_term) => {
        const rate = 0.05; // Example 5% annual interest rate
        const monthlyRate = rate / 12;
        const payment = (loan_amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loan_amount_term));
        setMonthlyPayment(payment.toFixed(2));
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-purple-100">
            {/* Header */}
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

            {/* Add space below the header */}
            <div className="py-16"></div>

            {/* Progress Bar */}
            <div className="w-full max-w-4xl mx-auto flex items-center relative mb-8">
                <div className={`flex-1 text-center py-4 ${step === 1 ? 'bg-indigo-600 text-white' : 'bg-gray-300'} rounded-lg mx-2`}>
                    <span className="font-bold text-lg">1</span>
                    <p className="text-sm">Commencer mon crédit</p>
                </div>
                <div className={`flex-1 text-center py-4 ${step === 2 ? 'bg-indigo-600 text-white' : 'bg-gray-300'} rounded-lg mx-2`}>
                    <span className="font-bold text-lg">2</span>
                    <p className="text-sm">Mes coordonnées</p>
                </div>
                <div className={`flex-1 text-center py-4 ${step === 3 ? 'bg-indigo-600 text-white' : 'bg-gray-300'} rounded-lg mx-2`}>
                    <span className="font-bold text-lg">3</span>
                    <p className="text-sm">Mes infos personnelles</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center py-16 mb-16">
                <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
                    {step === 1 && (
                        <>
                            <h2 className="text-2xl font-extrabold text-gray-800 mb-8 text-center">
                                Commencer mon crédit
                            </h2>
                            <form>
                                {/* Amount */}
                                <div className="mb-6">
                                    <label htmlFor="loan_amount" className="block text-sm font-medium text-gray-700 mb-2">
    Montant (en DH):
</label>
<div className="flex items-center gap-4">
    <input
        type="number"
        value={loan_amount}
        readOnly
        className="w-24 text-center py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 font-bold text-indigo-600"
    />
    <input
        type="range"
        id="loan_amount"
        name="loan_amount"
        min="1000"
        max="500000"
        step="1000"
        value={loan_amount}
        onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            setAmount(value);
            calculateMonthlyPayment(value, loan_amount_term);
        }}
        className="w-full h-2 bg-indigo-300 rounded-lg appearance-none cursor-pointer focus:outline-none"
    />
</div>
</div>

{/* Duration */}
<div className="mb-6">
    <label htmlFor="loan_amount_term" className="block text-sm font-medium text-gray-700 mb-2">
        Durée (en mois):
    </label>
    <div className="flex items-center gap-4">
        <input
            type="number"
            value={loan_amount_term}
            readOnly
            className="w-24 text-center py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 font-bold text-indigo-600"
        />
        <input
            type="range"
            id="loan_amount_term"
            name="loan_amount_term"
            min="6"
            max="60"
            step="1"
            value={loan_amount_term}
            onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setDuration(value);
                calculateMonthlyPayment(loan_amount, value);
            }}
            className="w-full h-2 bg-indigo-300 rounded-lg appearance-none cursor-pointer focus:outline-none"
        />
    </div>
</div>

{/* Monthly Payment */}
<div className="mb-6">
    <label htmlFor="monthlyPayment" className="block text-sm font-medium text-gray-700 mb-2">
        Mensualités (en DH):
    </label>
    <input
        type="number"
        value={monthlyPayment}
        readOnly
        className="w-full text-center py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 font-bold text-indigo-600"
    />
</div>

{/* Next Button */}
<div className="flex justify-end">
    <button
        type="button"
        onClick={handleNextStep}
        className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700"
    >
        Continuer
    </button>
</div>
</form>
</>
)}
{step === 2 && (
          <PersonalDetailsForm
            handlePreviousStep={handlePreviousStep}
            handleNextStep={handleNextStep}
          />
        )}
        {step === 3 && (
          <AdditionalInfoForm
            handlePreviousStep={handlePreviousStep}
            handleValidation={handleValidation}
          />
        )}

                </div>
            </div>

            {/* Footer */}
            <Footer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
        </div>
    );
}
