import useScrollToSection from '../hooks/UseScrollTo';

function Arma3Text({ contactRef }) {
    const scrollToSection = useScrollToSection();
    const handleScroll = (e) => {
        e.preventDefault();
        scrollToSection(contactRef); 
    };

    return (
        <div className="flex flex-col items-center justify-center w-1/2 p-4">
            <h1 className="text-3xl font-bold">Arma 3</h1><br />
            <p className="text-lg mx-10">
                Zobacz, jak nasze modyfikacje mogą wzbogacić Twoje doświadczenia w grze! Przewiń w dół, aby odkryć unikalne dodatki, które stworzyliśmy, aby uczynić rozgrywkę jeszcze bardziej emocjonującą. Nasze innowacyjne projekty są wynikiem pasji i zaangażowania naszego zespołu, który nieustannie dąży do doskonałości. Przygotowaliśmy różnorodne mody, które wprowadzą nowe wyzwania, funkcje i estetykę do Twojej gry. Nie przegap okazji, aby zobaczyć, jak nasze prace mogą odmienić Twoje doświadczenie i sprawić, że każda sesja gry będzie jeszcze bardziej satysfakcjonująca!
            </p><br />
            <button
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#d18f21] border border-[#d18f21] rounded-none shadow-lg hover:bg-[#b17a17] focus:outline-none focus:ring-2 focus:ring-[#d18f21] transition"
                onClick={handleScroll}
            >
                Dowiedz się więcej
            </button>
        </div>
    );
}

export default Arma3Text;
