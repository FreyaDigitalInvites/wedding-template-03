import React, { useEffect, useState, useRef } from 'react';
import { mempelaiSection } from '../data/MempelaiSection';
import '../Styles/Mempelai.css';

const Mempelai = () => {
  const [show, setShow] = useState(false);
  const imgRefWanita = useRef(null);
  const imgRefPria = useRef(null);

  const checkVisibility = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const onScroll = () => {
    if (imgRefWanita.current && imgRefPria.current) {
      if (checkVisibility(imgRefWanita.current)) {
        imgRefWanita.current.classList.add('slide-up');
      }
      if (checkVisibility(imgRefPria.current)) {
        imgRefPria.current.classList.add('slide-up');
      }
    }
  };

  useEffect(() => {
    setShow(true);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`Mempelai ${show ? 'show' : ''}`}>
      <h2>Assalamualaikum Wr. Wb</h2>
      <p>Dengan memohon Rahmat dan ridho Allah SWT yang telah Menciptakan makhluk-Nya secara berpasang pasangan, kami bermaksud menyelenggarakan pernikahan kami.</p>
      <hr />
      <img src="/ringsIcon.png" alt="Wedding Rings Icon" className="rings-icon" />

      <div className="mempelai-details">
        <div className="mempelai-wanita">
          <img
            src={mempelaiSection.imagePerempuan}
            alt="Foto Mempelai Wanita"
            className="img-mempelai"
            ref={imgRefWanita}
          />
          <h2>{mempelaiSection.namaPerempuan}</h2>
                <p>Putri dari keluarga <br />{mempelaiSection.putriDariKeluarga}</p>
        </div>
        <h1>- & -</h1>
        <div className="mempelai-pria">
          <img
            src={mempelaiSection.imagePria}
            alt="Foto Mempelai Pria"
            className="img-mempelai"
            ref={imgRefPria}
          />
          <h2>{mempelaiSection.namaPria}</h2>
                <p>Putra dari keluarga <br /> {mempelaiSection.putraDariKeluarga}</p>
        </div>
      </div>

    </div>
  );
};

export default Mempelai;