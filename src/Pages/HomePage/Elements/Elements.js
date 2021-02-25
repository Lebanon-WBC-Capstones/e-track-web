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
import down from './images/down.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Elements() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative">
      <div className="font-sans font-normal">
        <div
          style={{ backgroundImage: `url(${up})` }}
          className="bg-no-repeat bg-left-bottom bg-gray-100 h-screen"
        >
          <div>
            <div className="avadh">
              <img
                src={todo}
                alt={todo}
                className="rounded shadow-md left-32 top-20  absolute  "
                data-aos="zoom-in"
              />
              <img
                src={progress}
                alt={progress}
                className="rounded shadow-md absolute left-96 top-96 w-60 h-50 "
                data-aos="zoom-in"
              />
            </div>
            <div className=" absolute my-40 mx-30 right-20  bottom-72 top-0 inline-block w-90 mr-8 ">
              <p className="leading-10 text-5xl  pb-4 " data-aos="fade-left">
                Your Dashboard
              </p>
              <p className="text-4xl  max-w-xl " data-aos="fade-left">
                A place where you can check your To-do list and your Goals
              </p>
              <br />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${down})` }}
          className="bg-no-repeat bg-left-top bg-gray-100 h-screen"
        >
          <div className="flex  ">
            <div className=" mt-80 ml-20 center ">
              <p className="leading-10 text-5xl pb-4 " data-aos="fade-right">
                Your Trackers
              </p>
              <p className="text-4xl " data-aos="fade-left">
                Here you can keep track on your daily activities and your habits
              </p>
              <br />
            </div>
            <div className="mt-36 flex-col avadh mr-36">
              <img
                src={yoga}
                alt={yoga}
                className="shadow-md  rounded-3xl  mr-44 "
                data-aos="fade-left"
              />
              <img
                src={reading}
                alt={reading}
                className="shadow-md  rounded-3xl m-4 ml-32"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${shape})` }}
          className="bg-no-repeat bg-right-top bg-gray-100 h-screen"
        >
          <div className="flex ">
            <div className="avadh">
              <div className="absolute z-10">
                <img
                  src={lazy}
                  alt={lazy}
                  className="shadow-md  rounded-3xl  mt-64 ml-96 "
                  data-aos="zoom-in"
                />
                <img
                  src={happy}
                  alt={happy}
                  className="shadow-md  rounded-3xl mt-2 ml-52 "
                  data-aos="zoom-in"
                />
              </div>
            </div>
            <div>
              <img
                src={calendar}
                alt={calendar}
                className="shadow-md  rounded-3xl m-4 "
                data-aos="zoom-in"
              />
            </div>
            <div className=" mt-24 ml-64 ">
              <p className="leading-10 text-5xl pb-4" data-aos="fade-left">
                Mood Tracker?
              </p>
              <p className="text-4xl pb-12 max-w-xl " data-aos="fade-left">
                Yes, you can also track your mood during the whole year.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
