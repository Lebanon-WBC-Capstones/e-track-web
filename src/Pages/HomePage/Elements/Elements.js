import React from 'react';
import img1 from './images/progress.png';
import img2 from './images/todo.png';
import img3 from './images/yoga.png';
import img4 from './images/reading.png';
import img5 from './images/calendar.png';
import img6 from './images/lazy.png';
import img7 from './images/happy.png';
import img8 from './images/shape.png';
import img9 from './images/up.png';
import img10 from './images/down.png';

export default function Elements() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${img9})` }}
        className="bg-no-repeat bg-left-bottom bg-gray-100 h-screen"
      >
        <div className="">
          <img
            src={img2}
            alt=""
            className="rounded shadow-md left-32 top-20  absolute "
          />
          <img
            src={img1}
            alt=""
            className="rounded shadow-md absolute left-96 top-96 w-60 h-50"
          />

          <div className=" absolute my-40 mx-30 right-20  bottom-72 top-0 inline-block w-90 ">
            <p className="leading-10 text-4xl font-sans font-normal">
              Your Dashboard
            </p>
            <p className="text-2xl font-sans font-normal">
              A place where you can check your To-do list <br />
              and your Goals
            </p>
            <br />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${img10})` }}
        className="bg-no-repeat bg-left-top bg-gray-100 h-screen"
      >
        <div className="flex ">
          <div className=" mt-80 ml-20 center ">
            <p className="leading-10 text-4xl font-sans font-normal">
              Your Trackers
            </p>
            <p className="text-2xl font-sans font-normal">
              Here you can keep track on your daily activities and your habits
            </p>
            <br />
          </div>
          <div className="mt-36">
            <img src={img3} alt="" className="shadow-md  rounded-3xl m-4 " />
            <img
              src={img4}
              alt=""
              className="shadow-md  rounded-3xl m-4 ml-56"
            />
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${img8})` }}
        className="bg-no-repeat bg-right-top bg-gray-100 h-screen"
      >
        <div className="flex ">
          <div className="absolute z-10">
            <img
              src={img6}
              alt=""
              className="shadow-md  rounded-3xl  mt-64 ml-96"
            />
            <img
              src={img7}
              alt=""
              className="shadow-md  rounded-3xl mt-2 ml-52 "
            />
          </div>
          <div>
            <img src={img5} alt="" className="shadow-md  rounded-3xl m-4 " />
          </div>
          <div className=" mt-36 ml-72 ">
            <p className="leading-10 text-4xl font-sans font-normal">
              Mood Tracker?
            </p>
            <p className="text-2xl font-sans font-normal">
              Yes, you can also track your mood during the whole year.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
