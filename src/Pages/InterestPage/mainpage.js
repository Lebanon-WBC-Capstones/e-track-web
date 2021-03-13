import React, { useState, useRef, useEffect, useContext } from 'react';
import Addnew from '../../assets/images/Addnew.png';
import InterestItem from './item.js';
import TrackerItem from './trackerItem.js';
import { StateContext } from '../../StateProvider.js';
import Form from '../../Components/forms/interest-form.js';
import Toast from '../../Components/Toast/Toast.js';
import Bin from '../../assets/icons/Bin.png';

const Mainpage = () => {
  const [state, dispatch] = useContext(StateContext);
  const [element, setElement] = useState(state.interest[0]);
  const [showtoast, setShowtoast] = useState(false);

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
      setShowtoast(true);
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
    newData = newData.sort((a, b) => (a.id > b.id ? 1 : -1));
    dispatch({ type: 'SET_INTEREST', payload: newData });
    e.target.itemtitle.value = '';
  }

  function deleteItem(e) {
    let Newitems = [...element.items.filter((el) => el.id != e)];
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
    newData = newData.sort((a, b) => (a.id > b.id ? 1 : -1));
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
    newData = newData.sort((a, b) => (a.id > b.id ? 1 : -1));
    dispatch({ type: 'SET_INTEREST', payload: newData });
  }
  function deleteTracker(id) {
    let newData = state.interest.filter((el) => el.id !== id);
    newData = newData.sort((a, b) => (a.id > b.id ? 1 : -1));
    dispatch({ type: 'SET_INTEREST', payload: newData });
    setElement(state.interest[0]);
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
      <div className="h-5/6 flex mx-9 my-5">
        <div className="bg-white shadow m-2 w-2/5 h-full border rounded-lg">
          <div className="my-5">
            <h2 className="font-medium text-Grey text-base text-center">
              My Trackers
            </h2>
          </div>
          <div className="h-4/5 overflow-y-scroll">
            <div className="p-3 opacity-50  shadow-sm w-100 flex items-center justify-between ">
              <div className="flex w-4/6">
                <div className="flex justify-between w-11/12">
                  <h1 className="font-medium m-2 text-Grey">Title</h1>
                  <div
                    className={`m-2 w-6 rounded-full flex justify-center items-center `}
                  >
                    Done
                  </div>
                </div>
              </div>
              <p>Deadline</p>
            </div>
            <div className="shadow-sm w-100">
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
        </div>

        <div className="bg-white shadow m-2 w-3/5 h-full border rounded-lg ">
          <div className="p-4 w-full bg-white flex items-center">
            <input
              className="w-full border-2 p-1 border-gray-400 rounded-lg w-3/5"
              type="text"
              placeholder="Search"
              onChange={handleSearch}
            />
            <button
              className="background-transparent border-2 p-1 border-red-300 rounded-lg flex items-center justify-center mx-6 my-2 text-sm outline-none focus:outline-none w-2/5"
              type="button"
              style={{ transition: 'all .15s ease' }}
              onClick={() => deleteTracker(element.id)}
            >
              <img src={Bin} alt="delete" />
              <p className="px-2 text-red-400">Delete Tracker</p>
            </button>
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
              <div className="opacity-30 flex items-center w-full p-3 shadow-sm">
                <form
                  className="flex w-full"
                  autoComplete="off"
                  onSubmit={addItem}
                >
                  <img
                    className="h-5 w-5 mx-5 place-self-center cursor-pointer"
                    src={Addnew}
                    alt="add"
                    onClick={(e) => {
                      document.getElementById('itemtitle').focus();
                    }}
                  />
                  <input
                    className="w-full"
                    type="text"
                    placeholder="Add new Item"
                    ref={itemtitle}
                    name="itemtitle"
                    id="itemtitle"
                    required
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForm && <Form setShowForm={setShowForm} />}
      {showtoast && (
        <Toast
          text="You can't add items to this tracker"
          setShowToast={setShowtoast}
          alert={true}
        />
      )}
    </>
  );
};
export default Mainpage;
