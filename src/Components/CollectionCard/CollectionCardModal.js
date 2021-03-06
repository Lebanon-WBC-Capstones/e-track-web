import React from 'react';
import Bin from '../../assets/icons/Bin.png';
import Star from '../../assets/icons/Star.png';
import FullStar from '../../assets/icons/Star1.png';
import collection from '../../Constants/collection.js';
import { StateContext } from '../../StateProvider.js';
import { useContext, useState } from 'react';

export default function CollectionCardModal({ card, setShowModal }) {
  const type = collection.find((el) => el.id === card.type.id);

  const [state, dispatch] = useContext(StateContext);
  const [star, setStar] = useState(card.starred);

  function deleteCard(id) {
    let newData = state.collections.filter((el) => el.id !== id);
    dispatch({ type: 'SET_COLLECTION', payload: newData });
    setShowModal(false);
  }

  function changeStar(e) {
    e.preventDefault();
    setStar(!star);
    let newData = state.collections.filter((el) => el.id !== card.id);
    let obj = {
      date: card.date,
      id: card.id,
      type: { ...card.type },
      text: card.text,
      starred: !star,
    };
    newData.push(obj);
    dispatch({ type: 'SET_COLLECTION', payload: newData });
  }

  return (
    <div>
      <div className="justify-center modal items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-5/12 h-6/12 my-6 mx-auto max-w-3xl modal-overlay">
          <div className=" rounded-lg h-full shadow-lg relative modal-close flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className=" items-start justify-between px-20 py-8 h-60 rounded-t modal-content overflow-y-scroll">
              <h3 className="text-3xl font-semibold text-center ">
                {card.date}
              </h3>
              <h5 className="text-1xl font-light my-1 text-center ">
                {type.name}
              </h5>
              <p className="my-4 text-gray-600 leading-relaxed font-semibold">
                {card.text}
              </p>
            </div>

            <div className="flex p-6  rounded-b items-center w-full">
              <div className="flex justify-between w-full">
                <button
                  className="background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={changeStar}
                >
                  <img
                    src={star ? FullStar : Star}
                    alt="star"
                    className="w-7 h-7"
                  />
                </button>
                <button
                  className="background-transparent  font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                  onClick={() => deleteCard(card.id)}
                >
                  {<img src={Bin} alt="delete" />}
                </button>
              </div>
            </div>
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
