import Arma1 from "../images/imageGallery/Arma3-1.jpg";

function Arma3Image() {
    return (
            <div className="relative w-1/2 h-full">
                <img
                    src={Arma1}
                    alt="empty"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
    );
}

export default Arma3Image