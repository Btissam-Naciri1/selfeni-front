import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import emailjs from 'emailjs-com';

export default function SimpleContactForm() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        };

        // Send the form data using EmailJS
        emailjs
            .send(
                'service_w25o0iw',    // Your EmailJS Service ID (Gmail in your case)
                'template_xokd1tb',    // Your EmailJS Template ID
                templateParams,        // Form data to send to the email template
                'DAh7nCXLpH2XimiV2'    // Your EmailJS User ID (Public Key)
            )
            .then(
                (response) => {
                    console.log('Email sent successfully:', response);
                    setIsSuccess(true);  // Set success state
                    setIsError(false);   // Reset error state
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });  // Clear form fields
                },
                (error) => {
                    console.error('Error sending email:', error);
                    setIsError(true);    // Set error state
                    setIsSuccess(false); // Reset success state
                }
            );
    };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
            style={{
                backgroundImage: "url('/images/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                imageRendering: "auto",
            }}
        >
            <Header
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            {/* Contact Form Section */}
            <div className="flex-grow flex items-center justify-center px-6 py-40 bg-transparent">
                <div className="bg-white p-10 rounded-xl shadow-lg max-w-xl w-full space-y-6">
                    <h2 className="text-3xl font-extrabold text-indigo-600 text-center sm:text-4xl">
                        L'ÉQUIPE EST À VOTRE DISPOSITION
                    </h2>
                    <p className="text-lg text-gray-700 text-center">
                        Vous pouvez nous contacter via ce formulaire de contact, ou directement par téléphone :
                        <strong className="block mt-2 text-indigo-600 text-lg">+212 6 65 55 55 55</strong>
                    </p>

                    {/* Success or Error Message */}
                    {isSuccess && (
                        <p className="text-green-500 text-center">Message envoyé avec succès!</p>
                    )}
                    {isError && (
                        <p className="text-red-500 text-center">Échec de l'envoi du message, veuillez réessayer.</p>
                    )}

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-lg border-gray-300 text-gray-800 shadow focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                                placeholder="Nom complet"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-lg border-gray-300 text-gray-800 shadow focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                                placeholder="Adresse e-mail"
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-lg border-gray-300 text-gray-800 shadow focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                                placeholder="Sujet"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                required
                                className="mt-1 block w-full rounded-lg border-gray-300 text-gray-800 shadow focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                                placeholder="Message"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-medium py-2.5 rounded-lg shadow hover:bg-indigo-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>

            <Footer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
    );
}
