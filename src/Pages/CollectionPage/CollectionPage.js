import CollectionListItem from '../../Components/CollectionListItem/ListItem.js';
import bro from '../../assets/images/bro.png';
import { collections } from '../../data.js';
import collection from '../../Constants/collection.js';
import CollectionCard from '../../Components/CollectionCard/CollectionCard.js';
import FloatingBtn from '../../Components/floatingBtn/floatingBtn.js';

function CollectionPage() {
  return (
    <div className="flex h-5/6 bg-lightGrey">
      <div className="h-5/6">
        <div className="bg-white rounded-xl shadow-md  w-96 h-full px-12 mt-6 mx-8">
          <div className="flex justify-center font-bold text-2xl p-6">
            My Collections
          </div>

          {collection.map((el) => {
            return <CollectionListItem number="2" type={{ id: el.id }} />;
          })}
          <div className="h-6"></div>

          <div className="flex h-1/2 items-end">
            <img src={bro} />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start p-4 w-full rounded-xl shadow-md mx-8 h-20 bg-white px-7 mt-6">
        <input
          className="w-full border-2 border-gray-400 p-2 mb-8 rounded-lg"
          type="text"
          placeholder="Search"
        />

        <div className="grid grid-cols-4  ">
          {collections.map((el) => {
            return <CollectionCard card={el} />;
          })}
        </div>
      </div>
      <FloatingBtn />
    </div>
  );
}
export default CollectionPage;
