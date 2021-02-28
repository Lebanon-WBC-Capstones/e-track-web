import React, { useState } from 'react';

const HabitItem = ({ title, duration }) => {
  // Creating an array that will handle all the <div> and then we will display only this "progress" array
  const progress = [];
  // Creating strings to hold the classes and the colors
  const bglightGrey =
    'bg-lightGrey w-4 h-4  mx-auto rounded-full text-lg text-white flex items-center';
  const bgprimary =
    'bg-primary w-4 h-4  mx-auto rounded-full text-lg text-white flex items-center';
  const bgred =
    'bg-red-500 w-4 h-4  mx-auto rounded-full text-lg text-white flex items-center';

  for (let i = 1; i <= duration - 1; i++) {
    //the first push is for the rounded circle with the number in it
    progress.push(
      <div className="flex-1" key={i}>
        <div
          id={i}
          onClick={() => {
            if (document.getElementById(i).className === bglightGrey) {
              if (i === 1) document.getElementById(i).className = bgprimary;
              console.log(i);
              for (let j = 1; j < i; j++) {
                if (document.getElementById(j).className === bglightGrey) {
                  document.getElementById(j).className = bgred;
                  document.getElementById(i).className = bgprimary;
                } else document.getElementById(i).className = bgprimary;
              }
            }
          }}
          className="bg-lightGrey w-4 h-4  mx-auto rounded-full text-lg text-white flex items-center"
        >
          <span className="text-black text-center w-full text-xs">
            {i}
            <i className="fa fa-check w-full fill-current white"></i>
          </span>
        </div>
      </div>
    );
    //the second push is for the line between the rounded circles
    progress.push(
      <div
        className="w-1/6 align-center items-center align-middle content-center flex"
        key={Math.random()}
      >
        <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
          <div
            className="bg-primary text-xs leading-none py-1 text-center text-grey-darkest rounded "
            styles="width: 100%"
          ></div>
        </div>
      </div>
    );
  }
  // this last push is only for the last circle, I couldn't add it with the for loop up above
  progress.push(
    <div className="flex-1" key={duration}>
      <div
        id={{ duration }}
        onClick={() => {
          if (document.getElementById({ duration }).className === bglightGrey) {
            document.getElementById({ duration }).className = bgprimary;
            console.log(duration);
            for (let j = 1; j < duration; j++) {
              if (document.getElementById(j).className === bglightGrey) {
                document.getElementById(j).className = bgred;
                document.getElementById({ duration }).className = bgprimary;
              } else
                document.getElementById({ duration }).className = bgprimary;
            }
          }
        }}
        className="bg-lightGrey w-4 h-4  mx-auto rounded-full text-lg text-white flex items-center"
      >
        <span className="text-black text-center w-full text-xs">
          {duration}
          <i className="fa fa-check w-full fill-current white"></i>
        </span>
      </div>
    </div>
  );
  return (
    <div className="max-w-5xl mx-auto my-4 border-b-1 box-border h-auto w-auto p-4 pb-4 rounded-xl bg-white shadow-lg">
      <p className="text-primary text-2xl pb-4">{title}</p>

      <div className="flex pb-3">
        <div className="flex-1"></div>

        {progress}

        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default HabitItem;
