import React from 'react';
import notrack from '../../assets/images/NoTrack.png';
import Button from '../../Components/button/button.js';
function noTrack() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center relative">
          <img
            src={notrack}
            className="  bg-center bg-contain bg-white pb-20 px-16 z-0 mt-20 w-10/12 rounded-xl shadow-md"
          />
          <p className="text-xl z-10 absolute bottom-20 -m-4">
            <b> No Trackers Yet!</b>
          </p>
          <div className="text-xs absolute -m-8  bottom-12">
            <Button
              text="Add a new Tracker"
              onClick={() => {
                alert('Hello!');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default noTrack;
