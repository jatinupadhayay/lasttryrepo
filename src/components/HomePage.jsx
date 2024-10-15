import React from 'react';
import './HomePage.css';
import amazonLogo from './images/amazon.png';
import flipkartLogo from './images/Flipkart.png';
import meeshoLogo from './images/meesho.png';
import ajioLogo from './images/ajio.png';
import myntraLogo from './images/myntra.png';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Price Peek!</h1>
      <p className="home-description">Compare products from different platforms and find the best deals!</p>

      <section className="company-logos">
        {/* Amazon */}
        <article className="company">
          <a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer">
            <img src={amazonLogo} alt="Amazon" className="company-logo" />
            <p className="company-name">Amazon</p>
          </a>
        </article>

        {/* Flipkart */}
        <article className="company">
          <a href="https://www.flipkart.com/" target="_blank" rel="noopener noreferrer">
            <img src={flipkartLogo} alt="Flipkart" className="company-logo" />
            <p className="company-name">Flipkart</p>
          </a>
        </article>

        {/* Meesho */}
        <article className="company">
          <a href="https://www.meesho.com/" target="_blank" rel="noopener noreferrer">
            <img src={meeshoLogo} alt="Meesho" className="company-logo" />
            <p className="company-name">Meesho</p>
          </a>
        </article>

        {/* Ajio */}
        <article className="company">
          <a href="https://www.ajio.com/" target="_blank" rel="noopener noreferrer">
            <img src={ajioLogo} alt="Ajio" className="company-logo" />
            <p className="company-name">Ajio</p>
          </a>
        </article>

        {/* Myntra */}
        <article className="company">
          <a href="https://www.myntra.com/" target="_blank" rel="noopener noreferrer">
            <img src={myntraLogo} alt="Myntra" className="company-logo" />
            <p className="company-name">Myntra</p>
          </a>
        </article>
      </section>
    </div>
  );
};

export default HomePage;
