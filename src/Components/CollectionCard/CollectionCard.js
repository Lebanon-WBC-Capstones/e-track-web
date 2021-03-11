import React from 'react';
import starredIcon from '../../assets/icons/Star1.png';
import collection from '../../Constants/collection.js';

export default function CollectionCard({ card, sendCard }) {
  const type = collection.find((el) => el.id === card.type.id);
  return (
    <div
      className={`bg-${type.color} w-80 m-2 p-2 shadow-lg rounded-xl  `}
      onClick={() => sendCard(card.id)}
    >
      <p className="text-3xl text-center font-bold">{card.date}</p>
      <p className="text-1xl text-center font-light">{type.name}</p>

      <div className=" h-20 overflow-y-hidden overflow-x-hidden">
        <p className="text-2xl text-center font-semibold">{card.text}</p>
      </div>
      <div className="flex justify-between p-2 w-10 h-10">
        {card.starred === true && (
          <img
            src={starredIcon}
            alt="starred"
            ClassName="absolute right-0 bottom-0"
          />
        )}
      </div>
    </div>
  );
}
