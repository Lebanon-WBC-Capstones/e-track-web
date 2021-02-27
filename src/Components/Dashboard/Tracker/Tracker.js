//props example : {title:"Read"}
import Addnew from '../../../assets/images/Addnew.png';

function Tracker({ tracker }) {
  return (
    <div className="bg-white text-Grey rounded-xl shadow-md p-3 min-w-min">
      <h2 className="font-medium text-Grey text-base text-center pb-3">
        Trackers
      </h2>
      {tracker === '' ? (
        <div className="opacity-30 flex items-center justify-center">
          <img
            className="h-5 w-5 mr-5 place-self-center"
            src={Addnew}
            alt="add"
          />
          <h1 className="font-medium text-Grey">Add new Tracker</h1>
        </div>
      ) : (
        <p className="text-center text-Grey">
          You did not “{tracker.title}” today
        </p>
      )}
    </div>
  );
}
export default Tracker;
