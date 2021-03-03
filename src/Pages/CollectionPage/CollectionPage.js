import CollectionListItem from '../../Components/CollectionListItem/ListItem.js';
import bro from '../../assets/images/bro.png';
import { collection } from '../../data.js';
import CollectionCard from '../../Components/CollectionCard/CollectionCard.js';
import FloatingBtn from '../../Components/floatingBtn/floatingBtn.js';

function CollectionPage() {
  return (
    <div className="flex h-full bg-lightGrey">
      <div className="h-5/6">
        <div className="bg-white rounded-xl shadow-md  w-96 h-full px-12 mt-6 mx-8">
          <div className="flex justify-center font-bold text-2xl p-6">
            My Collections
          </div>

          {collection.map((el) => {
            return <CollectionListItem number="2" type={el.type} />;
          })}

          <img className="absolute left-20 bottom-20" src={bro} />
        </div>
      </div>

      <div className="flex flex-col justify-start p-4 w-full rounded-xl shadow-md mx-8 h-20 bg-white px-7 mt-6">
        <input
          className="w-full border-2 border-gray-400 p-2 mb-8 rounded-lg"
          type="text"
          placeholder="Search"
        />

        <div className="grid grid-cols-4  ">
          {collection.map((el) => {
            return <CollectionCard card={el} />;
          })}
        </div>
      </div>
      <FloatingBtn />
    </div>
  );
}
export default CollectionPage;
