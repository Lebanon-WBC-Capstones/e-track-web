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

export default function Elements() {
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
                className="rounded shadow-md left-32 top-20 relative"
                data-aos="zoom-in"
              />
              <img
                src={progress}
                alt={progress}
                className="rounded shadow-md relative left-96 w-60 h-50"
                data-aos="zoom-in"
              />
            </div>
            <div className="my-40 mx-30 inline-block w-90 mr-8">
              <p
                className="leading-10 text-2xl pb-4  font-bold "
                data-aos="fade-left"
              >
                Your Dashboard
              </p>
              <p className="text-xl max-w-xl " data-aos="fade-left">
                A place where you can check your
                <br /> To-do list and your Goals
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
                Your Trackers
              </p>
              <p className="text-xl" data-aos="fade-left">
                Here you can keep track on your daily
                <br /> activities and your habits
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
                  className="shadow-md rounded-3xl mt-64 ml-96 w-52"
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
                Mood Tracker?
              </p>
              <p className="text-xl pb-12 max-w-xl " data-aos="fade-left">
                Yes, you can also track your mood
                <br /> during the whole year.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
