import React from 'react';
import './Banner.css'; // Zaimportuj plik CSS dla baneru

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Witaj na mojej stronie portfolio</h1>
        <p>Znajdziesz tutaj informacje o moich umiejętnościach i projektach.</p>
        <button>Przejdź do portfolio</button>
      </div>
    </div>
  );
}

export default Banner;
