import React, { useRef } from 'react';
import Elements from '../HomePage/Elements/Elements.js';
import About from '../HomePage/About/About.js';
import Header from '../HomePage/Header/Header.js';
import YourJournal from '../HomePage/YourJournal/YourJournal.js';
import Footer from '../../Components/Footer/Footer.js';
import Button from '../../Components/button/button.js';

function LandingPage() {
  const aboutUsSection = useRef(null);
  const goToAboutUs = () => {
    window.scrollTo({
      top: aboutUsSection.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <Header func={goToAboutUs} />
      <div ref={aboutUsSection}>
        <About />
      </div>
      <Elements />
      <YourJournal />
      <Footer />
    </div>
  );
}

export default LandingPage;
