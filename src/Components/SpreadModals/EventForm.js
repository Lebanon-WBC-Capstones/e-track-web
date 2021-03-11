//when adding new event the object will be printed in the console since we dont have a globale state to add it to

import EventsType from '../../Constants/EventsType.js';

import React, { useRef, useState, useContext } from 'react';
import { StateContext } from '../../StateProvider.js';
import { useTranslation } from 'react-i18next';

export default function EventForm({ setShowForm }) {
  const [state, dispatch] = useContext(StateContext);

  const { t } = useTranslation();

  const title = useRef(null);
  const description = useRef(null);
  const date = useRef(null);
  const [type, setType] = useState(0);

  function AddEvent(e) {
    e.preventDefault();

    let obj = {
      id: new Date().getTime(),
      title: title.current.value,
      description: description.current.value,
      date: new Date(date.current.value).toDateString(),
      type_id: type,
    };
    let newData = [...state.events, obj];
    dispatch({ type: 'SET_EVENTS', payload: newData });
    setShowForm(false);
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
                {t(`SpreadForm.event`)}
              </h2>
              <form onSubmit={AddEvent}>
                <div className="mb-4">
                  <input
                    ref={title}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="title"
                    type="text"
                    placeholder={t(`SpreadForm.event_name`)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    ref={description}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="description"
                    type="text"
                    placeholder={t(`SpreadForm.event_description`)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    required
                    ref={date}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="date"
                    type="date"
                    placeholder={t(`SpreadForm.event_date`)}
                  />
                </div>
                <div className="flex items-center justify-around m-3">
                  <p>{t(`SpreadForm.event_type`)}</p>
                  {EventsType.map((el) => {
                    return (
                      (state.profile.gender === 'female'
                        ? true
                        : el.gender === 'all') && (
                        <label
                          key={el.id}
                          className="flex flex-col items-center mt-3 justify-center justify-items-center content-center"
                        >
                          <button
                            style={{ backgroundColor: el.color }}
                            onClick={(e) => {
                              e.preventDefault();
                              setType(el.id);
                            }}
                            className="flex items-center place-items-center content-center text-center rounded-full h-5 w-5 shadow-md p-3"
                          ></button>
                          <span className="ml-2 text-gray-700 pt-1">
                            {el.name}
                          </span>
                        </label>
                      )
                    );
                  })}
                </div>
                <div className="p-5 pb-0">
                  <input
                    type="submit"
                    value={t(`SpreadForm.event_btn`)}
                    className={`shadow-md bg-theme${state.profile.theme_id} hover:bg-gray-100 hover:text-theme${state.profile.theme_id} text-white font-bold py-3 px-7 rounded-full`}
                  />
                </div>
              </form>
            </div>

            <div className="absolute right-0">
              <button
                className="background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
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
