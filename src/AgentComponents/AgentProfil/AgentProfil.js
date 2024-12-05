import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';

export default function AgentProfil() {
  const navigate = useNavigate();
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const handleBack = () => {
    navigate('/Dashboard');
  };

  const openModal = () => {
    setShowChangePasswordModal(true);
  };

  const closeModal = () => {
    setShowChangePasswordModal(false);
  };

  const handleSubmitNewPassword = (e) => {
    e.preventDefault();
    console.log('Mot de passe changé');
    closeModal();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 flex-1">
        {/* Arrière-plan principal */}
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

        <div className="p-6">
          {/* Header */}
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-semibold text-gray-900">Informations de l'agent</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Détails personnels.</p>
          </div>

          {/* Content */}
          <div className="mt-6 border-t border-gray-200">
            <dl className="divide-y divide-gray-200">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium text-gray-900">Nom</dt>
                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium text-gray-900">Prénom</dt>
                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium text-gray-900">Fonction</dt>
                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">Agent</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium text-gray-900">Adresse Email</dt>
                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium text-gray-900">Mot de passe</dt>
                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0 flex items-center gap-4">
                  ***************
                  <button
                    type="button"
                    onClick={openModal}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Changer
                  </button>
                </dd>
              </div>
            </dl>
          </div>

          {/* Bouton retour */}
          <div className="mt-10 flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="w-full sm:w-auto bg-gray-300 text-gray-900 font-semibold px-6 py-2.5 rounded-md shadow-sm hover:bg-gray-400"
            >
              Retour
            </button>
          </div>

          {/* Modal */}
          {showChangePasswordModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="relative bg-white rounded-lg shadow-lg w-[600px] p-8">
                {/* Arrière-plan du modal */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-[-8rem] -z-10 transform-gpu overflow-hidden blur-3xl"
                >
                  <div
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[30rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                  />
                </div>

                <h2 className="text-lg font-semibold text-gray-900">Changer le mot de passe</h2>
                <form onSubmit={handleSubmitNewPassword} className="mt-4">
                  <div className="mb-4">
                    <label htmlFor="old-password" className="block text-sm font-medium text-gray-700">
                      Ancien mot de passe
                    </label>
                    <input
                      type="password"
                      id="old-password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                      Nouveau mot de passe
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                      Confirmer le mot de passe
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 bg-gray-300 text-gray-900 rounded-md shadow-sm hover:bg-gray-400"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-500"
                    >
                      Confirmer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
