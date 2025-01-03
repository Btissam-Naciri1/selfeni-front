import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nom, setNom] = useState(''); // Updated field name
    const [prenom, setPrenom] = useState(''); // Updated field name
    const [telephone, setTelephone] = useState(''); // Updated field name
    const [adresse, setAdresse] = useState(''); // Updated field name
    const [error, setError] = useState('');
    const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and registration
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous error

        try {
            if (isRegistering) {
                // Inscription
                if (password !== confirmPassword) {
                    setError("Les mots de passe ne correspondent pas.");
                    return;
                }

                const response = await axios.post('http://54.86.182.184/api/user/register/', {
                    nom,
                    prenom,
                    email,
                    telephone,
                    adresse,
                    password,
                });

                // Optionnellement, auto-login après l'inscription
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                navigate('/');  // Redirige vers la page d'accueil après une inscription réussie
            } else {
                // Connexion
                const response = await axios.post('http://54.86.182.184/api/login/', {
                    email,
                    password,
                });
            
                // Sauvegarde des tokens dans le local storage
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
            
                // Extract the user role from the response
                const userRole = response.data.user.role;
            
                // Navigate based on the user's role
                if (userRole === 'client') {
                    navigate('/formulaire');  // Redirect to client form page
                } else if (userRole === 'admin') {
                    navigate('/Dashboard');  // Redirect to admin dashboard
                } else {
                    console.error('Unknown user role:', userRole);
                }
            }
            
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.detail || 'Échec de l\'action. Essayez à nouveau.');
            } else {
                setError('Une erreur inattendue est survenue.');
            }
        }
    };

    return (
        <>
            <header className="sticky top-0 z-10 bg-white shadow-md">
                <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            </header>
            <div className="relative flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div aria-hidden="true" className="absolute inset-0 -z-10 transform overflow-hidden blur-2xl">
                    <div
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-1/2 transform -translate-x-1/2 aspect-[1155/678] w-[40rem] sm:w-[70rem] bg-gradient-to-tr from-blue-300 to-indigo-500 opacity-50"
                    />
                </div>

                {/* Contenu du formulaire */}
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Votre entreprise"
                    />
                    <h2 className="mt-14 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        {isRegistering ? 'Créer un compte' : 'Se connecter à votre compte'}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                            {isRegistering && (
                                <>
                                    <div className="flex space-x-4">
                                        <div className="w-full">
                                            <label htmlFor="nom" className="block text-sm font-medium leading-6 text-gray-900">
                                                Nom
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="nom"
                                                    name="nom"
                                                    type="text"
                                                    value={nom}
                                                    onChange={(e) => setNom(e.target.value)}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <label htmlFor="prenom" className="block text-sm font-medium leading-6 text-gray-900">
                                                Prénom
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="prenom"
                                                    name="prenom"
                                                    type="text"
                                                    value={prenom}
                                                    onChange={(e) => setPrenom(e.target.value)}
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="telephone" className="block text-sm font-medium leading-6 text-gray-900">
                                            Téléphone
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="telephone"
                                                name="telephone"
                                                type="text"
                                                value={telephone}
                                                onChange={(e) => setTelephone(e.target.value)}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="adresse" className="block text-sm font-medium leading-6 text-gray-900">
                                            Adresse
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="adresse"
                                                name="adresse"
                                                type="text"
                                                value={adresse}
                                                onChange={(e) => setAdresse(e.target.value)}
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Adresse e-mail
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mot de passe
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {isRegistering && (
                                <div>
                                    <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirmer mot de passe
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="confirm-password"
                                            name="confirm-password"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {isRegistering ? 'Créer un compte' : 'Se connecter'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <button
                                onClick={() => setIsRegistering(!isRegistering)}
                                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                {isRegistering ? 'Déjà un compte ? Se connecter' : 'Pas encore inscrit ? Créer un compte'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </>
    );
};

export default Login;
