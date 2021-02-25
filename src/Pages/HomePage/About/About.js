import React, { useEffect } from 'react';
import img1 from '../../../assets/images/Add notes-cuate 1.png';
import img2 from '../../../assets/images/Good team-rafiki 5.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="relative">
      <div className="inline-block" data-aos="zoom-in">
        <img
          src={img2}
          alt="yellow"
          className="left-0 top-20 transform rotate-12.11 opacity-0.6 "
        />
        <img
          src={img1}
          alt="Adding notes"
          className="absolute left-20 top-0 "
        />
      </div>
      <div className=" absolute my-40 mx-40 right-0 inline-block">
        <p
          className="leading-10 text-4xl font-sans font-normal"
          data-aos="fade-left"
        >
          About E track
        </p>
        <p className="text-3xl font-sans font-normal" data-aos="fade-left">
          E-track is an online-customized
          <br />
          bullet journal that allows you to
          <br />
          track and monitor your everyday life.
        </p>
        <br />
        <p className="text-3xl font-sans font-normal" data-aos="fade-left">
          The website shall help you organize
          <br />
          your time and tasks with habits
          <br />
          trackers, spreads and collections.
        </p>
      </div>
    </div>
  );
}
export default About;
