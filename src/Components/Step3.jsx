import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Step3({ handlePreviousStep, handleValidation, formData, setFormData }) {
  const navigate = useNavigate();
/*
  // State to hold form inputs
  const [formData, setFormData] = useState({
    gender: "Male", // Default value
    married: "Yes", // Default value
    dependents: "1", // Default value
    education: "Graduate", // Default value
    selfEmployed: "No", // Default value
    income: 5000, // Default value
    coapplicantIncome: 2000, // Default value
    loanAmount: 150, // Default value
    loanAmountTerm: 360, // Default value
    creditHistory: 1.0, // Default value
    propertyArea: "Urban", // Default value
  });
  
*/
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation(formData); // Pass the formData to the validation function
    navigate("/moncompte");
  };
  

  return (
    <>
    <div className="flex-grow flex items-center justify-center py-16 mb-16">
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-8 text-center">
        Mes infos personnelles
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="F">Femme</option>
            <option value="H">Homme</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="married" className="block text-sm font-medium text-gray-700">
            Marié
          </label>
          <select
            id="married"
            name="married"
            value={formData.married}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="Y">Oui</option>
            <option value="N">Non</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="dependents" className="block text-sm font-medium text-gray-700">
            Dépendants
          </label>
          <select
            id="dependents"
            name="dependents"
            value={formData.dependents}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="education" className="block text-sm font-medium text-gray-700">
            Éducation
          </label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option>Diplômé</option>
            <option>Non diplômé</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="selfEmployed" className="block text-sm font-medium text-gray-700">
            Travailleur Indépendant
          </label>
          <select
            id="selfEmployed"
            name="selfEmployed"
            value={formData.selfEmployed}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="Y">Oui</option>
            <option value="N">Non</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="income" className="block text-sm font-medium text-gray-700">
            Revenu du Demandeur
          </label>
          <input
            type="number"
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="0"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="coapplicantIncome" className="block text-sm font-medium text-gray-700">
            Revenu du Coemprunteur
          </label>
          <input
            type="number"
            id="coapplicantIncome"
            name="coapplicantIncome"
            value={formData.coapplicantIncome}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            placeholder="0"
          />
        </div>
        <div className="mb-6">
            <label htmlFor="creditHistory" className="block text-sm font-medium text-gray-700">
              Historique de crédit
            </label>
            <select
              id="creditHistory"
              name="creditHistory"
              value={formData.creditHistory}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="1.0">Bon</option>
              <option value="0.0">Mauvais</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="propertyArea" className="block text-sm font-medium text-gray-700">
              Zone de propriété
            </label>
            <select
              id="propertyArea"
              name="propertyArea"
              value={formData.propertyArea}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="Urban">Urbaine</option>
              <option value="Semiurban">Semi-urbaine</option>
              <option value="Rural">Rurale</option>
            </select>
          </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePreviousStep}
            className="bg-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-400"
          >
            Retour
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700"
          >
            Valider
          </button>
        </div>
      </form>
      </div>
      </div>
    </>
  );
}