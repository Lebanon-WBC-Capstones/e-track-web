import CollectionListItem from '../../Components/CollectionListItem/ListItem.js';
import bro from '../../assets/images/bro.png';
import collection from '../../Constants/collection.js';
import CollectionCard from '../../Components/CollectionCard/CollectionCard.js';
import FloatingBtn from '../../Components/floatingBtn/floatingBtn.js';

import { StateContext } from '../../StateProvider.js';
import { useState, useContext } from 'react';

function CollectionPage() {
  var count = [0, 0, 0, 0, 0];

  const [state] = useContext(StateContext);
  const [filter, setfilter] = useState(state.collections);

  function collectionFilter(id) {
    setfilter(state.collections.filter((el) => el.type.id === id));
  }

  for (let index = 0; index < state.collections.length; index++) {
    count[state.collections[index].type.id - 1] =
      count[state.collections[index].type.id - 1] + 1;
  }

  return (
    <div className="flex h-5/6">
      <div className="h-5/6">
        <div className="bg-white rounded-xl shadow-md  w-96 h-full px-12 mt-6 mx-8">
          <div className="flex justify-center font-bold text-2xl p-6">
            My Collections
          </div>

          {collection.map((el) => {
            return (
              <CollectionListItem
                number={count[el.id - 1]}
                type={{ id: el.id }}
                collectionFilter={collectionFilter}
              />
            );
          })}
          <div className="h-6"></div>

          <div className="flex h-1/2 items-end">
            <img src={bro} />
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll w-full">
        <div className="flex flex-col justify-start p-4 w-full rounded-xl shadow-md  h-20 bg-white  mt-6">
          <input
            className="w-full border-2 border-gray-400 p-2 mb-8 rounded-lg"
            type="text"
            placeholder="Search"
          />

          <div className="flex flex-wrap ">
            {filter.map((el) => {
              return <CollectionCard card={el} />;
            })}
          </div>
        </div>
      </div>
      <FloatingBtn />
    </div>
  );
}
export default CollectionPage;
