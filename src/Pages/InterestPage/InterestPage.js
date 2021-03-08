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
        <div className=" shadow-sm w-100 ">
          <div>
            {interest.length === 0
              ? null
              : interest.map((el) => {
                  return (
                    <TrackerItem
                      item={el.title}
                      date="12/12/2000"
                      // key={el.id}
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
              <input
                type="text"
                id="input-todo"
                placeholder="Add new Tracker"
                name="title"
                className="w-full"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white shadow m-2 w-8/12 h-full border rounded-lg ">
        <div className="flex justify-center w-full">
          <div className="m-3 mr-0 p-2  flex border shadow rounded 2xl:border-solid border-gray-300 block">
            <input
              className="  w-4/5 focus-within:border-transparent "
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
          <input
            className="  m-3 p-2 w-2/5  border rounded 2xl:border-solid border-gray-300 block"
            // onChange={(e) => updateFormData(e)}
            placeholder="filter"
            type="text"
            name="Deadline"
            onfocus="(this.type='date')"
            selectBoxOptions="Canada;Denmark;Finland;Germany;Mexico"
          />
        </div>
        <div className="flex flex-col items-center">
          {interest.length === 0
            ? null
            : interest.map((el) => {
                return (
                  <InterestItem
                    item={el.title}
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
              <input
                type="text"
                id="input-todo"
                placeholder="Add new Interest"
                name="title"
                className="w-full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InterestPage;
