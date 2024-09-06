

function Arma3DescMods({ modsList }) {
    return(
        <div className="w-1/2 bg-gray-900 p-6 rounded-md">
            <h2 className="text-center text-white text-2xl mb-4">Created Mods</h2>
            
            {/* Div z listą modów */}
            <div className="h-[65vh] overflow-y-scroll bg-gray-700 p-4 rounded-md">
            {modsList.map((mod, index) => (
                <div
                key={index}
                className="bg-gray-800 text-white p-2 mb-2 rounded hover:bg-gray-600"
                >
                {mod}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Arma3DescMods;