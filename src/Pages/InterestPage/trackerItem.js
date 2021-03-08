import uncheck from '../../assets/images/uncheck.png';
import bin from '../../assets/images/delete.png';

function TrackerItem({ item, changeItem, deleteItem, date }) {
  return (
    <div className="p-3  shadow-sm w-100 flex items-center justify-between ">
      <div className="flex w-4/6">
        <div className="flex justify-between w-11/12">
          <h1 className="font-medium m-2 text-Grey">{item}</h1>
          <div
            className={` border m-2 w-6 rounded-full flex justify-center items-center `}
          >
            2
          </div>
        </div>
      </div>
      <p>{date}</p>
    </div>
  );
}

export default TrackerItem;
