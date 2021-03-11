import React from 'react';
import imgIcon from '../../assets/icons/image.png';
import starredIcon from '../../assets/icons/Star.png';
import collection from '../../Constants/collection.js';

export default function CollectionCard({ card }) {
  const type = collection.find((el) => el.id === card.type.id)
  return (
    <div className={`bg-${type.color} w-80 m-2 p-2 shadow-2xl rounded-xl`}>
      <p className="text-3xl text-center font-bold">{card.date}</p>
      <p className="text-1xl text-center font-light">{type.name}</p>
      <p className="text-2xl text-center font-semibold">
        <br />
        {card.text}
      </p>
      <div className="flex justify-between p-2">
        {card.starred === true && (
          <img
            src={starredIcon}
            alt="starred"
            ClassName="absolute right-0 bottom-0 "
          />
        )}
      </div>
    </div>
  )
}


