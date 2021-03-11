import React, { useContext } from 'react';
import { StateContext } from '../../StateProvider';
import Toast from '../../Components/Toast/Toast.js';
import { useState } from 'react/cjs/react.development';

const HabitTrackerItem = ({ tracker, click }) => {
  const [state, dispatch] = useContext(StateContext);
  const [showToast, setShowToast] = useState(false);
  let color = '';

  function check(id) {
    let today = new Date().toDateString();
    if (tracker.track.find((el) => el.id === id).date === today) {
      click(tracker.id);
    } else {
      setShowToast(true);
    }
  }

  return (
    <>
      <div className="absolutemax-w-5xl mx-auto my-4 border-b-1 box-border h-auto w-auto p-4 pb-4 rounded-xl bg-white shadow-lg">
        <p className={`text-theme${state.profile.theme_id} text-2xl pb-4`}>
          {tracker.title}
        </p>

        <div className="flex pb-3">
          {tracker.track.map((el, i) => {
            if (el.status === 'notYet') color = 'lightGrey';
            else if (el.status === 'checked') color = 'primary ';
            else color = 'red-400';
            return (
              <div className="flex" key={el.id}>
                <div className="z-20">
                  <div
                    id={el.id}
                    onClick={() => check(el.id)}
                    className={`bg-${color} w-6 h-6  mx-auto rounded-full text-lg text-white flex items-center`}
                  >
                    <span className="text-black text-center w-full text-xs">
                      <i className="fa fa-check w-full fill-current white"></i>

                      {el.id}
                    </span>
                  </div>
                </div>
                {i === tracker.track.length - 1 ? null : (
                  <div
                    className="relative right-2 w-1/6 align-center items-center align-middle content-center flex "
                    key={el.id}
                  >
                    <div className="w-2 bg-grey-light rounded items-center align-middle align-center flex-1 ">
                      <div
                        className={`bg-${color} text-xs leading-none py-1 text-center text-grey-darkest rounded w-6 z-0 `}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {showToast && (
        <Toast
          text="You cannot check this item"
          setShowToast={setShowToast}
          alert={true}
        />
      )}
    </>
  );
};
export default HabitTrackerItem;
