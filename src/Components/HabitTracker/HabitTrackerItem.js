import React, { useContext, useState } from 'react';
import { StateContext } from '../../StateProvider';
import Toast from '../../Components/Toast/Toast.js';
import Bin from '../../assets/icons/Bin.png';

const HabitTrackerItem = ({ tracker, click }) => {
  const [state, dispatch] = useContext(StateContext);
  const [showToast, setShowToast] = useState(false);

  function deleteTracker(id) {
    let newData = state.trackers.filter((el) => el.id !== id);
    newData = newData.sort((a, b) => (a.id > b.id ? 1 : -1));
    dispatch({ type: 'SET_Trackers', payload: newData });
  }

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
      <div className="absolutemax-w-5xl mx-auto my-4 border-b-1 box-border h-auto w-auto p-4 pb-4 rounded-xl bg-white shadow-lg flex justify-between">
        <div>
          <p className={`text-Grey text-2xl pb-2`}>{tracker.title}</p>

          <div className="flex">
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
                      className="right-2 w-1/6 align-center items-center align-middle content-center flex "
                      key={el.id}
                    >
                      <div className="w-2 bg-grey-light rounded items-center align-middle align-center flex-1 ">
                        <div
                          className={`bg-${color} text-xs leading-none -mx-2 py-1 text-center text-grey-darkest rounded w-6 z-0 `}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="background-transparent  font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: 'all .15s ease' }}
          onClick={() => deleteTracker(tracker.id)}
        >
          {<img src={Bin} alt="delete" />}
        </button>
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
