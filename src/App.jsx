// App.jsx
import React, { useState } from 'react';
import Home from './pages/Home.jsx';
import Invitation2 from './Components/Invitation2.jsx';
import Mempelai from './Components/Mempelai.jsx';
import Resepsi from './Components/Resepsi.jsx';
import Album from './Components/Album.jsx';
import Penutupan from './Components/Penutupan.jsx';
import Give from './Components/Give.jsx';
import Rsvp from './Components/Rsvp.jsx';
import Audio from './Components/Audio.jsx';
import Autoscroll from './Components/Autoscroll.jsx';
import './App.css';

const App = () => {
  const [showComponents, setShowComponents] = useState(false);

  const handleShowComponents = () => {
    setShowComponents(true);
  };

  return (
    <div className="wrapper">
      {!showComponents && <Home onShowComponents={handleShowComponents} />}
      {showComponents && (
        <>
          <Invitation2 />
          <Mempelai />
          <Resepsi />
          <Album />
          <Give />
          <Rsvp />
          <Penutupan />
          <Audio />
          <Autoscroll />

        </>
      )}
    </div>
  );
};

export default App;