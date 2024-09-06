import { useRef } from "react";
import Menu from "./components/Menu";
import ImageCarousel from "./components/ImageGallery";
import Home from "./components/Home";
import Arma3Text from "./components/Arma3Text";
import Arma3Image from "./components/Arma3Image";
import Arma3DescLinks from "./components/Arma3DescLinks";
import Arma3DescMods from "./components/Arma3DescMods";
import GarrysmodLeftImage from "./components/GarrysmodLeftImage";
import GarrysmodRightText from "./components/GarrysmodRightText";
import GarrysmodMenu from "./components/GarrysmodMenu";
import Contact from "./components/Contact";
import Garry1 from "./images/imageGallery/Garry1.jpg";
import Garry2 from "./images/imageGallery/Garry2.png";
import Garry3 from "./images/imageGallery/Garry3.jpg";
import Arma1 from "./images/imageGallery/Arma3-1.jpg";
import Arma2 from "./images/imageGallery/Arma3-2.jpg";
import Arma3 from "./images/imageGallery/Arma3-3.jpg";


function App() {
    const modsList = [
      "Black mesa music mod",
      "Gman standalone",

    ];

    const contactRef = useRef(null);
    const homeRef = useRef(null);
    const arma3Ref = useRef(null);
    const garrysmodRef = useRef(null);

    const refs = {
      homeRef,
      arma3Ref,
      garrysmodRef,
      contactRef
    };

    const IMAGES = [Garry1, Arma1, Garry2, Arma2, Garry3, Arma3]
    return( 
      <div className="w-full h-full overflow-hidden">
        <Menu refs={refs} />
        <ImageCarousel imageUrls={IMAGES} />

        <div className="h-[80vh] w-full flex items-center justify-center bg-gradient-to-b from-gray-600 via-[#198cff] to-black" ref={homeRef}>
          <Home />
        </div>
        
        <div className="h-[80vh] w-full flex items-center justify-between bg-black text-white" ref={arma3Ref}>
          <Arma3Text contactRef={contactRef} />
          <Arma3Image />
        </div>

        <div className="flex h-[80vh] p-4 bg-gradient-to-b from-black via-black to-[#198cff]">
            <Arma3DescMods modsList={modsList} />
            <Arma3DescLinks />
        </div>

        <div className="h-[80vh] w-full flex items-center justify-between bg-[#198cff] text-white" ref={garrysmodRef}>
            <GarrysmodLeftImage />
            <GarrysmodRightText contactRef={contactRef} />
        </div>


        <div className="h-[80vh] bg-[#198cff] w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#198cff] via-white to-white">
          <GarrysmodMenu />
        </div>

        <div className="h-[80vh] w-full flex flex-col items-center justify-center bg-white" ref={contactRef}>
          <Contact />
        </div>

      </div>

    )
}

export default App;
