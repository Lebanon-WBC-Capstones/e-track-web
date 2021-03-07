import React from 'react';
import logoFooter from '../../assets/images/logoFooter.png';
import dribbble from '../../assets/images/Dribbble.png';
import instagram from '../../assets/images/Instagram.png';
import twitter from '../../assets/images/Twitter.png';
import youtube from '../../assets/images/Youtube.png';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="relative h-32">
      <div className="bg-primary font-sans font-medium lg:flex lg:justify-between absolute inset-x-0 bottom-0 bg-green-500">
        <div>
          <img src={logoFooter} className="w-40 h-20 mx-11 p-3" alt="logo" />
        </div>
        <div className="my-7 text-white "> {t(`footer.footerRights`)}</div>
        <div className="my-7 text-white mx-11 flex space-x-8">
          <p className="pt-1">{t(`footer.footerFollow`)}</p>
          <div className="flex flex-row space-x-2 ">
            <img src={instagram} alt="instagram" width="32px" height="32px" />
            <img src={dribbble} alt="dribble" width="32px" height="32px" />

            <img src={twitter} alt="twitter" width="32px" height="32px" />
            <img src={youtube} alt="youtube" width="32px" height="32px" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
