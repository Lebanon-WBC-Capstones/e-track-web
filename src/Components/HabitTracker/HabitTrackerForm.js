import React from 'react';
import EventsType from '../../Constants/EventsType.js';

import { useRef, useState, useContext } from 'react';
import { StateContext } from '../../StateProvider.js';

export default function HabitTrackerForm({ setShowForm }) {
  const [state, dispatch] = useContext(StateContext);

  const title = useRef(null);
  const duration = useRef(null);
  const today = new Date();

  function AddTracker(e) {
    e.preventDefault();
    let track = [];
    for (let i = 1; i <= duration.current.value; i++) {
      track.push({
        id: i,
        status: 'notYet',
        date: new Date(
          today.setDate(new Date().getDate() + i - 1)
        ).toDateString(),
      });
    }
    let obj = {
      id: new Date().getTime(),
      title: title.current.value,
      duration: duration.current.value,
      StartDate: new Date().toDateString(),
      completed: false,
      track: track,
    };
    let newData = [...state.trackers, obj];
    dispatch({ type: 'SET_Trackers', payload: newData });
  }

  return (
    <>
      <div
        id="myModal"
        className="justify-center modal items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-5/12 h-6/12 my-6 mx-auto max-w-3xl modal-overlay">
          <div className=" rounded-lg h-full shadow-lg relative modal-close flex flex-col w-full text-center bg-white outline-none focus:outline-none">
            <div className=" items-start justify-between px-20 py-8 rounded-t modal-content">
              <h2 className="font-medium text-center pb-3 text-xl">
                Add new Habit
              </h2>
              <form onSubmit={AddTracker}>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="title"
                    type="text"
                    placeholder="Title"
                    required
                    ref={title}
                  />
                </div>

                <div className="mb-4">
                  <select
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="title"
                    placeholder="duration"
                    required
                    ref={duration}
                  >
                    <option value="" disabled selected>
                      Choose duration
                    </option>
                    <option value="7">7</option>
                    <option value="14">14</option>
                    <option value="30">30</option>
                  </select>
                </div>

                <div className="p-5 pb-0">
                  <input
                    type="submit"
                    value="Add Habit"
                    className="shadow-md bg-primary hover:bg-gray-100 hover:text-primary text-white font-bold py-3 px-7 rounded-full "
                  />
                </div>
              </form>
            </div>

            <div className="absolute right-0">
              <button
                className="background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 "
                type="button"
                style={{ transition: 'all .15s ease' }}
                onClick={() => setShowForm(false)}
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black z-10 bg-red w-screen h-sceen"></div>
    </>
  );
}
