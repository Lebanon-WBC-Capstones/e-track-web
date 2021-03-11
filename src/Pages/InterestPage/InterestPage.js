import React, { useState, useRef, useEffect, useContext } from 'react';
import Addnew from '../../assets/images/Addnew.png';
import Search from '../../assets/images/Search.png';
import InterestItem from './item.js';
import TrackerItem from './trackerItem.js';
import { StateContext } from '../../StateProvider.js';
import Form from '../../Components/forms/interest-form.js';

const InterestPage = () => {
  const [state, dispatch] = useContext(StateContext);
  const [element, setElement] = useState(state.interest[0]);

  const changeElement = (id) => {
    setElement(state.interest.find((el) => el.id === id));
  };

  const itemtitle = useRef(null);

  function addItem(e) {
    e.preventDefault();
    let Newitems = [...element.items];
    let completed = false;
    if (Newitems.length == element.goal) {
      completed = true;
      alert("You can't add items to a completed tracker");
    } else {
      Newitems.push({
        id: new Date().getTime(),
        title: itemtitle.current.value,
        completed: false,
      });
    }
    let obj = {
      id: element.id,
      title: element.title,
      deadline: element.deadline,
      goal: element.goal,
      completedItems: element.completedItems,
      completed: completed,
      items: Newitems,
    };
    let newData = [...state.interest.filter((el) => el.id != element.id), obj];
    dispatch({ type: 'SET_INTEREST', payload: newData });
    e.target.itemtitle.value = '';
  }

  function deleteItem(e) {
    let Newitems = [...element.items.filter((el) => el.id != e)];

    let obj = {
      id: element.id,
      title: element.title,
      deadline: element.deadline,
      goal: element.goal,
      completedItems: element.completedItems,
      completed: element.completed,
      items: Newitems,
    };
    let newData = [...state.interest.filter((el) => el.id != element.id), obj];
    dispatch({ type: 'SET_INTEREST', payload: newData });
    setElement(state.interest.find((el) => el.id == element.id));
  }

  function check(e) {
    let updateditem = element.items.find((el) => el.id === e);
    updateditem.completed = !updateditem.completed;

    let Newitems = [...element.items.filter((el) => el.id != e)];

    Newitems.push(updateditem);

    let count = Newitems.filter((el) => el.completed === true).length;
    Newitems = Newitems.sort((a, b) => (a.id > b.id ? 1 : -1));

    let obj = {
      id: element.id,
      title: element.title,
      deadline: element.deadline,
      goal: element.goal,
      completedItems: count,
      completed: element.completed,
      items: Newitems,
    };
    let newData = [...state.interest.filter((el) => el.id != element.id), obj];
    dispatch({ type: 'SET_INTEREST', payload: newData });
    setElement(state.interest.find((el) => el.id == element.id));
    setfilterinterest(Newitems);
  }

  function AddNewinterest() {
    setShowForm(true);
  }
  const [showForm, setShowForm] = useState(false);

  const [filterinterest, setfilterinterest] = useState(element.items);

  useEffect(() => {
    setfilterinterest(element.items);
  }, [element]);

  useEffect(() => {
    setElement(state.interest.find((el) => el.id == element.id));
  }, [state.interest]);

  function handleSearch(e) {
    const res = e.target.value.trim().toLowerCase();
    if (res === '') {
      setfilterinterest(element.items);
    } else {
      setfilterinterest(
        element.items.filter((item) => {
          return item.title.toLowerCase().indexOf(res) !== -1;
        })
      );
    }
  }

  return (
    <>
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
          <div className=" shadow-sm w-100 overflow-y-scroll h-5/6">
            <div>
              {state.interest.length === 0
                ? null
                : state.interest.map((el) => {
                    return (
                      <TrackerItem
                        title={el.title}
                        deadline={el.deadline}
                        completeditems={el.completedItems}
                        id={el.id}
                        changeElement={changeElement}
                        active={el.id === element.id}
                      />
                    );
                  })}
            </div>
            <div
              className="opacity-30 flex items-center cursor-pointer "
              onClick={AddNewinterest}
            >
              <div className="w-full flex p-4">
                <img
                  className="h-5 w-5 mr-5 place-self-center cursor-pointer"
                  src={Addnew}
                  alt="add"
                />
                <p className="w-full">Add new Interest</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow m-2 w-8/12 h-full border rounded-lg ">
          <div className="flex justify-center w-full">
            <div className="m-3  p-2 w-11/12 flex border shadow rounded 2xl:border-solid border-gray-300 block">
              <input
                className="  w-11/12 focus:outline-none    "
                placeholder="Search"
                type="search"
                name=""
                required
                onChange={handleSearch}
              />
              <img
                className="h-5 w-5  ml-5 place-self-center cursor-pointer"
                src={Search}
                alt="add"
              />
            </div>
          </div>
          <div className="overflow-y-scroll h-5/6">
            <div className="flex flex-col items-center ">
              {filterinterest.length === 0
                ? null
                : filterinterest.map((el) => {
                    return (
                      <InterestItem
                        item={el}
                        id={el.id}
                        deleteItem={deleteItem}
                        check={check}
                      />
                    );
                  })}
            </div>
            <div className="p-3 shadow-sm w-100 ">
              <div className="opacity-30 flex items-center">
                <form
                  className="w-full flex"
                  autoComplete="off"
                  onSubmit={addItem}
                >
                  <img
                    className="h-5 w-5 mr-5 place-self-center cursor-pointer"
                    src={Addnew}
                    alt="add"
                  />

                  <input
                    className="w-full"
                    type="text"
                    placeholder="Add new Item"
                    ref={itemtitle}
                    name="itemtitle"
                    required
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForm && <Form setShowForm={setShowForm} />}
    </>
  );
};
export default InterestPage;
