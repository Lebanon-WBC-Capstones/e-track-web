import React, { useState, useContext, useEffect } from 'react';
import HabitTrackerItem from '../../Components/HabitTracker/HabitTrackerItem.js';

import FloatingBtn from '../../Components/floatingBtn/floatingBtn.js';
import HabitTrackerForm from '../../Components/HabitTracker/HabitTrackerForm.js';

import { StateContext } from '../../StateProvider.js';
import { useTranslation } from 'react-i18next';

function TrackerPage() {
  const [showForm, setShowForm] = useState(false);
  const [state, dispatch] = useContext(StateContext);
  const [filterTracker, setfilterTracker] = useState(state.trackers);
  const { t } = useTranslation();

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
        <div className="flex justify-between items-center py-4 w-full rounded-xl shadow-md mx-8 h-16 bg-white px-7 ">
          <input
            className="w-8/12 border-2 border-gray-400 p-1 rounded-lg mx-1"
            type="text"
            placeholder={t(`HabitTrackerPage.search`)}
            onChange={handleSearch}
          />
          <button
            className="background-transparent border-2 p-2 border-primary rounded-lg flex items-center justify-center mx-1 my-2 text-sm outline-none focus:outline-none w-1/5"
            type="button"
            onClick={filterCompleted}
          >
            <p className="px-2 text-primary">
              {' '}
              {t(`HabitTrackerPage.completed`)}
            </p>
          </button>
          <button
            className="background-transparent border-2 p-2 border-gray-400 rounded-lg flex items-center justify-center mx-1 my-2 text-sm outline-none focus:outline-none w-1/5"
            type="button"
            onClick={filterProgress}
          >
            <p className="px-2 text-gray-400">
              {t(`HabitTrackerPage.ongoing`)}
            </p>
          </button>
          <button
            className="background-transparent border-2 p-2 border-blue-400 rounded-lg flex items-center justify-center mx-1 my-2 text-sm outline-none focus:outline-none w-1/5"
            type="button"
            onClick={showAll}
          >
            <p className="px-2 text-blue-400">{t(`HabitTrackerPage.all`)}</p>
          </button>
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
