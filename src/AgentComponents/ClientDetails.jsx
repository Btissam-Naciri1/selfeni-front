import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/footer";

const ClientDetails = () => {
  let { loan_id } = useParams(); // Extract loan_id from URL params
  const navigate = useNavigate();
  const [loan, setLoan] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [loanStatus, setLoanStatus] = useState("");
  useEffect(() => {
    const fetchLoanDetails = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(
          `http://127.0.0.1:8000/ml_integration/predict-loan-status/${loan_id}/`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLoan(response.data);
      } catch (err) {
        console.error("Error fetching loan details:", err);
        setError("Failed to load loan details.");
      } finally {
        setLoading(false);
      }
    };

    fetchLoanDetails();
  }, [loan_id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const handleBack = () => {
    navigate("/Dashboard");
  };

  const handleScorer = () => {
    setShowPopup(true); // Show the popup
  };

  const handleAccept = () => {
    alert("Le prêt a été accepté !");
    setShowPopup(false);
  };

  const handleRefuse = () => {
    alert("Le prêt a été refusé !");
    setShowPopup(false);
  };

  return (
    <div>
      <Navbar />
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-center tracking-tight text-gray-700 font-bold text-3xl sm:text-4xl mb-8">
          Détails du Crédit
        </h1>

        <div className="mx-auto max-w-4xl">
          {/* Grid avec tous les attributs */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
            {/* Nom */}
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Nom
              </label>
              <p className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm">
                {loan?.user_id || "Non spécifié"}
              </p>
            </div>

            {/* Genre */}
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Genre
              </label>
              <p className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm">
                {loan?.gender || "Non spécifié"}
              </p>
            </div>

            {/* Marié */}
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Marié
              </label>
              <p className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm">
                {loan?.married ? "Oui" : "Non"}
              </p>
            </div>

            {/* Dépendants */}
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Dépendants
              </label>
              <p className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm">
                {loan?.dependants || 0}
              </p>
            </div>

            {/* Éducation */}
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Éducation
              </label>
              <p className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm">
                {loan?.education || "Non spécifié"}
              </p>
            </div>

            {/* Revenu Demandeur */}
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Revenu Demandeur
              </label>
              <p className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm">
                {loan?.applicant_income || 0}
              </p>
            </div>

            {/* Montant du prêt */}
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Montant du prêt
              </label>
              <p className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm">
                {loan?.loan_amount || 0}
              </p>
            </div>

            {/* Travailleur Indépendant */}
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Travailleur Indépendant
              </label>
              <p className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm">
                {loan?.self_employed ? "Oui" : "Non"}
              </p>
            </div>

            {/* Coemprunteur */}
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Coemprunteur
              </label>
              <p className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm">
                {loan?.coapplicant_income || "Non spécifié"}
              </p>
            </div>

            {/* Durée du prêt */}
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Durée du prêt (en mois)
              </label>
              <p className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm">
                {loan?.loan_amount_term || 0}
              </p>
            </div>

            {/* Historique du Crédit */}
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Historique du Crédit
              </label>
              <p className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm">
                {loan?.credit_history || "Non spécifié"}
              </p>
            </div>
          </div>

          {/* Boutons */}
          <div className="mt-10 flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="w-full sm:w-auto bg-gray-300 text-gray-900 font-semibold px-6 py-2.5 rounded-md shadow-sm hover:bg-gray-400"
            >
              Retour
            </button>
            <button
              type="button"
              onClick={handleScorer}
              className="w-full sm:w-auto bg-indigo-500 text-white font-semibold px-6 py-2.5 rounded-md shadow-sm hover:bg-indigo-600"
            >
              Scorer
            </button>
          </div>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-lg font-semibold mb-4">Statut du prêt</h2>
            <p className="mb-6 text-gray-700">{loan.loan_status}</p>
            <div className="flex justify-between">
              <button
                onClick={handleAccept}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
              >
                Accepter
              </button>
              <button
                onClick={handleRefuse}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
              >
                Refuser
              </button>
            </div>
          </div>
        </div>
      )}


      <Footer />
    </div>
  );
};

export default ClientDetails;
