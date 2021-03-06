import React from 'react';
import collection from '../../Constants/collection.js';

function CollectionListItem({ number, type, collectionFilter }) {
  const collectionType = collection.find(
    (collection) => collection.id === type.id
  );
  return (
    <div
      className=" flex justify-between border-b-2 w-auto px-5"
      onClick={() => collectionFilter(type.id)}
    >
      <div className="m-2">{collectionType.name}</div>
      <div
        className={`  m-2 w-6 rounded-full flex justify-center items-center bg-${collectionType.color}`}
      >
        {number}
      </div>
    </div>
  );
}
export default CollectionListItem;
