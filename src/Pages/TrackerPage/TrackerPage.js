import React, { useState } from 'react';
import HabitTrackerItem from '../../Components/HabitTracker/HabitTrackerItem.js';
import { trackers } from '../../data.js';
import FloatingBtn from '../../Components/floatingBtn/floatingBtn.js';
import HabitTrackerForm from '../../Components/HabitTracker/HabitTrackerForm.js';

function TrackerPage() {
  const [showForm, setShowForm] = useState(false);

  function AddNewEvents() {
    setShowForm(true);
  }

  function FilterProgress() {
    const a = trackers.map((el) => {
      return el.track.filter((track) => track.status === 'checked');
    });
    for (let i = 0; i < a.length; i++) {
      if (a[i].length === trackers[i].track.length) console.log(a[i]);
    }
    //console.log(a);
  }

  return (
    <>
      <div className="flex flex-col items-center mx-9 my-5 h-5/6 px-10">
        <div className="flex justify-between  py-4 w-full rounded-xl shadow-md mx-8 h-20 bg-white px-7 mt-6">
          <input
            className="w-8/12 border-2 border-gray-400 p-4 mb-8 mt-1 rounded-lg"
            type="text"
            placeholder="Search"
          />
          <div className=" bg-primary rounded-full w-7 h-7 m-2">
            <button
              type="button"
              onClick={() => {
                const a = trackers.map((el) => {
                  return el.track.filter((track) => track.status === 'checked');
                });

                a.map((obj, index) => {
                  if (obj.length === trackers[index].track.length) {
                    return (
                      <div className="h-5/6 w-full items-center overflow-y-scroll p-4  mb-8 mt-1 rounded-lg mx-9  my-5  ">
                        <div>
                          {trackers.map((el, index) => {
                            return (
                              <HabitTrackerItem
                                title={el.title}
                                duration={el.track}
                                click={function c() {
                                  alert(`Hello `);
                                }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                });

                //   for (let i=0;i<a.length;i++){
                //     if(a[i].length===trackers[i].track.length)
                //     {
                //       console.log(trackers[i].title)

                //     //   return (
                //     //     <HabitTrackerItem
                //     //       title={trackers[i].title}
                //     //       duration={trackers[i].track}
                //     //       click={function c() {
                //     //         alert(`Hello`);
                //     //       }}
                //     //     />
                //     //   );
                //     // }
                //   }
                //  }
              }}
              className="text-gray-800 text-s pl-8 mt-1 px-8"
            >
              Completed
            </button>
          </div>

          <div className=" bg-gray-300 rounded-full w-7 h-7 m-2 mx-28">
            <button
              type="button"
              onClick={() => {
                alert('Filter ongoing Habits!');
              }}
              className="text-gray-800 text-s pl-8 mt-1 px-8"
            >
              ongoing
            </button>
          </div>
        </div>

        <div className="h-5/6 w-full items-center overflow-y-scroll p-4  mb-8 mt-1 rounded-lg mx-9  my-5  ">
          {/*<div>
            {trackers.map((el, index) => {
              return (
                <HabitTrackerItem
                  title={el.title}
                  duration={el.track}
                  click={function c() {
                    alert(`Hello ${el.track[index].status}`);
                  }}
                />
              );
            })}
          </div>*/}
        </div>
      </div>

      <div>
        <FloatingBtn onClick={AddNewEvents} />
      </div>
      {showForm && <HabitTrackerForm setShowForm={setShowForm} />}
    </>
  );
}
export default TrackerPage;
