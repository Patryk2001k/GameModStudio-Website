import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showNextImage, setShowNextImage] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setShowNextImage(true);
      setTimeout(() => {
        setImageIndex(index => (index === imageUrls.length - 1 ? 0 : index + 1));
        setAnimate(false);
      }, 2000); 
    }, 5000); 

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <div className="flex justify-center items-center h-screen w-screen overflow-x-hidden">
  <div className="relative w-full h-full">
    <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

    <img
      src={imageUrls[imageIndex]}
      alt="carousel"
      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg z-0"
    />

    {showNextImage && (
      <img
        src={imageUrls[(imageIndex + 1) % imageUrls.length]}
        alt="carousel-next"
        className={`absolute top-0 left-full w-full h-full object-cover rounded-lg transition-transform duration-1000 z-0 ${animate ? 'transform -translate-x-full opacity-100' : 'opacity-0'}`}
      />
    )}
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-white text-7xl font-bold mb-2">Welcome to GameMod Studio</h1>
        <p className="text-white text-2xl">Check out our mods and servers for Arma 3 & Garry's Mod!</p>
      </div>
</div>



  );
};

export default ImageCarousel;
