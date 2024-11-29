import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 2,
        question: "How do I use Selfeni?",
        answer: "Selfeni is designed to be user-friendly. Simply create an account, fill in your details, and follow the on-screen prompts to manage your credit.",
    },
    {
        id: 3,
        question: "Is my data secure?",
        answer: "Absolutely! We prioritize your security and use advanced encryption to ensure your data is safe with us.",
    },
    {
        id: 4,
        question: "Can I contact support?",
        answer: "Yes, our support team is available 24/7. Use the 'Contact Us' section to reach out via email or chat.",
    },
];

export default function FAQPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
            {/* Sticky Header */}
            <header className="sticky top-0 z-10 bg-white shadow-md">
                <Header
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
            </header>

            {/* FAQ Section */}
            <div className="relative isolate px-6  py-16 sm:py-24 lg:px-8">
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
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg leading-7 text-gray-600">
                        Have a different question and can’t find the answer you’re looking for? Reach out to our support
                        team by{' '}
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            sending us an email
                        </a>{' '}
                        and we’ll get back to you as soon as we can.
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
