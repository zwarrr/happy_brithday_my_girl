import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionWrapper from './SectionWrapper'
import "../assets/css/present.css";
import audioSrc from '../assets/mp3/anything.mp3'
import { getGlobalAudio, setGlobalAudio, stopGlobalAudio } from '../utils/globalAudio'

function Present() {
  const navigate = useNavigate();
  const [isBoxOpened, setIsBoxOpened] = useState(false);

  useEffect(() => {
    // Get current audio
    let audio = getGlobalAudio()
    
    // Only create new audio if it doesn't exist or it's not the anything.mp3
    if (!audio || !audio.src.includes('anything.mp3')) {
      // Stop any previous music first
      stopGlobalAudio()
      
      // Create new audio for Present
      audio = new Audio(audioSrc)
      audio.loop = true
      audio.volume = 0.5
      setGlobalAudio(audio)
    } else {
      // Audio exists, make sure it's playing and volume is correct
      if (audio.paused) {
        audio.play().catch(e => console.log("Resume play error:", e))
      }
      // Ensure volume is at 50% when returning to this page
      if (audio.volume < 0.5) {
        audio.volume = 0.5
      }
    }
  }, [])

  const handleBoxClick = () => {
    setIsBoxOpened(true);
    
    // Play music on box click (guaranteed user interaction)
    const audio = getGlobalAudio()
    if (audio && audio.paused) {
      audio.play().catch(e => console.log("Play error:", e))
    }
  };

  const handleRaffleClick = (e, giftType) => {
    e.stopPropagation();
    if (isBoxOpened) {
      if (giftType === 'album') {
        navigate('/album');
      } else if (giftType === 'flower') {
        navigate('/flower');
      } else if (giftType === 'ustime') {
        navigate('/ustime');
      }
    }
  };

  return (
    <SectionWrapper>
      <div className='mb-64'>
        <h1 
          className="absolute -top-[10rem] left-0 right-0 text-center flex items-center justify-center text-xl font-extrabold drop-shadow-lg px-4"
          style={{ color: '#813925' }}
        >
          Click the box to see your gifts!
        </h1>
      </div>
      <div className="birthday-gift">
        <input id='click' type='checkbox' onChange={handleBoxClick}/>
        <label className='gift' htmlFor='click'>
          <div className="gift-top"></div>
          <div className="gift-bottom"></div>
          <div 
            id="raffle-red" 
            className={`entry raffle raffle-1 ${isBoxOpened ? 'cursor-pointer' : ''}`}
            onClick={(e) => handleRaffleClick(e, 'flower')}
            style={{ pointerEvents: isBoxOpened ? 'auto' : 'none' }}
          >
            <div className="no-scale">
              <span className="ticket-text" style={{ color: 'white' }}>Barang<br/>Hidup</span>
            </div>
          </div>
          <div 
            id="raffle-red" 
            className={`entry raffle raffle-2 ${isBoxOpened ? 'cursor-pointer' : ''}`}
            onClick={(e) => handleRaffleClick(e, 'ustime')}
            style={{ pointerEvents: isBoxOpened ? 'auto' : 'none' }}
          >
            <div className="no-scale">
              <span className="ticket-text" style={{ color: 'white' }}>Utstime<br/>morever</span>
            </div>
          </div>
          <div 
            id="raffle-red" 
            className={`entry raffle raffle-3 ${isBoxOpened ? 'cursor-pointer' : ''}`}
            onClick={(e) => handleRaffleClick(e, 'album')}
            style={{ pointerEvents: isBoxOpened ? 'auto' : 'none' }}
          >
            <div className="no-scale">
              <span className="ticket-text" style={{ color: 'white' }}>Album<br/>Kita</span>
            </div>
          </div>
        </label>
      </div>
    </SectionWrapper>
  )
}

export default Present