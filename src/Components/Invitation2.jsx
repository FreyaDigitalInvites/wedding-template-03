import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {homeSection} from '../data/HomeSection.jsx'


import '../App.css';
import '../Styles/Invitation2.css'; 

const Invitation2 = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`invitation2 ${show ? 'show' : ''}`}>
      <h2>Undangan Pernikahan</h2>

          <h1 className="namaPria">{homeSection.namaPria}</h1>
          <h1>-&-</h1>
          <h1 className="namaPerempuan">{homeSection.namaPerempuan}</h1>
        <h3>{homeSection.hari}</h3>
        <h3>{homeSection.tanggal}</h3>
        <img src="/ringsIcon.png" alt="Wedding Rings Icon" className="rings-icon" />
      <p>Kpd Bapak/Ibu Saudara/i</p>
      <br/>
      <p>{/* Anda dapat mengganti URLParam dengan nama tamu undangan yang didapat dari URL params */}</p>
      <p>Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Hadir Ke Acara Pernikahan Kami.</p>
      <button><FontAwesomeIcon icon={faBookmark} />   Save The Date
      </button>
      <p>Mohon Maaf Apabila Ada Kesalahan Penulisan Nama/Gelar</p>
     
    </div>

  );

};

export default Invitation2;