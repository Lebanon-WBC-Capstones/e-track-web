import React from 'react';
import HabitTrackerItem from '../../Components/HabitTracker/HabitTrackerItem.js';
import { trackers } from '../../data.js';
import FloatingBtn from '../../Components/floatingBtn/floatingBtn.js';

function TrackerPage() {
  return (
    <>
      <div className="flex flex-col items-center mx-9 my-5 h-5/6 px-10">
        <div className="flex justify-center  py-4 w-full rounded-xl shadow-md mx-8 h-20 bg-white px-7 mt-6">
          <input
            className="w-8/12 border-2 border-gray-400 p-4 mb-8 mt-1 rounded-lg"
            type="text"
            placeholder="Search"
          />
          <div className=" bg-primary rounded-full w-7 h-7 m-2">
            {' '}
            <p className="text-gray-800 text-s pl-8 mt-1 px-8">
              Completed
            </p>{' '}
          </div>
          <div className=" bg-gray-300 rounded-full w-7 h-7 m-2 mx-28">
            <p className="text-gray-800 text-s pl-8 mt-1 px-8">ongoing</p>
          </div>
        </div>

        <div className="h-5/6 w-full items-center overflow-y-scroll p-4  mb-8 mt-1 rounded-lg mx-9  my-5  ">
          {/*<HabitTrackerItem title="Brushing teeth"  duration= {[ { id: 1, status: 'checked', date: 'Sat Feb 20 2021' },
      { id: 2, status: 'unchecked', date: 'Sun Feb 21 2021' },
      { id: 3, status: 'checked', date: 'Mon Feb 22 2021' },
      { id: 4, status: 'checked', date: 'Tue Feb 23 2021' },
      { id: 5, status: 'checked', date: 'Wed Feb 24 2021' },
      { id: 6, status: 'checked', date: 'Thu Feb 25 2021' },
      { id: 7, status: 'unchecked', date: 'Fri Feb 26 2021' }]}/>*/}
          <div>
            {trackers.map((el, index) => {
              return (
                <HabitTrackerItem
                  title={el.title}
                  duration={el.track}
                  click={function c() {
                    alert(`Hello ${el.track[index].status}`);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <FloatingBtn />
      </div>
    </>
  );
}
export default TrackerPage;
