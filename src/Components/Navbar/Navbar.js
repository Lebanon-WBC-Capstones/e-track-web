// in this component I am using "require" inside the src of the img to import images dynamiclly

// this will define the active tap to change its style in the navbar, we can get its value from the Route later

import navElements from '../../Constants/navElements.js';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const match = useLocation();
  let router = match.pathname.slice(1);
  const active = router[0].toUpperCase() + router.slice(1);

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="bg-white rounded-xl shadow-md flex flex-wrap justify-between px-72 py-2 mx-8">
        {navElements.map((el) => {
          if (active === el) {
            return (
              <Link to={`/${el}`} key={el}>
                <div className="bg-white rounded-xl items-center flex flex-col bg-primary p-2 cursor-pointer w-70">
                  <div>
                    <img
                      className="h-9 w-9 justify-self-center max-w-none"
                      src={
                        require(`../../assets/icons/${el}-Active.png`).default
                      }
                      alt={`${el} Logo`}
                    />
                  </div>
                </div>
              </Link>
            );
          } else {
            return (
              <Link to={`/${el}`} key={el}>
                <div className="bg-white rounded-xl items-center flex flex-col flex-auto cursor-pointer w-70">
                  <div className="flex-shrink-0">
                    <img
                      className="h-6 w-6 justify-self-center"
                      src={require(`../../assets/icons/${el}.png`).default}
                      alt={`${el} Logo`}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-Grey text-base">
                      {t(`navbar.${el}`)}
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
}

export default Navbar;
