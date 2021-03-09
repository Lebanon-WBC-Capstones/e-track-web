import React, { useState, useContext, useEffect } from 'react';
import HabitTrackerItem from '../../Components/HabitTracker/HabitTrackerItem.js';

import FloatingBtn from '../../Components/floatingBtn/floatingBtn.js';
import HabitTrackerForm from '../../Components/HabitTracker/HabitTrackerForm.js';

import { StateContext } from '../../StateProvider.js';

function TrackerPage() {
  const [showForm, setShowForm] = useState(false);
  const [state] = useContext(StateContext);
  const [filterTracker, setfilterTracker] = useState(state.trackers);
  const [searchTerm, setSearchTerm] = useState('');

  function AddNewEvents() {
    setShowForm(true);
  }

  function filterProgress() {
    setfilterTracker(
      state.trackers.filter((track) => track.completed === false)
    );
  }
  function filterCompleted() {
    setfilterTracker(
      state.trackers.filter((track) => track.completed === true)
    );
  }

  function showAll() {
    setfilterTracker(state.trackers);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value.trim().toLowerCase());

    if (searchTerm === '') {
      setfilterTracker(state.trackers);
    } else {
      setfilterTracker(
        state.trackers.filter((item) => {
          return item.title.toLowerCase().indexOf(searchTerm) !== -1;
        })
      );
    }
  }

  // const editSearchTerm=(e)=>{
  //   setSearchTerm(e.target.value)
  // }
  // const dynamicSearch=()=>{
  //   return filterTracker.filter(title=>title.toLowerCase().includes(searchTerm.toLowerCase()))
  // }

  return (
    <>
      <div className="flex flex-col items-center mx-9 my-5 h-5/6 px-10">
        <div className="flex justify-between py-4 w-full rounded-xl shadow-md mx-8 h-20 bg-white px-7 mt-6">
          <input
            className="w-8/12 border-2 border-gray-400 p-4 mb-8 mt-1 rounded-lg"
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
          <div className=" bg-primary rounded-full w-7 h-7 m-2">
            <button
              type="button"
              onClick={filterCompleted}
              className="text-gray-800 text-s pl-8 mt-1 px-8"
            >
              Completed
            </button>
          </div>

          <div className=" bg-gray-300 rounded-full w-7 h-7 m-2 mx-28">
            <button
              type="button"
              onClick={filterProgress}
              className="text-gray-800 text-s pl-8 mt-1 px-8"
            >
              ongoing
            </button>
          </div>

          <div className=" bg-blue-400 rounded-full w-7 h-7 m-2 mx-24">
            <button
              type="button"
              onClick={showAll}
              className="text-blue-400 text-s  mt-1 px-8 "
            >
              All tracks
            </button>
          </div>
        </div>

        <div className="h-5/6 w-full items-center overflow-y-scroll p-4 mb-8 mt-1 rounded-lg mx-9 my-5">
          <div>
            {filterTracker.map((el) => {
              return (
                <HabitTrackerItem
                  title={el.title}
                  duration={el.track}
                  click={function c() {
                    alert(`Hello`);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <FloatingBtn onClick={AddNewEvents} />
      </div>
      {showForm && <HabitTrackerForm setShowForm={setShowForm} />}
    </>
  );
}
export default TrackerPage;
