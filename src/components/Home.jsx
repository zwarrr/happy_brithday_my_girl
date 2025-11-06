import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import sayHelloImg from '../assets/say_hello.png'
import audioSrc from '../assets/mp3/smpaijadidebu.mp3'
import { getGlobalAudio, setGlobalAudio } from '../utils/globalAudio'

function Home() {
    const [visibleCount, setVisibleCount] = useState(1)
    const navigate = useNavigate()
    
    useEffect(() => {
      // Create audio only once
      let audio = getGlobalAudio()
      if (!audio) {
        audio = new Audio(audioSrc)
        audio.loop = true
        audio.volume = 0.5
        setGlobalAudio(audio)
      }
    }, [])
    
    const sentences = [
    "ALLOOO ADEE CAYAA CANTIKK",
    "I have something to show you!!!"
  ]

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const textVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  }

  const clickHereVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2, ease: "easeInOut" }
    }
  }

  const handleClick = () => {
    // Play music on click
    const audio = getGlobalAudio()
    if (audio) {
      audio.play().catch(e => console.log("Play error:", e))
    }
    
    if (visibleCount < sentences.length) {
      setVisibleCount(visibleCount + 1)
    } else {
      navigate('/pictures')
    }
  }
  return (
    <div 
      className="flex flex-col min-h-screen cursor-pointer w-full items-center justify-center overflow-clip relative" 
      onClick={handleClick}
    >
      <div className="flex flex-col items-center justify-center w-full px-4 pb-80">
        <div className="w-[90%] max-w-[400px]">
          {sentences.slice(0, visibleCount).map((sentence, index) => (
            <motion.p
              key={index}
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.5 }}
              className="text-4xl font-bold drop-shadow-lg mb-4 text-center leading-tight"
              style={{ color: '#813925' }}
            >
              {sentence}
            </motion.p>
          ))}
          
          {visibleCount === 1 && (
            <motion.p
              variants={clickHereVariants}
              initial="initial"
              animate="animate"
              className="text-lg font-semibold drop-shadow-lg text-center mt-6"
              style={{ color: '#813925' }}
            >
              click here
            </motion.p>
          )}
        </div>
      </div>

      {/* Character Image - Fixed at Bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center"
      >
        <motion.img 
          src={sayHelloImg}
          alt="Say Hello Character"
          className="w-72 h-auto drop-shadow-lg object-contain"
          variants={floatingVariants}
          animate="animate"
        />
      </motion.div>
    </div>
  )
}

export default Home