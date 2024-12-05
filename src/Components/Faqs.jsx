import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

const faqs = [
    {
        id: 2,
        question: "Comment utiliser Selfeni ?",
        answer: "Selfeni est conçu pour être facile à utiliser. Créez simplement un compte, renseignez vos informations, et suivez les instructions à l'écran pour gérer votre crédit.",
    },
    {
        id: 3,
        question: "Mes données sont-elles sécurisées ?",
        answer: "Absolument ! Nous accordons une grande importance à votre sécurité et utilisons un chiffrement avancé pour garantir que vos données sont en sécurité chez nous.",
    },
    {
        id: 4,
        question: "Puis-je contacter le support ?",
        answer: "Oui, notre équipe de support est disponible 24h/24 et 7j/7. Utilisez la section 'Contactez-nous' pour nous contacter par email ou chat.",
    },
    {
        id: 5,
        question: "Qu'est-ce que Selfeni ?",
        answer: "Selfeni est une application intelligente et rapide de gestion de crédit qui analyse vos données pour évaluer votre éligibilité et vous guide de manière transparente tout au long de vos démarches.",
    },
    {
        id: 6,
        question: "Comment Selfeni évalue-t-il mon éligibilité au crédit ?",
        answer: "Selfeni utilise des algorithmes avancés pour analyser vos données financières et fournir une évaluation détaillée de votre éligibilité au crédit en quelques minutes.",
    },
    {
        id: 7,
        question: "Selfeni est-il sécurisé ?",
        answer: "Oui ! Selfeni utilise des technologies de chiffrement et des mesures de sécurité de pointe pour garantir que vos données personnelles et financières sont entièrement protégées.",
    },
    {
        id: 8,
        question: "Puis-je accéder à Selfeni depuis n'importe où ?",
        answer: "Oui, Selfeni est disponible 24h/24 et 7j/7 sur tout appareil connecté à Internet. Vous pouvez l'utiliser confortablement chez vous ou en déplacement.",
    },
    {
        id: 9,
        question: "Comment commencer avec Selfeni ?",
        answer: "Commencer avec Selfeni est simple : téléchargez l'application ou visitez notre site Web, créez votre compte, renseignez vos informations, et laissez Selfeni s'occuper du reste.",
    },
];

export default function FAQPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">

            <Header
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            {/* FAQ Section */}
            <div className="relative isolate px-6 py-16 sm:py-24 lg:px-8 mt-20"> {/* Added mt-20 for spacing */}
                {/* Background Blur Effect */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform overflow-hidden blur-2xl sm:top-[calc(100%-40rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-indigo-500 opacity-50 sm:w-[70rem]"
                    />
                </div>

                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Questions fréquentes
                    </h2>
                    <p className="mt-4 text-lg leading-7 text-gray-600">
                        Vous avez une question différente et ne trouvez pas la réponse que vous cherchez ? Contactez notre équipe d'assistance en{' '}
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            nous envoyant un email
                        </a>{' '}
                        et nous vous répondrons dans les plus brefs délais.
                    </p>
                </div>
                <div className="mt-16">
                    <dl className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-10">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="bg-gray-50 p-6 rounded-lg shadow">
                                <dt className="text-lg font-semibold text-indigo-600">{faq.question}</dt>
                                <dd className="mt-2 text-base text-gray-600">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Footer Section */}
            <Footer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
    );
}
