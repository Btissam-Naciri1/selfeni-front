import React from "react";

export default function Step1({ loan_amount, loan_amount_term, monthlyPayment, setAmount, setDuration, calculateMonthlyPayment, handleNextStep }) {
  return (
    <>
    <div className="flex-grow flex items-center justify-center py-16 mb-16">
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
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
      </div>
      </div>
    </>
  );
}
