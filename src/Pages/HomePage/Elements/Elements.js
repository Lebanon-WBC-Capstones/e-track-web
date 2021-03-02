import React, { useEffect } from 'react';
import progress from './images/progress.png';
import todo from './images/todo.png';
import yoga from './images/yoga.png';
import reading from './images/reading.png';
import calendar from './images/calendar.png';
import lazy from './images/lazy.png';
import happy from './images/happy.png';
import shape from './images/shape.png';
import up from './images/up.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function Elements() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100">
      <div
        className="font-sans font-normal bg-no-repeat bg-left-top"
        style={{ backgroundImage: `url(${up})` }}
      >
        <div className=" h-auto">
          <div className="flex items-center justify-around">
            <div className="avadh">
              <img
                src={todo}
                alt={todo}
                className={
                  i18n.language === 'en'
                    ? 'rounded shadow-md left-32 top-20 relative'
                    : 'rounded shadow-md relative top-20'
                }
                data-aos="zoom-in"
              />
              <img
                src={progress}
                alt={progress}
                className={
                  i18n.language === 'en'
                    ? 'rounded shadow-md relative left-96 w-60 h-50'
                    : 'rounded shadow-md relative right-44 w-60 h-50 bottom '
                }
                data-aos="zoom-in"
              />
            </div>
            <div className="my-40 mx-30 inline-block w-90 mr-8">
              <p
                className="leading-10 text-2xl pb-4  font-bold "
                data-aos="fade-left"
              >
                {t(`landing.Dashboard1`)}
              </p>
              <p className="text-xl max-w-xl " data-aos="fade-left">
                {t(`landing.Dashboard2`)}
                <br /> {t(`landing.Dashboard3`)}
              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="h-auto">
          <div className="flex items-center justify-around pt-52">
            <div className="center">
              <p
                className="leading-10 text-2xl pb-4  font-bold "
                data-aos="fade-right"
              >
                {t(`landing.Tracker1`)}
              </p>
              <p className="text-xl" data-aos="fade-left">
                {t(`landing.Tracker2`)}
                <br /> {t(`landing.Tracker3`)}
              </p>
              <br />
            </div>
            <div className="flex-col">
              <img
                src={yoga}
                alt={yoga}
                className="shadow-md rounded-2xl mr-44 w-80 avadh"
                data-aos="fade-left"
              />
              <img
                src={reading}
                alt={reading}
                className="shadow-md rounded-2xl m-4 ml-32 w-80 avadh"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${shape})` }}
          className="bg-no-repeat bg-right h-screen pt-52"
        >
          <div className="flex items-center justify-around">
            <div className="avadh">
              <div className="absolute z-10">
                <img
                  src={lazy}
                  alt={lazy}
                  className="shadow-md rounded-3xl mt-64 ml-96 w-52 "
                  data-aos="zoom-in"
                />
                <img
                  src={happy}
                  alt={happy}
                  className="shadow-md rounded-3xl mt-2 ml-52 w-52"
                  data-aos="zoom-in"
                />
              </div>
              <div>
                <img
                  src={calendar}
                  alt={calendar}
                  className="shadow-md rounded-3xl m-4 w-90 h-80"
                  data-aos="zoom-in"
                />
              </div>
            </div>
            <div>
              <p
                className="leading-10 text-2xl pb-4  font-bold "
                data-aos="fade-left"
              >
                {t(`landing.Mood1`)}
              </p>
              <p className="text-xl pb-12 max-w-xl " data-aos="fade-left">
                {t(`landing.Mood2`)}
                <br /> {t(`landing.Mood3`)}
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
