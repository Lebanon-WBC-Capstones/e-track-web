import React, { useRef, useState, useContext } from 'react';
import Star from '../../assets/icons/Star1.png';
import FullStar from '../../assets/icons/Star.png';
import collection from '../../Constants/collection.js';
import { StateContext } from '../../StateProvider.js';

export default function NewCardModal({ setShowModal }) {
  const [state, dispatch] = useContext(StateContext);
  let text = useRef('');
  let typeId = useRef(1);
  let date = new Date().toDateString();
  let [starred, setStar] = useState(false);

  function addCollection(e) {
    e.preventDefault();
    let obj = {
      date: date,
      id: new Date().getTime(),
      type: { id: typeId.current.value },
      text: text.current.value,
      starred: starred,
    };
    let newData = [...state.collections, obj];
    dispatch({ type: 'SET_COLLECTION', payload: newData });
    setShowModal(false);
  }

  return (
    <div>
      <div className="justify-center modal items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-5/12 h-6/12 my-6 mx-auto max-w-3xl modal-overlay">
          <div className=" rounded-lg h-full shadow-lg relative modal-close flex flex-col w-full text-center bg-white outline-none focus:outline-none">
            <form onSubmit={addCollection}>
              <div className=" items-start justify-between px-20 py-8 h-60 rounded-t modal-content">
                <h3 className="text-3xl font-semibold pb-5">{date}</h3>
                <select
                  defaultValue={typeId}
                  id="CardType"
                  className="border mb-5 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ref={typeId}
                >
                  {collection.map((el, index) => (
                    <option key={index} value={el.id}>
                      {el.name}
                    </option>
                  ))}
                </select>
                <textarea
                  class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  rows="4"
                  ref={text}
                  required
                ></textarea>
              </div>

              <div className="flex p-6 rounded-b items-center w-full">
                <div className="flex justify-between w-full">
                  <button
                    className="background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: 'all .15s ease' }}
                    onClick={() => {
                      setStar(!starred);
                    }}
                  >
                    {<img src={starred ? FullStar : Star} alt="star" />}
                  </button>
                  <div>
                    <button
                      className={`shadow-md text-theme${state.profile.theme_id} text-sm font-bold px-6 py-2 rounded-full`}
                      type="button"
                      style={{ transition: 'all .15s ease' }}
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <input
                      className={`shadow-md bg-theme${state.profile.theme_id} mx-5 text-white text-sm font-bold px-6 py-2 rounded-full`}
                      type="button"
                      type="submit"
                      value="Save"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="absolute right-0">
              <button
                className="background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: 'all .15s ease' }}
                onClick={() => setShowModal(false)}
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black z-10 bg-red w-screen h-sceen"></div>
    </div>
  );
}
