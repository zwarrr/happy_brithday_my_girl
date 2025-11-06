import { useEffect, useState, useRef } from "react";
import "../assets/css/cake.css";
import { CakeSVG, confetti } from "../assets";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import birthdayMusic from "../assets/mp3/soundhbd_trompet.mp3";
import { stopGlobalAudio } from "../utils/globalAudio";

function Cake() {
  const [candlesBlownOut, setCandlesBlownOut] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Stop background music from Home immediately
    stopGlobalAudio()

    // Play music on first user interaction
    const playMusicOnInteraction = async () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      }
    };

    // Add event listener for user interaction
    const handleClick = () => playMusicOnInteraction();
    const handleTouch = () => playMusicOnInteraction();

    document.addEventListener('click', handleClick, { once: true });
    document.addEventListener('touchstart', handleTouch, { once: true });

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleTouch);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleCakeClick = () => {
    // Only allow blowing candles after music completes 1 loop
    if (canProceed) {
      setCandlesBlownOut(!candlesBlownOut);
    }
  };

  const handleMusicEnd = () => {
    // After first loop completes, allow user to proceed
    setCanProceed(true);
    
    // Loop the music infinitely
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error("Error replaying audio:", error);
      });
    }
  };

  const handleNavigateToPresent = () => {
    if (canProceed) {
      navigate('/present');
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={birthdayMusic} 
        onEnded={handleMusicEnd}
        className="hidden"
      />
      <div 
        className="bg-black/80 h-screen w-screen flex items-center justify-center overflow-hidden relative cursor-pointer"
        onClick={handleCakeClick}
      >
        {candlesBlownOut && (
          <div
            className="absolute inset-0 bg-cover bg-center z-50"
            style={{
              backgroundImage: `url(${confetti})`,
            }}
          />
        )}
        {candlesBlownOut && (
          <motion.div
            className="absolute top-20 text-white text-3xl font-bold z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <svg width="800" height="200" viewBox="0 0 400 200">
              <defs>
                <path
                  id="curve"
                  d="M50,150 Q200,50 350,150"
                  fill="transparent"
                  stroke="white"
                />
              </defs>
              <text fontSize="40" fill="white" textAnchor="middle">
                <textPath href="#curve" startOffset="50%">
                  Happy Birthday!
                </textPath>
              </text>
            </svg>
            {canProceed && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigateToPresent();
                }}
                className="absolute top-[30rem] xs:top-[36rem] s:top-[40rem] left-1/2 transform -translate-x-1/2 px-7 py-3 text-white rounded-full font-medium text-base text-center transition-all hover:opacity-80"
                style={{ backgroundColor: '#813925' }}
              >
                Next Page
              </button>
            )}
          </motion.div>
        )}
        <div className="relative z-10">
          <div className="absolute -top-48 left-1/2 transform -translate-x-1/2">
            <div className="candle">
              {!candlesBlownOut && (
                <div>
                  <div className="absolute -top-[200px] text-gray-200 text-3xl">
                    <motion.div
                      animate={{ opacity: [0, 0.25, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                      className="block -translate-x-[60px] translate-y-[105px] -rotate-[30deg] text-gray-200 text-xl "
                    >
                      🖱️ Click
                    </motion.div>
                  </div>
                  <div>
                    <div className="flame"></div>
                    <div className="flame"></div>
                    <div className="flame"></div>
                    <div className="flame"></div>
                    <div className="flame"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <CakeSVG />
        </div>
      </div>
    </>
  );
}

export default Cake;
