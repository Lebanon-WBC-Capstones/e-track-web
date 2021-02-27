import React from 'react';
import Elements from '../HomePage/Elements/Elements.js';
import About from '../HomePage/About/About.js';
import Header from '../HomePage/Header/Header.js';
import YourJournal from '../HomePage/YourJournal/YourJournal.js';
import Footer from '../../Components/Footer/Footer.js';

function LandingPage() {
  return (
    <div>
      <Header />
      <About />
      <Elements />
      <YourJournal />
      <Footer />
    </div>
  );
}

export default LandingPage;
