import React from 'react';
import imgIcon from '../../assets/icons/image.png';
import starredIcon from '../../assets/icons/Star.png';
import collection from '../../Constants/collection.js'

export default function CollectionCard({ card }) {
  return(
    collection.map((el) => {
    if(el.id===card.type.id){
    return (
  <div className={`bg-${el.color} w-80 m-2 p-2 shadow-2xl rounded-xl`}>
       <p className="text-4xl text-center font-bold">{card.date}</p>
       <p className="text-2xl text-center font-light">{el.name}</p>
       <p className="text-2xl text-center font-semibold"><br/>{card.text}</p>
       <div className="flex justify-between p-2">
         { card.img===true && <img src={imgIcon} alt="icon" ClassName="absolute left-0 bottom-0"/>}
         { card.starred===true && <img src={starredIcon} alt="starred" ClassName="absolute right-0 bottom-0 "/>}
       </div>
  </div>
    );
  }
    })
    );
   }
  
  
