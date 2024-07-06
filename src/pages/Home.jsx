import React, { useState, useEffect } from 'react';
import { homeSection } from '../data/HomeSection.jsx';
import '../App.css';
import '../Styles/Home.css';

const Home = ({ onShowComponents }) => {
  const [visible, setVisible] = useState(true);
  const [slideUp, setSlideUp] = useState(false);
  const [guestName, setGuestName] = useState('Untuk Kamu'); // State untuk menyimpan nama tamu

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('kpd');
    if (name) {
      setGuestName(name);
    }
  }, []);

  const handleButtonClick = () => {
    setSlideUp(true);
    setTimeout(() => {
      setVisible(false);
      onShowComponents();
    }, 1500);
  };

  return (
    <>
      {visible && (
        <div className={`invitation ${slideUp ? 'slide-up' : ''}`}>
          <h1>Undangan Pernikahan</h1>
          <img src={homeSection.image} className="cover-mempelai" alt="img-mempelai" />
          <h2>{homeSection.content}</h2>
          <p>Kpd Bapak/Ibu Saudara/i</p>
          <br />
          <h2 className="guestName">{guestName}</h2>
          <p>Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Hadir Ke Acara Pernikahan Kami.</p>
          <button onClick={handleButtonClick}>
            <i className="fas fa-envelope-open-text"></i> Buka Undangan
          </button>
          <p>Mohon Maaf Apabila Ada Kesalahan Penulisan Nama/Gelar</p>
        </div>
      )}
    </>
  );
};

export default Home;