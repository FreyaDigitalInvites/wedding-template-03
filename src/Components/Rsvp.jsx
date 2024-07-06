// src/Components/Rsvp.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { rsvpSection } from '../data/RsvpSection';
import '../Styles/Rsvp.css';

const Rsvp = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState('');
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    const fetchWishes = async () => {
      const querySnapshot = await getDocs(collection(db, rsvpSection.db));
      const wishesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setWishes(wishesData);
    };
    fetchWishes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newWish = { name, message, attendance };
      await addDoc(collection(db, rsvpSection.db), newWish);
      setWishes([...wishes, newWish]);
      setName('');
      setMessage('');
      setAttendance('');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="rsvp-container">
      <div className="card-doa">
        <p className="arabic-text">وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ ۝٢</p>
        <p>Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
        <p><strong>QS. AR-RUM 30: Ayat 21</strong></p>
      </div>

      <h2>-Wishes-</h2>
      <p>Kirim ucapan dan doa restu untuk kami</p>

      <form className="rsvp-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nama" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Ucapan" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
        <select 
          value={attendance} 
          onChange={(e) => setAttendance(e.target.value)} 
          required
        >
          <option value="">Konfirmasi Kehadiran</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /> Kirim</button>
      </form><br/><br/>
      <p>Scroll untuk melihat lebih banyak ucapan</p>
      <div className="wishes-list">
        {wishes.map((wish, index) => (
          <div key={index} className="wish-item">
            <p><strong>{wish.name}</strong> ({wish.attendance}):</p>
            <p>{wish.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rsvp;