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
                // Registration
                if (password !== confirmPassword) {
                    setError("Les mots de passe ne correspondent pas.");
                    return;
                }

                const response = await axios.post('http://127.0.0.1:8000/api/user/register/', {
                    nom, // Updated field name
                    prenom, // Updated field name
                    email,
                    telephone, // Updated field name
                    adresse, // Updated field name
                    password,
                });

                // Optionally, auto-login after registration
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                navigate('/');  // Redirect to dashboard after successful registration
            } else {
                // Login
                const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                    email,
                    password,
                });

                // Save tokens to local storage
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                navigate('/moncompte');  // Redirect to user account page after login
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

                {/* Form Content */}
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-14 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        {isRegistering ? 'Create an account' : 'Sign in to your account'}
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
                                    Email address
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
                                    Password
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
                                        Confirm Password
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
                                    {isRegistering ? 'Create account' : 'Sign in'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <button
                                onClick={() => setIsRegistering(!isRegistering)}
                                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                {isRegistering ? 'Already have an account? Sign in' : 'Not registered yet? Create an account'}
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
