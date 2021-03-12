import CollectionListItem from '../../Components/CollectionListItem/ListItem.js';
import bro from '../../assets/images/bro.png';
import collection from '../../Constants/collection.js';
import CollectionCard from '../../Components/CollectionCard/CollectionCard.js';
import FloatingBtn from '../../Components/floatingBtn/floatingBtn.js';
import CollectionCardModal from '../../Components/CollectionCard/CollectionCardModal.js';
import NewCardModal from '../../Components/CollectionCard/NewCardModal.js';

import { StateContext } from '../../StateProvider.js';
import { useState, useContext, useEffect } from 'react';

function CollectionPage() {
  var count = [0, 0, 0, 0, 0];

  const [state] = useContext(StateContext);
  const [filter, setfilter] = useState(state.collections);
  const [showModal, setShowModal] = useState(false);
  const [element, setElement] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setfilter(state.collections);
    console.log(state.collections);
  }, [state.collections]);

  state.collections.sort((x, y) =>
    x.starred === y.starred ? 0 : x.starred ? -1 : 1
  );

  function collectionFilter(id) {
    setfilter(state.collections.filter((el) => el.type.id === id));
  }

  function AddNewCard() {
    setShowForm(true);
  }

  function clearFilter() {
    setfilter(state.collections);
  }

  function handleSearch(e) {
    const description = e.target.value.trim().toLowerCase();
    if (description === '') {
      setfilter(state.collections);
    } else {
      setfilter(
        state.collections.filter((card) => {
          return card.text.toLowerCase().indexOf(description) !== -1;
        })
      );
    }
  }

  function sendCardToModal(id) {
    setElement(state.collections.find((el) => el.id === id));
    setShowModal(true);
  }

  for (let index = 0; index < state.collections.length; index++) {
    count[state.collections[index].type.id - 1] =
      count[state.collections[index].type.id - 1] + 1;
  }

  return (
    <>
      <div className="flex h-5/6 mx-9 my-5">
        <div className="bg-white rounded-xl shadow-md h-full w-1/5 overflow-hidden">
          <div className="my-5">
            <h2 className="font-medium text-Grey text-base text-center">
              My Collections
            </h2>
          </div>
          <div className="flex flex-col items-center justify-between h-4/5">
            <div className="w-full ">
              {collection.map((el) => {
                return (
                  <CollectionListItem
                    number={count[el.id - 1]}
                    type={{ id: el.id }}
                    collectionFilter={collectionFilter}
                  />
                );
              })}
            </div>
            <div>
              <img src={bro} alt="style" />
            </div>
          </div>
        </div>
        <div className="w-4/5 px-5">
          <div className="p-4 w-full rounded-xl shadow-md bg-white flex items-center">
            <input
              className="w-full border-2 h-10 p-1 border-gray-400 rounded-lg"
              type="text"
              placeholder="Search"
              onChange={handleSearch}
            />
            <button
              className="background-transparent border-2 p-2 border-gray-400 rounded-lg flex items-center justify-center mx-6 my-2 text-sm outline-none focus:outline-none w-2/5"
              type="button"
              style={{ transition: 'all .15s ease' }}
              onClick={clearFilter}
            >
              <p className="px-2 text-gray-400">Show All</p>
            </button>
          </div>
          <div className="h-4/5 overflow-y-scroll w-full mt-2">
            <div className="grid grid-cols-4">
              {filter.map((el) => {
                return <CollectionCard card={el} sendCard={sendCardToModal} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <FloatingBtn onClick={AddNewCard} />

      {showModal && (
        <CollectionCardModal setShowModal={setShowModal} card={element} />
      )}
      {showForm && <NewCardModal setShowForm={setShowForm} />}
    </>
  );
}
export default CollectionPage;
