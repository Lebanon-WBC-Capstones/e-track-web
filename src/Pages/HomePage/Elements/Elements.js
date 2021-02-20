import React from 'react';
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

export default function Elements() {
  return (
    <div className="font-sans font-normal">
      <div
        style={{ backgroundImage: `url(${up})` }}
        className="bg-no-repeat bg-left-bottom bg-gray-100 h-screen"
      >
        <div>
          <img
            src={todo}
            alt={todo}
            className="rounded shadow-md left-32 top-20  absolute "
          />
          <img
            src={progress}
            alt={progress}
            className="rounded shadow-md absolute left-96 top-96 w-60 h-50"
          />

          <div className=" absolute my-40 mx-30 right-20  bottom-72 top-0 inline-block w-90 ">
            <p className="leading-10 text-4xl ">Your Dashboard</p>
            <p className="text-2xl ">
              A place where you can check your To-do list <br />
              and your Goals
            </p>
            <br />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${down})` }}
        className="bg-no-repeat bg-left-top bg-gray-100 h-screen"
      >
        <div className="flex ">
          <div className=" mt-80 ml-20 center ">
            <p className="leading-10 text-4xl ">Your Trackers</p>
            <p className="text-2xl ">
              Here you can keep track on your daily activities and your habits
            </p>
            <br />
          </div>
          <div className="mt-36 flex-col">
            <img
              src={yoga}
              alt={yoga}
              className="shadow-md  rounded-3xl  mr-44 "
            />
            <img
              src={reading}
              alt={reading}
              className="shadow-md  rounded-3xl m-4 ml-32"
            />
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${shape})` }}
        className="bg-no-repeat bg-right-top bg-gray-100 h-screen"
      >
        <div className="flex ">
          <div className="absolute z-10">
            <img
              src={lazy}
              alt={lazy}
              className="shadow-md  rounded-3xl  mt-64 ml-96"
            />
            <img
              src={happy}
              alt={happy}
              className="shadow-md  rounded-3xl mt-2 ml-52 "
            />
          </div>
          <div>
            <img
              src={calendar}
              alt={calendar}
              className="shadow-md  rounded-3xl m-4 "
            />
          </div>
          <div className=" mt-36 ml-72 ">
            <p className="leading-10 text-4xl ">Mood Tracker?</p>
            <p className="text-2xl ">
              Yes, you can also track your mood during the whole year.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
