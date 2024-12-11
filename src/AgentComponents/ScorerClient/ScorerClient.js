import React, { useState ,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer'; // Assurez-vous que le chemin est correct


const ScorerClient = () => {
  const navigate = useNavigate();
  const { loanPredictionId ,credit_id} = useParams(); // Extract `loanPredictionId` from the route params
  const [loanDetails, setLoanDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleBack = () => {
    navigate("/Dashboard");
  };
  

  console.log("Loan Prediction ID:", loanPredictionId);
  console.log("Credit ID:", credit_id);

 /* const handleConfirm = () => {
    alert("Informations confirmées !");
    // Add any extra logic for the "Confirm" button
  };*/

  const handleApprove = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage('');
  
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('access_token');
  
      // Make the API request to approve the credit
      const response = await fetch(`http://127.0.0.1:8000/api/credits/${credit_id}/approve-credit-status/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  // Add the token to the Authorization header
        },
        credentials: 'include', // Optional: Include credentials if needed for session-based auth
      });
  
      if (!response.ok) {
        throw new Error('Failed to approve credit');
      }
  
      // Handle the response (you can show a success message or update UI accordingly)
      const data = await response.json();
      setSuccessMessage(data.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage('');
  
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('access_token');
  
      // Make the API request to approve the credit
      const response = await fetch(`http://127.0.0.1:8000/api/credits/${credit_id}/reject-credit-status/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  // Add the token to the Authorization header
        },
        credentials: 'include', // Optional: Include credentials if needed for session-based auth
      });
  
      if (!response.ok) {
        throw new Error('Failed to approve credit');
      }
  
      // Handle the response (you can show a success message or update UI accordingly)
      const data = await response.json();
      setSuccessMessage(data.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchLoanDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/loan_prediction/${loanPredictionId}/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLoanDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (loanPredictionId) fetchLoanDetails(); // Ensure loanPredictionId is defined before making the API call
  }, [loanPredictionId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar/>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {error && <p className="text-red-500">{error}</p>}
      {/* Background avec un design moderne */}
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-center tracking-tight text-gray-700 font-bold text-3xl sm:text-4xl mb-8">
          Détails du Client
        </h1>

        <form className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
            {/* Nom */}
            <div>
              <label htmlFor="nom" className="block text-sm font-semibold text-gray-900">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                value={loanDetails?.client_n}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>

            {/* Prénom */}
            <div>
              <label htmlFor="prenom" className="block text-sm font-semibold text-gray-900">
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                value={loanDetails?.client_pr}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 mt-6">
            {/* Genre */}
            <div>
              <label htmlFor="genre" className="block text-sm font-semibold text-gray-900">
                Genre
              </label>
              <input
                type="text"
                id="genre"
                value={loanDetails?.gender || "Loading..."}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>

            {/* Marié */}
            <div>
              <label htmlFor="marie" className="block text-sm font-semibold text-gray-900">
                Marié
              </label>
              <input
                type="text"
                id="marie"
                value={loanDetails?.married ? "Non" : "Oui"}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>

            {/* Dépendants */}
            <div>
              <label htmlFor="dependants" className="block text-sm font-semibold text-gray-900">
                Dépendants
              </label>
              <input
                type="number"
                id="dependants"
                value={loanDetails?.dependents || "Loading..."}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 mt-6">
            {/* Éducation */}
            <div>
              <label htmlFor="education" className="block text-sm font-semibold text-gray-900">
                Éducation
              </label>
              <input
                type="text"
                id="education"
                value={loanDetails?.education}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>

            {/* Revenu Demandeur */}
            <div>
              <label htmlFor="revenuDemandeur" className="block text-sm font-semibold text-gray-900">
                Revenu Demandeur
              </label>
              <input
                type="number"
                id="revenuDemandeur"
                value={loanDetails?.applicant_income}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>

            {/* Montant du prêt */}
            <div>
              <label htmlFor="montantPret" className="block text-sm font-semibold text-gray-900">
                Montant du prêt
              </label>
              <input
                type="number"
                id="montantPret"
                value={loanDetails?.loan_amount}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>
          </div>

          {/* Nouveaux champs */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 mt-6">
            {/* Travailleur Indépendant */}
            <div>
              <label htmlFor="travailleurIndependant" className="block text-sm font-semibold text-gray-900">
                Travailleur Indépendant
              </label>
              <input
                type="text"
                id="travailleurIndependant"
                value={loanDetails?.dependents ? 'Oui' : 'Non'}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>

            {/* Coemprunteur */}
            <div>
              <label htmlFor="coemprunteur" className="block text-sm font-semibold text-gray-900">
                Coemprunteur
              </label>
              <input
                type="text"
                id="coemprunteur"
                value={loanDetails?.coapplicant_income}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>

            {/* Durée du prêt */}
            <div>
              <label htmlFor="dureePret" className="block text-sm font-semibold text-gray-900">
                Durée du prêt (en années)
              </label>
              <input
                type="number"
                id="dureePret"
                value={loanDetails?.loan_amount_term}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 mt-6">
            {/* Historique du crédit */}
            <div>
              <label htmlFor="historiqueCredit" className="block text-sm font-semibold text-gray-900">
                Historique du Crédit
              </label>
              <input
                type="text"
                id="historiqueCredit"
                value={loanDetails?.credit_history? "Bon" : "Mauvais" }
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>
            <div>
  <label htmlFor="historiqueCredit" className="block text-sm font-semibold text-gray-900">
    Le modèle a scoré que le crédit est :
  </label>
  <input
    type="text"
    id="historiqueCredit"
    value={loanDetails?.loan_status}
    readOnly
    className={`mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ${
      loanDetails?.loan_status === 'Rejected'
        ? 'ring-red-500 bg-red-100 text-red-600' // Rouge pour rejeté
        : loanDetails?.loan_status === 'accepted'
        ? 'ring-green-500 bg-green-100 text-green-600' // Vert pour accepté
        : 'ring-gray-300 bg-gray-100 text-gray-700' // Gris par défaut
    }`}
  />
</div>

          </div>

          <div className="mt-10 flex justify-between">
            {/* Bouton Retour */}
            <button
              type="button"
              onClick={handleBack}
              className="w-full sm:w-auto bg-gray-300 text-gray-900 font-semibold px-6 py-2.5 rounded-md shadow-sm hover:bg-gray-400"
            >
              Retour
            </button>

            {/* Bouton Confirmer */}
            <div className="flex gap-4">
      {/* Bouton Accepter (Vert) */}
      <button
        type="button"
        onClick={handleApprove}      
          className="w-full sm:w-auto bg-green-500 text-white font-semibold px-6 py-2.5 rounded-md shadow-sm hover:bg-green-600"
      >
        Accepter
      </button>

      {/* Bouton Rejeter (Rouge) */}
      <button
        type="button"
        onClick={handleReject} 
      //  onClick={handleReject} // Action pour rejeter
        className="w-full sm:w-auto bg-red-500 text-white font-semibold px-6 py-2.5 rounded-md shadow-sm hover:bg-red-600"
      >
        Rejeter
      </button>
    </div>

          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ScorerClient;
