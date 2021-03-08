import uncheck from '../../assets/images/uncheck.png';
import bin from '../../assets/images/delete.png';

function TrackerItem({ title, deadline, completeditems, changeElement, id }) {
  return (
    <div
      className="p-3 hover:bg-gray-300 cursor-pointer shadow-sm w-100 flex items-center justify-between "
      onClick={() => changeElement(id)}
    >
      <div className="flex w-4/6">
        <div className="flex justify-between w-11/12">
          <h1 className="font-medium m-2 text-Grey">{title}</h1>
          <div
            className={` border m-2 w-6 rounded-full flex justify-center items-center `}
          >
            {completeditems}
          </div>
        </div>
      </div>
      <p>{deadline}</p>
    </div>
  );
}

export default TrackerItem;
