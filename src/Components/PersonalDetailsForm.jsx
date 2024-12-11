import React from "react";

const PersonalDetailsForm = ({ handlePreviousStep, handleNextStep }) => {
  return (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-8 text-center">
        Mes coordonnées
      </h2>
      <form>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="example@example.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="06 12 34 56 78"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePreviousStep}
            className="bg-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-400"
          >
            Retour
          </button>
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
  );
};

export default PersonalDetailsForm;
