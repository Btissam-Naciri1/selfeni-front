import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove authentication tokens from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        // Call the passed onLogout function, if provided
        if (onLogout) {
            onLogout();
        }

        // Redirect to login page after logout
        navigate('/login');
    };

    return (
        <button
            onClick={handleLogout}
            className="flex items-center text-sm font-semibold text-gray-800 hover:text-indigo-600 transition"
        >
            <i className="fas fa-sign-out-alt h-5 w-5 mr-2" />
            Déconnexion
        </button>
    );
};

export default Logout;
