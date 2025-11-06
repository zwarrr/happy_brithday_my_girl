import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGlobalAudio } from '../utils/globalAudio';

// Import videos from assets/video folder
import vid1 from '../assets/video/vid1.mp4';
import vid2 from '../assets/video/vid2.mp4';
import vid3 from '../assets/video/vid3.mp4';
import vid4 from '../assets/video/vid4.mp4';
import vid5 from '../assets/video/vid5.mp4';
import vid6 from '../assets/video/vid6.mp4';

const UstimeMorever = () => {
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [allVideosWatched, setAllVideosWatched] = useState(false);
  const [watchedVideos, setWatchedVideos] = useState(new Set());
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Array video paths
  const videos = [
    vid1,
    vid2,
    vid3,
    vid4,
    vid5,
    vid6
  ];

  // Function to fade volume smoothly
  const fadeVolume = (targetVolume, duration = 1000) => {
    const audio = getGlobalAudio();
    if (!audio) return;

    const startVolume = audio.volume;
    const volumeChange = targetVolume - startVolume;
    const steps = 50; // Number of steps for smooth transition
    const stepDuration = duration / steps;
    let currentStep = 0;

    const fadeInterval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      audio.volume = Math.max(0, Math.min(1, startVolume + (volumeChange * progress)));

      if (currentStep >= steps) {
        clearInterval(fadeInterval);
        audio.volume = targetVolume;
      }
    }, stepDuration);
  };

  // Fade down volume when component mounts (video starts)
  useEffect(() => {
    fadeVolume(0, 1500); // Fade to 0% volume (mute) over 1.5 seconds

    return () => {
      // Cleanup if needed
    };
  }, []);

  // Fade up volume when all videos are watched
  useEffect(() => {
    if (allVideosWatched) {
      fadeVolume(0.5, 2000); // Fade back to 50% volume over 2 seconds
    }
  }, [allVideosWatched]);

  const handleVideoEnd = () => {
    // Mark current video as watched
    const newWatchedVideos = new Set(watchedVideos);
    newWatchedVideos.add(currentVideoIndex);
    setWatchedVideos(newWatchedVideos);
    
    // Check if all videos have been watched
    if (newWatchedVideos.size === videos.length) {
      setAllVideosWatched(true);
    }
    
    // Pindah ke video berikutnya, kembali ke awal jika sudah di video terakhir
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };



  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '20px 0',
      background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f48fb1 100%)',
    }}>
      {/* Video Container - Portrait 9:16 ratio */}
      <div style={{
        width: 'min(100vw - 40px, calc((100vh - 120px) * 9 / 16))',
        height: 'min(100vh - 120px, calc((100vw - 40px) * 16 / 9))',
        maxWidth: '450px',
        position: 'relative',
        backgroundColor: '#000',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
      }}>
          <video
            key={currentVideoIndex}
            src={videos[currentVideoIndex]}
            autoPlay
            loop={false}
            onEnded={handleVideoEnd}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              backgroundColor: '#000'
            }}
          />

          {/* Video Counter */}
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '5px 12px',
            borderRadius: '15px',
            fontSize: '0.8rem',
            fontFamily: "'Courier New', Courier, monospace",
            zIndex: 20,
            fontWeight: 'bold'
          }}>
            {currentVideoIndex + 1} / {videos.length}
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/present')}
          style={{
            marginTop: '15px',
            padding: '12px 35px',
            fontSize: '0.95rem',
            backgroundColor: '#813925',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontFamily: "'Courier New', Courier, monospace",
            boxShadow: '0 4px 15px rgba(129, 57, 37, 0.4)',
            transition: 'all 0.3s ease',
            fontWeight: 'bold',
            zIndex: 30
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#a0442e';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#813925';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Back to Gifts
        </button>
    </div>
  );
};

export default UstimeMorever;
