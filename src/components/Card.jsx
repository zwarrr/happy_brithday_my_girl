import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from 'react-router-dom';

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true); 
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip px-4">
    <div className="w-full max-w-[400px] h-screen flex flex-col items-center justify-center">
      <motion.div  initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{duration: 1.2}}>
      <div id="card" className={`${cardClass}`} onClick={toggleCard}>     
        <div id="card-inside">
          <div className="wrap">
            <h1>Happy Birthday, Alyanissa Vidya Nur Chantika</h1>
            <h2>hawloo adee cayaa sayanggkuu cintakuu cantikkuu, akuuu aall inii, ciee ciee 18 tahun nii</h2>
            <p>
              I hope that this month, November, the month when you were born and also your birthday month, brings many good things and fortunate miracles to you.
            </p>
            <p>
             semogaa semuanyaa yang adee cita-citakan dimudahkan jalan nyaa, dilancarkan rejekinyaa, dan dibahagiakan selalua. aamiin yaa rabball alaminn.
            </p>
            <p>
              ciee 18 tahun nihh achh, cepet bener yaa adee nii padahal kita beda 5 bulan ini lho ihh🙄
            </p>
            <p className="signed">Mochamad Izwar Ali
              (aall)
            </p>
          </div>
        </div>

        <div id="card-front">
          <div className="wrap">
            <h1>Happy Birthday!</h1>
            <h2>adee sayanggkuu cintaakuu cantiknyaa akuuu</h2>
            <h3>"Alyanissa Vidya Nur Chantika"</h3>
          </div>
        </div>
    </div>

      </motion.div>

    {/* prone to bugs */}
      {isCardOpened && (
        <motion.div className="mt-4" initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: 1, visibility: "visible" }}
        transition={{duration: 1.2}}> 
        <Link to ='/cake'>
        <p 
          className="px-7 py-3 text-white font-medium text-base rounded-full hover:opacity-80 text-center"
          style={{ backgroundColor: '#813925' }}
        >
            Next Page
          </p>
        </Link>
            
        </motion.div>
         
        )}

    </div>
    
    </div>
    
  );
}

export default Card;