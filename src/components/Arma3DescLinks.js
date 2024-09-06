
function Arma3DescLinks(){
    return (
        <div className="w-1/2 bg-gray-900 p-6 rounded-md ml-4">
            <h1 className="text-white text-2xl mb-4">Links:</h1>

            {/* Link do kanału YouTube */}
            <a
            href="https://www.youtube.com/channel/UCXXXXXX" // <- podmień na właściwy link
            className="inline-block w-full px-10 py-3 text-lg text-center font-semibold text-white bg-[#d18f21] border border-[#d18f21] rounded-none shadow-lg hover:bg-[#b17a17] focus:outline-none focus:ring-2 focus:ring-[#d18f21] transition"
            >
            Mój kanał YouTube
            </a>
        </div>
    )
}

export default Arma3DescLinks;