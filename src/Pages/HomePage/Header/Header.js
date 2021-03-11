import React, { useState } from 'react';
import Logo from '../../../assets/images/Logo.png';
import img1 from '../../../assets/images/img1.png';
import languagePic from '../../../assets/images/languagePic.png';

import Button from '../../../Components/button/button';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';

import { signInWithGoogle } from '../../../firebase.js';

function Header({ func }) {
  let history = useHistory();

  const [lan, setLan] = useState('En');
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    if (lan === 'En') {
      setLan('Ar');
      i18n.changeLanguage(language);
    } else {
      setLan('En');
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
        alt="background"
        width="900"
      />
      {/*button to translate*/}

      <div className="">
        <img
          src={languagePic}
          alt="translate"
          className="absolute p-1 w-12 top-8 right-80 cursor-pointer"
          onClick={() => {
            if (lan === 'En') {
              changeLanguage('en');
            } else {
              changeLanguage('ar');
            }
          }}
        />
      </div>

      <div className="  absolute top-7 right-48 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
        <Link to="/about">
          <button className="shadow-md  hover:text-white text-primary font-bold py-3 px-7 rounded-full">
            {t(`landing.HeaderBtnAbout`)}
          </button>
        </Link>
      </div>

      <div className=" absolute top-7 right-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
        <Button
          text={t(`landing.HeaderBtnStarted`)}
          onClick={() => {
            signInWithGoogle().then(() => history.push('/home'));
          }}
        />
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
          <div className="flex justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <Button text={t(`landing.HeaderButton`)} onClick={() => func()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
