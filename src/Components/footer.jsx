const navigation = {
    planDuSite: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQs', href: '/faqs' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'X',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.324-3.369-1.324-.454-.772-1.107-.98-1.107-.98-.91-.626.069-.615.069-.615 1.003.071 1.525 1.021 1.525 1.021.888 1.51 2.333 1.074 2.897.825.092-.648.349-1.075.635-1.318-2.217-.252-4.547-1.09-4.547-4.845 0-1.17.418-2.128 1.103-2.88-.111-.278-.477-1.402.107-2.92 0 0 .902-.289 2.94 1.14 1.594-.444 3.295-.441 4.88 0 2.039-1.429 2.94-1.14 2.94-1.14.585 1.518.219 2.642.107 2.92.685.752 1.103 1.71 1.103 2.88 0 4.112-2.478 5.008-4.853 5.29.467.4.89.982.89 1.974 0 1.424-.013 2.555-.013 2.897 0 .267.182.577.686.481 3.975-1.324 6.839-5.08 6.839-9.504C22 6.484 17.523 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
};
export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#2d3748] to-[#1a202c] py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Top Section: Logo and Plan du Site */}
                <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0">
                    {/* Logo and Description */}
                    <div className="flex flex-col items-start space-y-4 md:w-2/3">
                        <a href="#" className="flex items-center gap-2">
                            <img
                                                             alt="Selfeni Logo"
                                                             src="/images/Selefni.png"
                                                          className="h-28 w-25 "
                                                     />
                            <span className="text-lg font-semibold text-indigo-600">Selfeni</span>
                        </a>
                        <p className="text-sm text-gray-400 max-w-md">
                            Avec Selfeni, découvrez une gestion de crédit rapide et intelligente. Notre application
                            analyse
                            vos données pour évaluer votre éligibilité et vous accompagner dans vos démarches en toute
                            transparence
                        </p>
                    </div>

                    {/* Plan du Site */}
                    <div className=" md:w-1/4 ml-auto">
                        <h2 className="text-xl font-bold text-white mb-4">Plan du site</h2>
                        <ul className="space-y-1">
                            {navigation.planDuSite.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-lg text-gray-400 hover:text-white transition-all"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Social Links and Copyright */}
                <div className="mt-16 border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                        {/* Social Media Links */}
                        <div className="flex space-x-8">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-500 hover:text-white transition-all"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                        {/* Copyright */}
                        <p className="text-sm text-gray-400">
                            &copy; 2024 Selfeni, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}







