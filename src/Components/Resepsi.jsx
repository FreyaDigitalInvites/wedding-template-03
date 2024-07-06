import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Resepsi.css';
import { resepsiSection } from '../data/ResepsiSection';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span className="countdown-time">{timeLeft.days}</span>
        <span className="countdown-label">Hari</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-time">{timeLeft.hours}</span>
        <span className="countdown-label">Jam</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-time">{timeLeft.minutes}</span>
        <span className="countdown-label">Menit</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-time">{timeLeft.seconds}</span>
        <span className="countdown-label">Detik</span>
      </div>
    </div>
  );
};

const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return timeLeft;
};

const Resepsi = () => {
  const targetDate = new Date(resepsiSection.targetDate);

  return (
    <div className="resepsi-container">
      <h2>Save The Date</h2>
      <img src="/ringsIcon.png" alt="Wedding Rings Icon" className="rings-icon" />
      <p>Selalu ada yang spesial dalam cerita kami dan kami pun merasa sangat spesial untuk satu sama lain. dan kami bersyukur dipertemukan Allah di waktu terbaik, kini kami menanti hari istimewa kami.</p>
      <hr/>
      <h3>Rangkaian acara yang akan diselenggarakan</h3>

      {/* Countdown component */}
      <Countdown targetDate={targetDate} />

      {/* Akad Card */}
      <div className="card-akad">
        <h4>~Akad~</h4>
        <p>Hari/Tanggal</p>
        <strong>{resepsiSection.akadHari} | {resepsiSection.akadTanggal} | {resepsiSection.akadBulan} | {resepsiSection.akadTahun}</strong>
        <p>Waktu</p>
        <strong>{resepsiSection.akadWaktu}</strong>
      </div>

      {/* Resepsi Card */}
      <div className="card">
        <h4>~Resepsi~</h4>
        <p>Resepsi</p>
        <strong>{resepsiSection.resepsiHari} | {resepsiSection.resepsiTanggal} | {resepsiSection.resepsiBulan} | {resepsiSection.resepsiTahun}</strong>
        <p>Waktu</p>
        <strong>{resepsiSection.resepsiWaktu}</strong>
        <p>Alamat</p>
        <strong>{resepsiSection.alamat}</strong>
        <br/>
        <br/>
        <a href={resepsiSection.lokasi}><button><FontAwesomeIcon icon={faLocationDot} />  Lihat Lokasi</button></a>
      </div>
    </div>
  );
};

export default Resepsi;