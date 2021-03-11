import React, { useEffect } from 'react';
import DataPoints from '../../../assets/images/Data points-pana 1.png';

import Button from '../../../Components/button/button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../../App.css';
import { useTranslation } from 'react-i18next';

export default function YourJournal() {
  const { t } = useTranslation();

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
          {t(`landing.Journal1`)} <br />
          {t(`landing.Journal2`)}
        </p>
      </div>
      <div className="flex justify-center" data-aos="zoom-in">
        <Button
          onClick={() => {
            alert('Hello!');
          }}
          text={t(`landing.JournalBottom`)}
        />
      </div>
      <div className="flex justify-around pb-5 items-center flex-wrap">
        <img
          src={DataPoints}
          alt="Data"
          className="w-5/12 h-auto"
          data-aos="zoom-in"
        />
        {/*<img
          src={Objects}
          alt="Objects"
          className="w-1/4 h-auto"
          data-aos="zoom-in"
       />*/}
      </div>
    </div>
  );
}
