import React, { useState } from "react";
import axios from "axios";
//the working one
const AdditionalInfoForm = ({ handlePreviousStep, handleValidation }) => {
  const [formData, setFormData] = useState({
    Gender: "",
    Married: "",
    Dependents: "",
    Education: "",
    SelfEmployed: "",
    ApplicantIncome: "",
    CoapplicantIncome: "",
    LoanAmount: "",
    Loan_Amount_Term: "",
    Credit_History: "",
    Property_Area: "",
  });

  const [loanStatus, setLoanStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      // Get the access token from localStorage
      const token = localStorage.getItem("access_token");
  
      // Prepare headers
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      };
  
      // API 1: Predict loan status
      const predictLoanResponse = await fetch(
        "http://localhost:8000/ml_integration/predict-loan-status/add",
        {
          method: "POST",
          headers,
          body: JSON.stringify(formData),
        }
      );
  
      if (!predictLoanResponse.ok) {
        const errorData = await predictLoanResponse.json();
        setError(errorData.error || "An error occurred while predicting loan status");
        return;
      }
  
      const loanPredictionData = await predictLoanResponse.json();
      const loanPredictionId = loanPredictionData.id; // Assuming the API response includes the LoanPrediction ID
  
      // API 2: Create credit
      const creditsResponse = await axios.post(
        "http://127.0.0.1:8000/api/credits/",
        {
          montant_demande: formData.LoanAmount,      // Use `LoanAmount` from `formData`
          duree: formData.Loan_Amount_Term,         // Use `Loan_Amount_Term` from `formData`
          loan_prediction: loanPredictionId,        // Pass the LoanPrediction ID
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Update the loan status and proceed
      setLoanStatus(loanPredictionData.loan_status);
      console.log("Credits API response:", creditsResponse.data);
      handleValidation(); // Move to the next step
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
      console.error("Error:", err);
    }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-8 text-center">
        Informations Complètes
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Gender */}
        <div className="mb-6">
          <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <select
            id="Gender"
            name="Gender"
            value={formData.Gender}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="">-- Sélectionnez --</option>
            <option value="Male">Homme</option>
            <option value="Female">Femme</option>
          </select>
        </div>

        {/* Married */}
        <div className="mb-6">
          <label htmlFor="Married" className="block text-sm font-medium text-gray-700">
            Marié
          </label>
          <select
            id="Married"
            name="Married"
            value={formData.Married}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="">-- Sélectionnez --</option>
            <option value="Yes">Oui</option>
            <option value="No">Non</option>
          </select>
        </div>

        {/* Dependents */}
        <div className="mb-6">
          <label htmlFor="Dependents" className="block text-sm font-medium text-gray-700">
            Nombre de personnes à charge
          </label>
          <input
            type="number"
            id="Dependents"
            name="Dependents"
            value={formData.Dependents}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Education */}
        <div className="mb-6">
          <label htmlFor="Education" className="block text-sm font-medium text-gray-700">
            Niveau d'éducation
          </label>
          <select
            id="Education"
            name="Education"
            value={formData.Education}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="">-- Sélectionnez --</option>
            <option value="Graduate">Diplômé</option>
            <option value="Not Graduate">Non diplômé</option>
          </select>
        </div>

        {/* Self Employed */}
        <div className="mb-6">
          <label htmlFor="SelfEmployed" className="block text-sm font-medium text-gray-700">
            Travailleur indépendant
          </label>
          <select
            id="SelfEmployed"
            name="SelfEmployed"
            value={formData.SelfEmployed}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="">-- Sélectionnez --</option>
            <option value="Yes">Oui</option>
            <option value="No">Non</option>
          </select>
        </div>

        {/* Applicant Income */}
        <div className="mb-6">
          <label htmlFor="ApplicantIncome" className="block text-sm font-medium text-gray-700">
            Revenu du demandeur
          </label>
          <input
            type="number"
            id="ApplicantIncome"
            name="ApplicantIncome"
            value={formData.ApplicantIncome}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Coapplicant Income */}
        <div className="mb-6">
          <label htmlFor="CoapplicantIncome" className="block text-sm font-medium text-gray-700">
            Revenu du co-demandeur
          </label>
          <input
            type="number"
            id="CoapplicantIncome"
            name="CoapplicantIncome"
            value={formData.CoapplicantIncome}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Loan Amount */}
        <div className="mb-6">
          <label htmlFor="LoanAmount" className="block text-sm font-medium text-gray-700">
            Montant du prêt
          </label>
          <input
            type="number"
            id="LoanAmount"
            name="LoanAmount"
            value={formData.LoanAmount}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Loan Amount Term */}
        <div className="mb-6">
          <label htmlFor="Loan_Amount_Term" className="block text-sm font-medium text-gray-700">
            Durée du prêt (en mois)
          </label>
          <input
            type="number"
            id="Loan_Amount_Term"
            name="Loan_Amount_Term"
            value={formData.Loan_Amount_Term}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Credit History */}
        <div className="mb-6">
          <label htmlFor="Credit_History" className="block text-sm font-medium text-gray-700">
            Historique de crédit (1 pour bon, 0 pour mauvais)
          </label>
          <select
            id="Credit_History"
            name="Credit_History"
            value={formData.Credit_History}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="">-- Sélectionnez --</option>
            <option value="1">Bon</option>
            <option value="0">Mauvais</option>
          </select>
        </div>

        {/* Property Area */}
        <div className="mb-6">
          <label htmlFor="Property_Area" className="block text-sm font-medium text-gray-700">
            Zone immobilière
          </label>
          <select
            id="Property_Area"
            name="Property_Area"
            value={formData.Property_Area}
            onChange={handleChange}
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="">-- Sélectionnez --</option>
            <option value="Urban">Urbain</option>
            <option value="Semiurban">Semi-urbain</option>
            <option value="Rural">Rural</option>
          </select>
        </div>

        {/* Submit Button */}
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
            Soumettre
          </button>
        </div>
      </form>

      {loanStatus && (
        <p className="mt-4 text-green-600">
          Résultat: Votre prêt est {loanStatus}.
        </p>
      )}
      {error && (
        <p className="mt-4 text-red-600">
          Erreur: {error}.
        </p>
      )}
    </div>
  );
};

export default AdditionalInfoForm;
