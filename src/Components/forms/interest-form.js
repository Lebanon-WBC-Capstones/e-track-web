import React, { useState, useRef, useContext } from 'react';
import { StateContext } from '../../StateProvider.js';

const Form = ({ setShowForm }) => {
  const [state, dispatch] = useContext(StateContext);

  const title = useRef(null);

  const deadline = useRef(null);
  const goal = useRef(null);

  function add(e) {
    e.preventDefault();

    let obj = {
      id: new Date().getTime(),
      title: title.current.value,
      deadline: deadline.current.value,
      goal: goal.current.value,
      completedItems: 0,
      completed: false,
      items: [],
    };

    let newData = [...state.interest, obj];
    dispatch({ type: 'SET_INTEREST', payload: newData });
    setShowForm(false);
  }

  return (
    <>
      <div className="justify-center modal items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <form
          className=" p-5 bg-white w-6/12 h-auto rounded border sm:border-solid border-gray-200 "
          autoComplete="off"
          onSubmit={add}
        >
          <div className="object-right w-full ">
            <div className="w-full flex justify-end">
              <button
                className=" background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: 'all .15s ease' }}
                onClick={() => setShowForm(false)}
              >
                x
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <input
              className="w-full m-3 p-2 border rounded 2xl:border-solid border-gray-300 block"
              ref={title}
              placeholder="Title"
              type="text"
              name="Title"
              required
            />
          </div>
          <div className="flex justify-between w-full">
            <input
              className=" m-3 p-2 w-2/5 border rounded 2xl:border-solid border-gray-300 block"
              ref={goal}
              min="1"
              placeholder="Goal"
              type="number"
              name="Goal"
              required
            />
            <input
              className="  m-3 p-2 w-2/5  border rounded 2xl:border-solid border-gray-300 block"
              ref={deadline}
              placeholder="Deadline"
              type="date"
              name="Deadline"
              onfocus="(this.type='date')"
              required
            />
          </div>

          <div className="flex justify-center p-2">
            <input
              type="submit"
              value="Add Tracker"
              className={`shadow-md bg-primary hover:bg-gray-100 hover:text-primary text-white font-bold py-3 px-7 rounded-full`}
            />
          </div>
        </form>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black z-10 bg-red w-screen h-sceen"></div>
    </>
  );
};

export default Form;
{
  /* <div className="absolute right-0">
              <button
                className="background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: 'all .15s ease' }}
                onClick={() => setShowForm(false)}
              >
                x
              </button>
            </div> */
}

// className="justify-center modal items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
// className="relative w-5/12 h-6/12 my-6 mx-auto max-w-3xl modal-overlay"
