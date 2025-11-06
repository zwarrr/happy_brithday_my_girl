import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/scss/flower.scss';
import '../assets/css/FlowerAnimation.css';

const FlowerAnimation = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [titleText, setTitleText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [loveParticles, setLoveParticles] = useState([]);
  
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoaded(true);
      const fullTitle = 'I LOVE U';
      let currentIndex = 0;
      const typeChar = () => {
        if (currentIndex < fullTitle.length) {
          setTitleText(fullTitle.substring(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeChar, 300);
        }
      };
      typeChar();
    }, 1000);
    
    // Show button after 5 seconds
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 5000);
    
    // Generate love particles continuously
    const particleInterval = setInterval(() => {
      const newParticle = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 2,
        size: 15 + Math.random() * 10
      };
      setLoveParticles(prev => [...prev.slice(-20), newParticle]);
    }, 800);
    
    return () => {
      clearTimeout(loadTimer);
      clearTimeout(buttonTimer);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className={`flower-container ${loaded ? '' : 'not-loaded'}`}>
      <div className="night"></div>
      <div className="flowers">
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
            <div className="flower__line__leaf flower__line__leaf--5"></div>
            <div className="flower__line__leaf flower__line__leaf--6"></div>
          </div>
        </div>
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>
        <div className="grow-ans" style={{ '--d': '1.2s' }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>
        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>
        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>
        <div className="grow-ans" style={{ '--d': '2.4s' }}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf"></div>
          </div>
        </div>
        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf"></div>
          </div>
        </div>
        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-front">
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__line"></div>
          </div>
        </div>
        <div className="grow-ans" style={{ '--d': '3.2s' }}>
          <div className="flower__g-fr">
            <div className="leaf"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
          </div>
        </div>
        <div className="long-g long-g--0">
          <div className="grow-ans" style={{ '--d': '3s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '2.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.4s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>
        <div className="long-g long-g--1">
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.8s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>
        <div className="long-g long-g--2">
          <div className="grow-ans" style={{ '--d': '4s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.4s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>
        <div className="long-g long-g--3">
          <div className="grow-ans" style={{ '--d': '4s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>
        <div className="long-g long-g--4">
          <div className="grow-ans" style={{ '--d': '4s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>
        <div className="long-g long-g--5">
          <div className="grow-ans" style={{ '--d': '4s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>
        <div className="long-g long-g--6">
          <div className="grow-ans" style={{ '--d': '4.2s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.4s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.6s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '4.8s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>
        <div className="long-g long-g--7">
          <div className="grow-ans" style={{ '--d': '3s' }}>
            <div className="leaf leaf--0"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.2s' }}>
            <div className="leaf leaf--1"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.5s' }}>
            <div className="leaf leaf--2"></div>
          </div>
          <div className="grow-ans" style={{ '--d': '3.6s' }}>
            <div className="leaf leaf--3"></div>
          </div>
        </div>
      </div>
      <h1 className="title">
        <span id="title">{titleText}</span>
      </h1>

      {/* Love Particles */}
      {loveParticles.map(particle => (
        <div
          key={particle.id}
          className="love-particle"
          style={{
            left: `${particle.left}%`,
            fontSize: `${particle.size}px`,
            animationDuration: `${particle.animationDuration}s`
          }}
        >
          ♥
        </div>
      ))}

      {/* Ground/Tanah */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '120px',
        background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 300
      }}>
        {/* Teks muncul setelah 5 detik */}
        {showButton && (
          <div
            onClick={() => navigate(-1)}
            style={{
              color: 'white',
              fontSize: 'clamp(16px, 4vw, 20px)',
              cursor: 'pointer',
              fontWeight: '600',
              textShadow: '0 3px 10px rgba(0,0,0,0.9)',
              animation: 'fadeInButton 0.5s ease-in',
              zIndex: 301,
              whiteSpace: 'nowrap',
              userSelect: 'none'
            }}
          >
            Click to go back ←
          </div>
        )}
      </div>

      {/* CSS untuk animasi button dan layer */}
      <style>{`
        @keyframes fadeInButton {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .love-particle {
          position: fixed;
          bottom: 0;
          color: white;
          opacity: 0.8;
          pointer-events: none;
          z-index: 90;
          animation: floatLove linear forwards;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        @keyframes floatLove {
          0% {
            bottom: 0;
            opacity: 0;
            transform: translateX(0) rotate(0deg);
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateX(20px) rotate(180deg);
          }
          80% {
            opacity: 0.5;
          }
          100% {
            bottom: 100vh;
            opacity: 0;
            transform: translateX(-20px) rotate(360deg);
          }
        }

        /* Pastikan flowers tetap di atas */
        .flowers {
          position: relative;
          z-index: 100 !important;
          margin-bottom: 150px !important;
          transform: scale(1.3) translateY(-80px) !important;
        }

        .flower {
          z-index: 100 !important;
        }

        .night {
          z-index: 1 !important;
        }

        .title {
          z-index: 200 !important;
        }
      `}</style>
    </div>
  );
};

export default FlowerAnimation;
