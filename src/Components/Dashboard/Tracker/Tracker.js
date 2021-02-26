//props example : {title:"Read"}
import Addnew from '../../../assets/images/Addnew.png';

function Tracker({ tracker }) {
  let today = null;
  if (tracker) {
    today = tracker.track.filter(
      (el) => el.date === new Date().toDateString()
    )[0];
  }
  return (
    <div className="bg-white text-Grey rounded-xl shadow-md p-3 min-w-min">
      <h2 className="font-medium text-Grey text-base text-center pb-3">
        Trackers
      </h2>
      {!tracker ? (
        <div className="opacity-30 flex items-center justify-center">
          <img
            className="h-5 w-5 mr-5 place-self-center"
            src={Addnew}
            alt="add"
          />
          <h1 className="font-medium text-Grey">Add new Tracker</h1>
        </div>
      ) : today.status !== 'checked' ? (
        <p className="text-center text-Grey">
          You did not “{tracker.title}” today
        </p>
      ) : (
        <div className="text-center text-Grey">
          <p>You did “{tracker.title}” today,</p>
          <p> Check other trackers</p>{' '}
        </div>
      )}
    </div>
  );
}
export default Tracker;
