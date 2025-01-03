import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const refreshToken = localStorage.getItem('refresh_token');
            const accessToken = localStorage.getItem('access_token'); // Fetch the access token
    
            if (!refreshToken || !accessToken) {
                throw new Error('No tokens found. Please log in again.');
            }
    
            // Send the logout request with Authorization header
            await axios.post(
                'http://54.86.182.184/api/logout/',
                { refresh_token: refreshToken },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`, // Add the Authorization header
                    },
                }
            );
    
            // Remove tokens from localStorage after successful logout
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
    
            if (onLogout) {
                onLogout(); // Call the onLogout prop if provided
            }
    
            // Redirect to the login page
            navigate('/login');
        } catch (error) {
            console.error('Error during logout:', error);
        }
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
