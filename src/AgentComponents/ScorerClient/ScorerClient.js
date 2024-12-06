import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer'; // Assurez-vous que le chemin est correct

const ScorerClient = () => {
  const navigate = useNavigate();

  // Données statiques pour tester avec nouveaux champs
  const [client, setClient] = useState({
    nom: "Dupont",
    prenom: "Jean",
    code: "CL12345",
    genre: "Masculin",
    marie: true,
    dependants: 2,
    education: "Master",
    revenuDemandeur: 45000,
    montantPret: 200000,
    travailleurIndependant: true, // Nouveau champ
    coemprunteur: 'Oui', // Nouveau champ
    dureePret: 20, // Nouveau champ
    historiqueCredit: 'Bon', // Nouveau champ
  });

  const handleBack = () => {
    navigate('/Dashboard');
  };

  const handleConfirm = () => {
    alert("Informations confirmées !");
    // Ajoutez ici toute logique supplémentaire pour le bouton "Confirmer"
  };

  return (
    <div>
      <Navbar/>
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
                value={client.nom || ''}
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
                value={client.prenom || ''}
                readOnly
                className="mt-2.5 block w-full rounded-md px-3.5 py-2 bg-gray-100 shadow-sm ring-1 ring-gray-300"
              />
            </div>

            {/* Code */}
            <div>
              <label htmlFor="code" className="block text-sm font-semibold text-gray-900">
                Code
              </label>
              <input
                type="text"
                id="code"
                value={client.code || ''}
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
                value={client.genre || ''}
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
                value={client.marie ? 'Oui' : 'Non'}
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
                value={client.dependants || 0}
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
                value={client.education || ''}
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
                value={client.revenuDemandeur || 0}
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
                value={client.montantPret || 0}
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
                value={client.travailleurIndependant ? 'Oui' : 'Non'}
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
                value={client.coemprunteur || 'Non'}
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
                value={client.dureePret || 0}
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
                value={client.historiqueCredit || 'Inconnu'}
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
