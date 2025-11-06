import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import SectionWrapper from './SectionWrapper';

// Import images from galeri folder
import imgForPicture1 from '../assets/galeri/img_forpicture1.jpg';
import imgForPicture2 from '../assets/galeri/img_forpicture2.jpg';
import happybhd1 from '../assets/galeri/happybhd1.png';
import happybhd2 from '../assets/galeri/happybhd2.png';

const images = [
  happybhd1,
  imgForPicture1,
  imgForPicture2,
  happybhd2,
];
function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);
  const [draggedImages, setDraggedImages] = useState(new Set());

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  const handleDragEnd = (index) => {
    setDraggedImages(prev => new Set([...prev, index]));
  };

  const allImagesLoaded = loadedImages === images.length;
  const allImagesDragged = draggedImages.size === images.length;
  return (
    <SectionWrapper>
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            allImagesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            zIndex: images.length - index,
          }}
          initial={{
            scale: 1,
            rotate: Math.random() * 20 - 10,
          }}
          whileDrag={{
            scale: 1.05,
            rotate: Math.random() * 20 - 10,
          }}
          drag
          onDragEnd={() => handleDragEnd(index)}
        >
          <img
            src={image}
            alt={`Stacked image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad} // Increment the counter when the image loads
          />
        </motion.div>
      ))}
      {allImagesDragged && (
        <Link to="/card" style={{ zIndex: 999 }} className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <motion.p
            initial={{ opacity: 0, scale: 0.5, rotate: -10, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: [0.5, 1.2, 1], 
              rotate: [10, -5, 0],
              y: 0 
            }}
            transition={{ 
              duration: 1, 
              delay: 0.2,
              ease: "easeOut",
              scale: {
                duration: 0.8,
                times: [0, 0.6, 1],
                ease: ["easeOut", "easeInOut", "easeOut"]
              }
            }}
            className="text-5xl font-extrabold drop-shadow-2xl text-center cursor-pointer pointer-events-auto px-4"
            style={{ 
              color: '#813925', 
              textShadow: '4px 4px 8px rgba(255,255,255,1), -3px -3px 6px rgba(255,255,255,1), 3px -3px 6px rgba(255,255,255,1), -3px 3px 6px rgba(255,255,255,1), 0 0 20px rgba(255,200,200,0.5)',
              fontWeight: 900,
              letterSpacing: '0.02em'
            }}
          >
            🎉 ciee ciee 18 tahun nii 🎂
          </motion.p>
        </Link>
      )}
    </SectionWrapper>
  );
}

export default Picture;
