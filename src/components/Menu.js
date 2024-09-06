import React from 'react';
import Logo from "../images/websiteImages/Logo.png";
import useScrollToSection from '../hooks/UseScrollTo';

function Menu({ refs }) {
    const scrollToSection = useScrollToSection();

    const handleScroll = (section) => (e) => {
        e.preventDefault();
        scrollToSection(refs[section]);
    };

    return (
        <nav className="bg-white shadow fixed top-0 left-0 w-full z-20">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img src={Logo} alt="logo" className="absolute h-full top-0" />
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            aria-haspopup="true"
                            onClick={handleScroll('homeRef')}
                        >
                            Home
                        </button>
                        <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            aria-haspopup="true"
                            onClick={handleScroll('arma3Ref')}
                        >
                            Arma 3
                        </button>
                        <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            aria-haspopup="true"
                            onClick={handleScroll('garrysmodRef')}
                        >
                            Garrysmod
                        </button>
                        <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            aria-haspopup="true"
                            onClick={handleScroll('contactRef')}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
