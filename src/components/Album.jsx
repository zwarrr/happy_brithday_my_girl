import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';

// Import photos from galeri folder
import img1 from '../assets/galeri/img_1.jpg';
import img2 from '../assets/galeri/img_2.jpg';
import img3 from '../assets/galeri/img_3.jpg';
import img4 from '../assets/galeri/img_4.jpg';
import img5 from '../assets/galeri/img_5.jpg';

const photos = [
  { id: 1, src: img1, caption: 'Memory 1' },
  { id: 2, src: img2, caption: 'Memory 2' },
  { id: 3, src: img3, caption: 'Memory 3' },
  { id: 4, src: img4, caption: 'Memory 4' },
  { id: 5, src: img5, caption: 'Memory 5' },
];

function Album() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const navigate = useNavigate();

  return (
    <SectionWrapper>
      <div className="w-full h-full flex flex-col items-center justify-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center drop-shadow-lg"
          style={{ color: '#813925' }}
        >
          Our Memories Together 💕
        </motion.h1>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-md w-full mb-8">
          {photos.slice(0, 4).map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-300" />
            </motion.div>
          ))}
          
          {/* 5th photo spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="col-span-2 relative aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedPhoto(photos[4])}
          >
            <img
              src={photos[4].src}
              alt={photos[4].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-300" />
          </motion.div>
        </div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => navigate('/present')}
          className="px-7 py-3 text-white font-medium text-base rounded-full hover:opacity-80 transition-all"
          style={{ backgroundColor: '#813925' }}
        >
          Back to Gifts
        </motion.button>

        {/* Photo Modal */}
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <p className="text-white text-center mt-4 text-lg font-medium">
                {selectedPhoto.caption}
              </p>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg hover:bg-gray-200"
                style={{ color: '#813925' }}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}

export default Album;
