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
    <div>
      <div className="mt-10">
        <p
          className="text-center text-2xl font-bold font-sans mb-3 "
          data-aos="fade-up"
        >
          your journal begins <br /> with a click
        </p>
      </div>
      <div className="flex justify-center" data-aos="zoom-in">
        <Button
          onClick={() => {
            alert('Hello!');
          }}
          text={'Get started'}
        />
      </div>
      <div className="flex justify-around pb-5 items-center flex-wrap">
        <img
          src={DataPoints}
          alt="Data"
          className="w-5/12 h-auto"
          data-aos="zoom-in"
        />
        <img
          src={Objects}
          alt="Objects"
          className="w-1/4 h-auto"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
}
