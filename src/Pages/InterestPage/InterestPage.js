import React, { useState, useRef, useEffect } from 'react';
import Addnew from '../../assets/images/Addnew.png';
import Search from '../../assets/icons/Search.png';
import InterestItem from './item.js';
import TrackerItem from './trackerItem.js';
import { interest } from '../../data.js';
// import { searchFilter } from './Filter'
const InterestPage = () => {
  // const [formData, setFormData] = useState({
  //   Goal: '',
  //   Dealine: '',
  // });
  const [element, setElement] = useState(interest[0]);

  const changeElement = (id) => {
    console.log(id);
    setElement(interest.find((el) => el.id === id));
  };
  // const updateFormData = (event) =>
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });

  // const { Goal, Deadline } = formData;

  return (
    <div className="h-5/6   flex justify-items-center mx-9 my-5">
      <div className="bg-white shadow m-2 w-4/12 h-full border rounded-lg">
        <div className="flex justify-center font-bold text-2xl p-6">
          My Trackers
        </div>
        <div className="p-3 opacity-50  shadow-sm w-100 flex items-center justify-between ">
          <div className="flex w-4/6">
            <div className="flex justify-between w-11/12">
              <h1 className="font-medium m-2 text-Grey">Title</h1>
              <div
                className={`  m-2 w-6 rounded-full flex justify-center items-center `}
              >
                Done
              </div>
            </div>
          </div>
          <p>Deadline</p>
        </div>
        <div className=" shadow-sm w-100 ">
          <div>
            {interest.length === 0
              ? null
              : interest.map((el) => {
                  return (
                    <TrackerItem
                      title={el.title}
                      deadline={el.deadline}
                      completeditems={el.completedItems}
                      id={el.id}
                      changeElement={changeElement}
                      // changeItem={checkTodo}
                      // deleteItem={deleteTodo}
                    />
                  );
                })}
          </div>
          <div className="opacity-30 flex items-center">
            <form className="w-full flex p-4" autoComplete="off">
              <img
                className="h-5 w-5 mr-5 place-self-center cursor-pointer"
                src={Addnew}
                alt="add"
                // onClick={(e) => {
                //   document.getElementById('input-todo').focus();
                // }}
              />
              <p className="w-full">Add new Tracker</p>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white shadow m-2 w-8/12 h-full border rounded-lg ">
        <div className="flex justify-center w-full">
          <div className="m-3  p-2 w-11/12 flex border shadow rounded 2xl:border-solid border-gray-300 block">
            <input
              className="  w-11/12 focus-within:border-transparent "
              // onChange={(e) => updateFormData(e)}
              placeholder="Search"
              type="search"
              name=""
              required
            />
            <img
              className="h-5 w-5  ml-5 place-self-center cursor-pointer"
              src={Search}
              alt="add"
              // onClick={(e) => {
              //   document.getElementById('input-todo').focus();
              // }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          {element.items.length === 0
            ? null
            : element.items.map((el) => {
                return (
                  <InterestItem
                    item={el}
                    key={el.id}
                    // changeItem={checkTodo}
                    // deleteItem={deleteTodo}
                  />
                );
              })}
        </div>
        <div className="p-3 shadow-sm w-100 ">
          <div className="opacity-30 flex items-center">
            <form className="w-full flex" autoComplete="off">
              <img
                className="h-5 w-5 mr-5 place-self-center cursor-pointer"
                src={Addnew}
                alt="add"
                // onClick={(e) => {
                //   document.getElementById('input-todo').focus();
                // }}
              />
              <p className="w-full">Add new Item</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InterestPage;
