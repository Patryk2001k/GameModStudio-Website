import useScrollToSection from '../hooks/UseScrollTo';


function GarrysmodRightText({ contactRef }) {
    const scrollToSection = useScrollToSection();
    const handleScroll = (e) => {
        e.preventDefault();
        scrollToSection(contactRef); 
    };
    return(
        <div className="flex flex-col items-center justify-center w-1/2 p-4">
            <h1 className="text-3xl font-bold">Garry's Mod</h1><br />
            <p className="text-lg mx-10">
            Garry's Mod to nieograniczone możliwości kreacji i zabawy. Nasze dodatki i modyfikacje
            dostarczą ci narzędzi do jeszcze bardziej wciągającej rozgrywki. Zobacz, co przygotowaliśmy
            dla społeczności i odkryj nowe sposoby na eksperymentowanie i tworzenie!
            </p><br />
            <button
    className="inline-block px-6 py-3 text-lg font-semibold text-[#198cff] bg-white border border-white rounded-lg shadow-lg hover:bg-[#0f6db5] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#198cff] transition-all duration-300 ease-in-out"
    onClick={handleScroll}
>
    Dowiedz się więcej
</button>
        </div>
    )
}

export default GarrysmodRightText