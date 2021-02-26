// Components
import Events from '../../Components/Dashboard/Events/Events.js';
import Profile from '../../Components/Dashboard/Profile/Profile.js';
import Weather from '../../Components/Dashboard/Weather/Weather.js';
import CalendarComp from '../../Components/Calendar/calendar.js';
import TodoList from '../../Components/Dashboard/TodoList/Todolist.js';
import Quote from '../../Components/Dashboard/Quote/Quote.js';
import Progress from '../../Components/Dashboard/Progress/Progress.js';
import Mood from '../../Components/Dashboard/Mood/Mood.js';
import Tracker from '../../Components/Dashboard/Tracker/Tracker.js';

// Data
import { profile, events, trackers, interest } from '../../data.js';

function DashboardPage() {
  function CalendarFct(date) {
    return date.toDateString() === new Date().toDateString() ? 'event' : null;
  }

  const tracker = trackers.filter((el) => !el.completed)[0];
  const goal = interest.filter((el) => !el.completed)[0];

  return (
    <div className="flex px-5 flex-wrap w-full sm:mx-0 bg-lightGrey p-2">
      <div className="sm:w-full md:w-full lg:w-1/5 flex flex-col justify-between">
        <div className="p-2">
          <Profile profile={profile} />
        </div>
        <div className="p-2">
          <Events
            events={events.filter(
              (el) => el.date === new Date().toDateString()
            )}
          />
        </div>
        <div className="p-2">
          <CalendarComp
            classDayfct={CalendarFct}
            onClick={() => alert('this should take me to the spread page')}
            startDate={new Date()}
          />
        </div>
        <div className="p-2">
          <Weather
            location={profile.location.city + ',' + profile.location.country}
          />
        </div>
      </div>
      <div className="p-2 w-3/5 sm:w-full sm:order-first md:w-full lg:w-3/5 md:order-first lg:order-none">
        <TodoList />
      </div>
      <div className="sm:w-full md:w-full lg:w-1/5 flex flex-col justify-between">
        <div className="p-2">
          <Quote />
        </div>
        <div className="p-2">
          <Progress goal={goal} />
        </div>
        <div className="p-2">
          <Mood />
        </div>
        <div className="p-2">
          <Tracker tracker={tracker} />
        </div>
      </div>
    </div>
  );
}
export default DashboardPage;
