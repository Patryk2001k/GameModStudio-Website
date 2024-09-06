import React, { useState, useEffect } from 'react';
import Garry3 from "../images/imageGallery/Garry3.jpg";
import Garry2 from "../images/imageGallery/Garry2.png";

function GarrysmodMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('serwery');

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key.toLowerCase() === 'q') {
                setMenuOpen(prevState => !prevState);
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'serwery':
                return (
                    <div className="grid grid-cols-6 gap-4 p-4 overflow-y-auto max-h-64">
                        <div className="text-center">
                            <a href="https://example.com/server1" target="_blank" rel="noopener noreferrer">
                                <img src={Garry2} alt="Server 1" className="w-full h-32 object-cover" />
                                <p className="mt-2 text-white">Server 1</p>
                            </a>
                        </div>
                        <div className="text-center">
                            <a href="https://example.com/server2" target="_blank" rel="noopener noreferrer">
                                <img src={Garry3} alt="Server 2" className="w-full h-32 object-cover" />
                                <p className="mt-2 text-white">Server 2</p>
                            </a>
                        </div>
                    </div>
                );
            case 'mody':
                return (
                    <div className="grid grid-cols-6 gap-4 p-4 overflow-y-auto max-h-64">
                        <div className="text-center">
                            <a href="https://example.com/mod1" target="_blank" rel="noopener noreferrer">
                                <img src={Garry3} alt="Mod 1" className="w-full h-32 object-cover" />
                                <p className="mt-2 text-white">Mod 1</p>
                            </a>
                        </div>
                        <div className="text-center">
                            <a href="https://example.com/mod2" target="_blank" rel="noopener noreferrer">
                                <img src={Garry3} alt="Mod 2" className="w-full h-32 object-cover" />
                                <p className="mt-2 text-white">Mod 2</p>
                            </a>
                        </div>
                    </div>
                );
            case 'info':
                return (
                    <div className="p-4 text-left text-white">
                        <p>
                            Tutaj znajdują się dodatkowe informacje. Możesz umieścić tutaj dowolny tekst opisujący
                            dodatkowe funkcje lub szczegóły dotyczące gry, serwerów lub modów.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="h-[80vh] w-full flex flex-col items-center justify-center">
            {menuOpen ? (
                <div className="w-full h-full bg-[#989ba0] bg-opacity-0 text-white flex flex-col items-start justify-start p-4">
                    {/* Zakładki z ikonami i efektami hover */}
                    <div className="flex space-x-4 mb-4">
                        <button
                            className={`flex items-center px-4 py-2 text-lg font-semibold border-b-2 ${
                                activeTab === 'serwery'
                                    ? 'border-white text-white'
                                    : 'border-transparent text-gray-200 hover:border-gray-400'
                            }`}
                            onClick={() => setActiveTab('serwery')}
                        >
                            <img src={Garry2} alt="Serwery Icon" className="w-6 h-6 mr-2" />
                            Serwery
                        </button>
                        <button
                            className={`flex items-center px-4 py-2 text-lg font-semibold border-b-2 ${
                                activeTab === 'mody'
                                    ? 'border-white text-white'
                                    : 'border-transparent text-gray-200 hover:border-gray-400'
                            }`}
                            onClick={() => setActiveTab('mody')}
                        >
                            <img src={Garry2} alt="Mody Icon" className="w-6 h-6 mr-2" />
                            Mody
                        </button>
                        <button
                            className={`flex items-center px-4 py-2 text-lg font-semibold border-b-2 ${
                                activeTab === 'info'
                                    ? 'border-white text-white'
                                    : 'border-transparent text-gray-200 hover:border-gray-400'
                            }`}
                            onClick={() => setActiveTab('info')}
                        >
                            <img src={Garry2} alt="Info Icon" className="w-6 h-6 mr-2" />
                            Dodatkowe informacje
                        </button>
                    </div>
                    {/* Sekcja zawartości */}
                    <div className="flex-1 w-full bg-gray-700 bg-opacity-50 overflow-hidden">
                        {renderContent()}
                    </div>
                </div>
            ) : (
                <div>
                    <p className="text-6xl font-bold text-[#198cff] mb-4">Press q once to open the menu</p>
                    <p className="text-2xl font-bold text-[#198cff] text-center">Keep your mouse cursor on me</p>
                </div>
            )}
        </div>
    );
}

export default GarrysmodMenu;
