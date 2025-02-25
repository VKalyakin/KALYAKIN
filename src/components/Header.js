import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1 style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}>VIKTOR KALYAKIN</h1> {/* Используем жирный шрифт */}
      <h2>WEBMASTER</h2> {/* Используем тот же жирный шрифт */}
      <p>Development with Node.js, React, HTML, and CSS.</p>
    </div>
  );
};

export default Header;