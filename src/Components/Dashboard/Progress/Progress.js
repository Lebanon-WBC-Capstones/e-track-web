// props example : {title:"Horror movies",deadline:"25/2/2021", goal:"10",finished:"7"}
import ProgressBar from './../../ProgressBar/ProgressBar.js';
import Addnew from '../../../assets/images/Addnew.png';

function Progress({ goal }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-3 h-full">
      <h2 className="font-medium text-red-500 text-center pb-3">Progress</h2>
      {goal === undefined ? (
        <div className="opacity-30 flex items-center justify-center">
          <img
            className="h-5 w-5 mr-5 place-self-center"
            src={Addnew}
            alt="add"
          />
          <h1 className="font-medium text-Grey">Add new Goal</h1>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="text-center pb-3">
            <p>{goal.title}</p>
            <p>Deadline: {goal.deadline}</p>
          </div>
          <ProgressBar
            maxValue={goal.goal}
            value={goal.completedItems}
            size="100px"
          />
        </div>
      )}
    </div>
  );
}

export default Progress;
