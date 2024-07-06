// src/Components/Penutupan.jsx
import React from 'react';
import { penutupanSection } from '../data/PenutupanSection';
import '../Styles/Penutupan.css';


const Penutupan = () => {
  return (
    <div className="penutupan">
      <p>Atas perhatian dan pengertiannya, kami mengucapkan banyak terimakasih.</p>
      <h2>Wassalamu'alaikum Wr. Wb.</h2>
      <p>Kami yang berbahagia</p>
      <img src={penutupanSection.image} alt="Foto kedua mempelai"/>
      <h2>{penutupanSection.namaMempelai}</h2>
    </div>
  );
};

export default Penutupan;