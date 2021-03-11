import React, { useState, useContext, useEffect } from 'react';
import HabitTrackerItem from '../../Components/HabitTracker/HabitTrackerItem.js';

import FloatingBtn from '../../Components/floatingBtn/floatingBtn.js';
import HabitTrackerForm from '../../Components/HabitTracker/HabitTrackerForm.js';

import { StateContext } from '../../StateProvider.js';

function TrackerPage() {
  const [showForm, setShowForm] = useState(false);
  const [state, dispatch] = useContext(StateContext);
  const [filterTracker, setfilterTracker] = useState(state.trackers);

  useEffect(() => {
    showAll();
  }, [state.trackers]);

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
  function hideModel() {
    setShowForm(false);
    setfilterTracker(state.trackers);
  }

  function handleSearch(e) {
    const res = e.target.value.trim().toLowerCase();
    if (res === '') {
      setfilterTracker(state.trackers);
    } else {
      setfilterTracker(
        state.trackers.filter((item) => {
          return item.title.toLowerCase().indexOf(res) !== -1;
        })
      );
    }
  }

  function changeTracker(id) {
    let tracker = state.trackers.find((el) => el.id === id);
    let trackerItem = tracker.track.map((el) => {
      if (el.date === new Date().toDateString())
        return {
          id: el.id,
          status: 'checked',
          date: el.date,
        };
      else if (new Date(el.date) < new Date() && el.status === 'notYet') {
        return { id: el.id, status: 'unchecked', date: el.date };
      } else return el;
    });
    let obj = {
      id: tracker.id,
      title: tracker.title,
      duration: tracker.duration,
      StartDate: tracker.StartDate,
      completed: false,
      track: trackerItem,
    };
    let newData = [...state.trackers.filter((el) => el.id != id), obj];
    newData = newData.sort((a, b) => (a.id > b.id ? 1 : -1));
    dispatch({ type: 'SET_Trackers', payload: newData });
  }

  return (
    <>
      <div className="flex flex-col items-center mx-9 my-5 h-5/6">
        <div className="flex justify-between items-center py-4 w-full rounded-xl shadow-md mx-8 h-16 bg-white px-7">
          <input
            className="w-8/12 border-2 border-gray-400 p-1 rounded-lg "
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={filterCompleted}
          >
            <div className="bg-primary rounded-full w-5 h-5 m-2"></div>
            <p className="text-gray-800 text-s">Completed</p>
          </div>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={filterProgress}
          >
            <div className=" bg-gray-300 rounded-full w-5 h-5 m-2"></div>
            <p className="text-gray-800 text-s">ongoing</p>
          </div>

          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={showAll}
          >
            <div className=" bg-blue-400 rounded-full w-5 h-5 m-2"></div>
            <p className="text-blue-400 text-s">All tracks</p>
          </div>
        </div>

        <div className="h-5/6 w-full items-center overflow-y-scroll rounded-lg px-10 mt-2">
          <div>
            {filterTracker.map((el) => {
              return (
                <HabitTrackerItem
                  key={el.id}
                  tracker={el}
                  click={changeTracker}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <FloatingBtn onClick={AddNewEvents} />
      </div>
      {showForm && <HabitTrackerForm setShowForm={hideModel} />}
    </>
  );
}
export default TrackerPage;
