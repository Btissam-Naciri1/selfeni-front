import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScorerClient = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [code, setCode] = useState('');
  const [genre, setGenre] = useState('');
  const [marie, setMarie] = useState('');
  const [dependants, setDependants] = useState('');
  const [education, setEducation] = useState('');
  const [travailleurIndependant, setTravailleurIndependant] = useState('');
  const [revenuDemandeur, setRevenuDemandeur] = useState('');
  const [coapplicantIncome, setCoapplicantIncome] = useState('');
  const [dureePret, setDureePret] = useState('');
  const [montantPret, setMontantPret] = useState('');
  const [historiqueCredit, setHistoriqueCredit] = useState('');

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Dashboard');
  };

  const handleSubmit = () => {
    console.log({
      nom,
      prenom,
      code,
      genre,
      marie,
      dependants,
      education,
      travailleurIndependant,
      revenuDemandeur,
      coapplicantIncome,
      dureePret,
      montantPret,
      historiqueCredit,
    });

    navigate('/ResultatScoring');
  };

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <h1 className="text-center tracking-tight text-gray-600 sm:text-2xl">
        Appliquer le score sur le client 
      </h1>

      <form className="mx-auto mt-16 max-w-4xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block text-sm font-semibold text-gray-900">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              placeholder="Entrez votre nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
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
              placeholder="Entrez votre prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
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
              placeholder="Ex : C12345"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Genre */}
          <div>
            <label htmlFor="genre" className="block text-sm font-semibold text-gray-900">
              Genre
            </label>
            <select
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            >
              <option value="">Sélectionnez</option>
              <option value="Femme">Femme</option>
              <option value="Homme">Homme</option>
            </select>
          </div>

          {/* Marié */}
          <div>
            <label htmlFor="marie" className="block text-sm font-semibold text-gray-900">
              Marié
            </label>
            <select
              id="marie"
              value={marie}
              onChange={(e) => setMarie(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            >
              <option value="">Sélectionnez</option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>

          {/* Dépendants */}
          <div>
            <label htmlFor="dependants" className="block text-sm font-semibold text-gray-900">
              Dépendants
            </label>
            <input
              type="number"
              id="dependants"
              placeholder="0"
              value={dependants}
              onChange={(e) => setDependants(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Éducation */}
          <div>
            <label htmlFor="education" className="block text-sm font-semibold text-gray-900">
              Éducation
            </label>
            <select
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            >
              <option value="">Sélectionnez</option>
              <option value="Diplômé">Diplômé</option>
              <option value="Non diplômé">Non diplômé</option>
            </select>
          </div>

          {/* Travailleur Indépendant */}
          <div>
            <label htmlFor="travailleurIndependant" className="block text-sm font-semibold text-gray-900">
              Travailleur Indépendant
            </label>
            <select
              id="travailleurIndependant"
              value={travailleurIndependant}
              onChange={(e) => setTravailleurIndependant(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            >
              <option value="">Sélectionnez</option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>

          {/* Revenu du demandeur */}
          <div>
            <label htmlFor="revenuDemandeur" className="block text-sm font-semibold text-gray-900">
              Revenu du demandeur (MAD)
            </label>
            <input
              type="number"
              id="revenuDemandeur"
              placeholder="Ex : 5849"
              value={revenuDemandeur}
              onChange={(e) => setRevenuDemandeur(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Coapplicant Income */}
          <div>
            <label htmlFor="coapplicantIncome" className="block text-sm font-semibold text-gray-900">
              Revenu co-emprunteur (MAD)
            </label>
            <input
              type="number"
              id="coapplicantIncome"
              placeholder="Ex : 4500"
              value={coapplicantIncome}
              onChange={(e) => setCoapplicantIncome(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Durée du prêt */}
          <div>
            <label htmlFor="dureePret" className="block text-sm font-semibold text-gray-900">
              Durée du prêt (mois)
            </label>
            <input
              type="number"
              id="dureePret"
              placeholder="Ex : 360"
              value={dureePret}
              onChange={(e) => setDureePret(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Montant du prêt */}
          <div>
            <label htmlFor="montantPret" className="block text-sm font-semibold text-gray-900">
              Montant du prêt (MAD)
            </label>
            <input
              type="number"
              id="montantPret"
              placeholder="Ex : 200000"
              value={montantPret}
              onChange={(e) => setMontantPret(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Historique de crédit */}
          <div>
            <label htmlFor="historiqueCredit" className="block text-sm font-semibold text-gray-900">
              Historique de crédit
            </label>
            <select
              id="historiqueCredit"
              value={historiqueCredit}
              onChange={(e) => setHistoriqueCredit(e.target.value)}
              className="mt-2.5 block w-full rounded-md px-3.5 py-2 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            >
              <option value="">Sélectionnez</option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>
        </div>

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
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-indigo-600 text-white font-semibold px-6 py-2.5 rounded-md shadow-sm hover:bg-indigo-500"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScorerClient;
