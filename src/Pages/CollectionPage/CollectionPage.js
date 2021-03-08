import CollectionListItem from '../../Components/CollectionListItem/ListItem.js';
import bro from '../../assets/images/bro.png';
import { collections } from '../../data.js';
import collection from '../../Constants/collection.js';
import CollectionCard from '../../Components/CollectionCard/CollectionCard.js';
import FloatingBtn from '../../Components/floatingBtn/floatingBtn.js';

var count = [0, 0, 0, 0, 0];

for (let index = 0; index < collections.length; index++) {
  count[collections[index].type.id - 1] =
    count[collections[index].type.id - 1] + 1;
}

function CollectionPage() {
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
              />
            );
          })}
          <div className="h-6"></div>

          <div className="flex h-1/2 items-end">
            <img src={bro} />
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll ">
        <div className="flex flex-col justify-start p-4 w-full rounded-xl shadow-md  h-20 bg-white  mt-6">
          <input
            className="w-full border-2 border-gray-400 p-2 mb-8 rounded-lg"
            type="text"
            placeholder="Search"
          />

          <div className="flex flex-wrap ">
            {collections.map((el) => {
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
