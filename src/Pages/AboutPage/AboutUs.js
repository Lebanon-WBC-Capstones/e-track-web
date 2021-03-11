import React from 'react';
import About_Us from '../../assets/images/AboutUs.png';
import yellow from '../../assets/images/yellow.png';
import Team from '../../Components/TeamMemberCard/TeamMember';
import ContactUs from '../../Components/ContactUs/Contact';
import Footer from '../../Components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="absolute top-7 left-20">
        <Link to="/">
          <button className="shadow-md  hover:text-primary hover:bg-gray-100 bg-primary text-white font-bold py-3 px-7 rounded-full">
            Home
          </button>
        </Link>
      </div>
      <img src={yellow} alt="yellow" className="absolute right-0 top-0 w-2/3" />
      <div className="flex justify-around h-screen items-center flex-wrap">
        <img src={About_Us} alt="about us" className=" z-10" />
        <p className=" text-xl  font-sans z-10">
          <span className="text-2xl font-medium flex justify-center ">
            {t(`aboutus.aboutus1`)}
          </span>
          <br /> <br />
          {t(`aboutus.aboutus2`)} <br />
          {t(`aboutus.aboutus3`)}
          <br />
          {t(`aboutus.aboutus4`)} <br /> {t(`aboutus.aboutus5`)}
          <br />
          {t(`aboutus.aboutus6`)} <br />
          {t(`aboutus.aboutus7`)}
          <br /> {t(`aboutus.aboutus8`)}
          <br />
          <br />
          <span className="font-light">
            {t(`aboutus.aboutus9`)} <br />
            {t(`aboutus.aboutus10`)}
            <br /> {t(`aboutus.aboutus11`)}
            <br />
          </span>
          <br />
          <span className="font-semibold">{t(`aboutus.aboutus12`)}</span>
        </p>
      </div>

      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}
