import React from 'react';
import '../Styles/Album.css';
import { albumSection } from '../data/AlbumSection';

const Album = () => {
  return (
    <div className="album-container">
      <h2>- Momen indah kami -</h2>
      <p>The memorable wedding gallery</p>
      <div className="album-gallery">
        {albumSection.images.map((image, index) => (
          <div className="album-image" key={index}>
            <img src={image} alt={`Momen ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;