import React, { useState } from 'react';
import Logo from '../../../assets/images/Logo.png';
import img1 from '../../../assets/images/img1.png';
import Button from '../../../Components/button/button';
import LandingPage from '../../LandingPage/LandingPage';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Header() {
  const [lan, setLan] = useState('English');
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    if (lan === 'English') {
      setLan('عربي');
      i18n.changeLanguage(language);
      console.log(lan);
      console.log(i18next.language);
    } else {
      setLan('English');
      i18n.changeLanguage(language);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <img
        src={Logo}
        className="w-1/12 h-auto absolute left-14 top-9"
        alt="E-Track Logo"
      />
      <img
        src={img1}
        className="absolute top-0 right-0 w-6/12"
        alt="background image"
        width="900"
      />
      {/*button to translate*/}

      <div className="w-52 h-14 absolute top-5 right-72">
        <Button
          text={lan}
          onClick={() => {
            if (lan === 'English') {
              changeLanguage('en');
            } else {
              changeLanguage('ar');
            }
          }}
        />
      </div>

      <div className="w-52 h-14 absolute top-5 right-5">
        <Button text="Get Started" />
      </div>

      <div className="absolute top-1/3 right-2/4 h-60">
        <div className="leading-10 font-bold md:text-center ">
          <span className="text-4xl ">
            {t(`landing.Header1`)}
            <span className="text-primary"> {t(`landing.Header2`)} </span>
          </span>
          <br />
          <span className="text-5xl ">{t(`landing.Header3`)} </span>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="flex justify-center">
            <Button text={t(`landing.HeaderBottom`)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
