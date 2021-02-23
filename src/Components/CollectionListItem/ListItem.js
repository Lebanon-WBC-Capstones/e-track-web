import React from 'react';

function ListItem({ text, number, color }) {
  return (
    <div className=" flex justify-between border-b-2 w-auto ">
      <div className=" m-2 ">{text}</div>
      <div
        style={{ backgroundColor: color }}
        className="m-2 w-6 rounded-full object-center"
      >
        {' '}
        {number}{' '}
      </div>
    </div>
  );
}
export default ListItem;
