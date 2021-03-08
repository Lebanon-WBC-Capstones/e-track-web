import checked from '../../../assets/images/checked.png';
import uncheck from '../../../assets/images/uncheck.png';
import bin from '../../../assets/images/delete.png';

function TodoItem({ item, changeItem, deleteItem }) {
  return (
    <div className="p-3 shadow-sm w-100 flex items-center justify-between">
      <div className="flex">
        <img
          onClick={() => changeItem(item)}
          className="h-5 w-5 mx-5 place-self-center cursor-pointer"
          src={item.done ? checked : uncheck}
          alt="status"
        />
        <h1 className="font-medium text-Grey">{item.title}</h1>
      </div>
      <img
        className="h-5 w-5 mr-3 cursor-pointer"
        src={bin}
        alt="options"
        onClick={() => deleteItem(item)}
      />
    </div>
  );
}

export default TodoItem;
