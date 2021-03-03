import React, { useEffect } from 'react';
import img1 from '../../../assets/images/Add notes-cuate 1.png';
import img2 from '../../../assets/images/Good team-rafiki 5.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex justify-around pb-5 items-center h-screen">
      <div className="inline-block" data-aos="zoom-in">
        <img src={img2} alt="yellow" />
        <img src={img1} alt="Adding notes" className="absolute left-20 top-0" />
      </div>
      <div className="my-40 mx-40 inline-block">
        <h1
          className="leading-10 text-2xl font-sans font-bold "
          data-aos="fade-left"
        >
          {t(`landing.About1`)}
        </h1>
        <p className="text-xl font-sans font-normal" data-aos="fade-left">
          {t(`landing.About2`)}
          <br />
          {t(`landing.About3`)}
          <br />
          {t(`landing.About4`)}
        </p>
        <br />
        <p className="text-xl font-sans font-normal" data-aos="fade-left">
          {t(`landing.About5`)}
          <br />
          {t(`landing.About6`)}
          <br />
          {t(`landing.About7`)}
        </p>
      </div>
    </div>
  );
}
export default About;
