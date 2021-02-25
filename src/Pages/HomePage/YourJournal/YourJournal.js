import React, { useEffect } from 'react';
import DataPoints from '../../../assets/images/Data points-pana 1.png';
import Objects from '../../../assets/images/OBJECTS.png';
import Button from '../../../Components/button/button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../../App.css';

export default function YourJournal() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="relative">
      <div className=" top-10 relative ">
        <p
          className="text-center text-4xl font-bold font-sans mb-3 "
          data-aos="fade-up"
        >
          your journal begins <br /> with a click
        </p>
      </div>
      <div
        className=" flex justify-center top-20 relative z-20"
        data-aos="zoom-in"
      >
        <Button
          onClick={() => {
            alert('Hello!');
          }}
          text={'Get started'}
        />
      </div>
      <img
        src={Objects}
        alt="Objects"
        className="right-0 top-40 absolute "
        data-aos="zoom-in"
      />
      <img
        src={DataPoints}
        alt="Data"
        className="relative left-0 top-0 "
        data-aos="zoom-in"
      />
    </div>
  );
}
