import React from 'react';
import imgIcon from '../../assets/icons/image.png';
import starredIcon from '../../assets/icons/Star.png';

function CollectionCard({ card }) {
  return (
  <div className={`bg-${card.type.color}-200 w-80 m-2 p-2 shadow-2xl rounded-xl`}>
       <p className="text-4xl text-center font-bold">{card.date}</p>
       <p className="text-2xl text-center font-light">{card.type.name}</p>
       <p className="text-2xl text-center font-semibold"><br/>{card.text}</p>
       <div className="flex justify-between p-2">
         { card.img===true && <img src={imgIcon} alt="icon" ClassName="absolute left-0 bottom-0"/>}
         { card.starred===true && <img src={starredIcon} alt="starred" ClassName="absolute right-0 bottom-0 "/>}
       </div>
  </div>
  )}
  export default CollectionCard;

