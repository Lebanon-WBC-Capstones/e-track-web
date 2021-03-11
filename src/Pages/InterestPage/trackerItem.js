import { StateContext } from '../../StateProvider.js';
import React, { useContext } from 'react';

function TrackerItem({
  title,
  deadline,
  completeditems,
  changeElement,
  id,
  active,
}) {
  const [state] = useContext(StateContext);
  let color = 'white';
  if (active) {
    color = state.profile.theme_id;
  }

  return (
    <div
      className={`p-3  bg-theme${color} cursor-pointer shadow-sm w-100 flex items-center justify-between`}
      onClick={() => changeElement(id)}
    >
      <div className="flex w-4/6">
        <div className="flex justify-between w-11/12">
          <h1 className="font-medium m-2 text-Grey">{title}</h1>
          <div
            className={` border m-2 w-6 rounded-full flex justify-center items-center `}
          >
            {completeditems}
          </div>
        </div>
      </div>
      <p>{deadline}</p>
    </div>
  );
}

export default TrackerItem;
