import Events from '../../Components/Dashboard/Events/Events.js';
import Profile from '../../Components/Dashboard/Profile/Profile.js';
import CalendarComp from '../../Components/Calendar/calendar.js';
import TodoList from '../../Components/Dashboard/TodoList/Todolist.js';
import Progress from '../../Components/Dashboard/Progress/Progress.js';
import Mood from '../../Components/Dashboard/Mood/Mood.js';
import Tracker from '../../Components/Dashboard/Tracker/Tracker.js';
import { useContext } from 'react';
import { StateContext } from '../../StateProvider.js';
import { useHistory } from 'react-router';

function DashboardPage() {
  const [state] = useContext(StateContext);
  let history = useHistory();

  function CalendarFct(date) {
    return date.toDateString() === new Date().toDateString() ? 'today' : null;
  }

  const tracker = state.trackers.filter((el) => !el.completed)[0];
  const goal = state.interest.filter((el) => !el.completed)[0];

  return (
    <div className="flex px-5 flex-wrap w-full sm:mx-0 p-2">
      <div className="sm:w-full md:w-full lg:w-1/5 flex flex-col justify-between">
        <div
          className="p-2 cursor-pointer"
          onClick={() => {
            history.push('/Profile');
          }}
        >
          <Profile profile={state.profile} />
        </div>
        <div
          className="p-2 cursor-pointer"
          onClick={() => {
            history.push('/Spread');
          }}
        >
          <Events
            events={events.filter(
              (el) => el.date === new Date().toDateString()
            )}
          />
        </div>
        <div
          className="p-2 cursor-pointer"
          onClick={() => {
            history.push('/Spread');
          }}
        >
          <CalendarComp
            classDayfct={CalendarFct}
            onClick={() => { }}
            startDate={new Date()}
          />
        </div>
      </div>
      <div
        className="p-2 cursor-pointer"
        onClick={() => {
          history.push('/Spread');
        }}
      >
        <Events
          events={state.events.filter(
            (el) => el.date === new Date().toDateString()
          )}
        />
      </div>
      <div
        className="p-2 cursor-pointer"
        onClick={() => {
          history.push('/Spread');
        }}
      >
        <CalendarComp
          classDayfct={CalendarFct}
          onClick={() => { }}
          startDate={new Date()}
        />
      </div>
    </div>
  );
}
}

export default DashboardPage;
