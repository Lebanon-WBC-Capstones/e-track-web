import React from 'react';
import notrack from '../../assets/images/noTrack.png';
import Button from '../../Components/button/button.js';
function NoTrack({ onClick }) {
  return (
    <div className="h-5/6 flex mx-9 my-5 justify-center ">
      <div className="bg-white shadow m-2 w-2/5 h-full border rounded-lg">
        <div className="flex flex-col items-center ">
          <div className="flex flex-col items-center relative">
            <img src={notrack} className="  px-16 z-0 mt-20 w-10/12  " />
            <p className="text-xl z-10">
              <b> No Trackers Yet!</b>
            </p>
            <div className="text-xs ">
              <Button text="Add a new Tracker" onClick={onClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoTrack;
