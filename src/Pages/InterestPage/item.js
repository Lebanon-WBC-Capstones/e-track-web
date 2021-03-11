import checked from '../../assets/images/checked.png';
import uncheck from '../../assets/images/uncheck.png';
import Bin from '../../assets/icons/Bin.png';

function InterestItem({ item, deleteItem, id, check }) {
  return (
    <div className="p-3 shadow-sm w-full flex items-center justify-between">
      <div className="flex">
        <img
          onClick={() => check(id)}
          src={item.completed ? checked : uncheck}
          className="h-5 w-5 mx-5 place-self-center cursor-pointer"
          alt="status"
        />
        <h1 className="font-medium text-Grey">{item.title}</h1>
      </div>
      <img
        className="h-5 w-5 mx-3 cursor-pointer"
        src={Bin}
        alt="options"
        onClick={() => deleteItem(id)}
      />
    </div>
  );
}

export default InterestItem;
