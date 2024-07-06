import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Give.css';
import { giveSection } from '../data/GiveSection';

const Give = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening telah disalin!");
  };

  return (
    <div className="give-container">
      <p>Doa restu anda merupakan karunia yang sangat berharga bagi kami.</p>
      <h2>-Beri Hadiah-</h2>
      <p>Jika memberi adalah tanda kasih anda, anda dapat memberikan hadiah secara cashless ke rekening mempelai atau kado ke alamat mempelai.</p>
      <hr/>
       <h2>Kirim Amplop</h2>
      <div className="card-container">
        <div className="card-rekening">
          <img src={giveSection.iconBankWanita} alt="Icon Bank Wanita" />
          <p>{giveSection.rekeningWanita}</p>
          <p>{giveSection.namaPemilikWanita}</p>
          <button onClick={() => copyToClipboard(giveSection.rekeningWanita)}>
            <FontAwesomeIcon icon={faCopy} className="copy-icon" /> Salin Rekening
          </button>
        </div>
        <div className="card-rekening">
          <img src={giveSection.iconBankPria} alt="Icon Bank Pria" />
          <p>{giveSection.rekeningPria}</p>
          <p>{giveSection.namaPemilikPria}</p>
          <button onClick={() => copyToClipboard(giveSection.rekeningPria)}>
            <FontAwesomeIcon icon={faCopy} className="copy-icon" /> Salin Rekening
          </button>
        </div>
      </div>
    </div>
  );
};

export default Give;