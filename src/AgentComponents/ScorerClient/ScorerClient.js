import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Correctly imported useParams
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer'; // Assurez-vous que le chemin est correct
import axios from 'axios';

const ScorerClient = () => {
  const navigate = useNavigate();
  let { loan_id } = useParams();  // Get the loan_id from the URL params
  const [loan, setLoan] = useState(null);
  const [creditDetails, setCreditDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("useParams:", useParams());
  console.log("loan_id:", loan_id);

  const handleBack = () => {
    navigate('/Dashboard');
  };

  const handleConfirm = () => {
    alert("Informations confirmées !");
    // Ajoutez ici toute logique supplémentaire pour le bouton "Confirmer"
  };

  useEffect(() => {
    const fetchCreditDetails = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(
          `http://127.0.0.1:8000/ml_integration/predict-loan-status/${loan_id}`,{
          headers: { Authorization: `Bearer ${token}` },
        }
      );
        setLoan(response.data);
        console.log(response.data);
      } catch (err) {
        console.error('Error fetching credit details:', err);
        setError('Failed to load credit details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCreditDetails();
  }, [loan_id]); // Fetch data whenever loan_id changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <Navbar />
      {/* Background avec un design moderne */}
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-center tracking-tight text-gray-700 font-bold text-3xl sm:text-4xl mb-8">
          Détails du Client
        </h1>

        <form className="mx-auto mt-16 max-w-4xl">
          {/*<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
            {/* Nom 
            <div>
              <label htmlFor="nom" className="block text-sm font-semibold text-gray-900">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                value={creditDetails.user_id || ''}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>
              */}
            {/* Prénom 
            <div>
              <label htmlFor="prenom" className="block text-sm font-semibold text-gray-900">
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                value={creditDetails.user_id || ''}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>
          </div>
*/}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 mt-6">
            {/* Genre */}
            <div>
              <label htmlFor="genre" className="block text-sm font-semibold text-gray-900">
                Genre
              </label>
              <input
                type="text"
                id="genre"
                value={creditDetails.gender || ''}
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
                value={creditDetails.married ? 'Oui' : 'Non'}
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
                value={creditDetails.dependants || 0}
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
                value={creditDetails.education || ''}
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
                value={creditDetails.applicant_income || 0}
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
                value={creditDetails.loan_amount || 0}
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
                value={creditDetails.self_employed ? 'Oui' : 'Non'}
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
                value={creditDetails.coapplicant_income || 'Non'}
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
                value={creditDetails.loan_amount_term || 0}
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
                value={creditDetails.credit_history || 'Inconnu'}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
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
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full sm:w-auto bg-indigo-500 text-white font-semibold px-6 py-2.5 rounded-md shadow-sm hover:bg-indigo-600"
            >
              Scorer
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ScorerClient;
