import React from 'react';
import { useTranslation } from 'react-i18next';
import About_Us from '../../../assets/images/AboutUs.png';
import yellow from '../../../assets/images/yellow.png';
import Team from '../../../Components/Card/TeamMemberCard/TeamMember';
import ContactUs from '../../../Components/ContactUs/Contact';
import Footer from '../../../Components/Footer/Footer';

export default function AboutUs() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gray-100 min-h-screen">
      <img src={yellow} alt="yellow" className="absolute right-0 top-0 w-2/3" />
      <div className="h-48"></div>
      <div className="h-1/4 flex justify-center space-x-52 > * mr-40">
        <img src={About_Us} alt="about us" className=" z-10" />
        <p className=" text-3xl text-left font-sans z-10 ">
          <span className="text-5xl font-medium flex justify-center">
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
      <div className="h-52"></div>

      <Team />
      <ContactUs />
      <div className="absolute inset-x-0">
        <Footer />
      </div>
    </div>
  );
}
