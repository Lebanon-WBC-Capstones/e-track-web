import Profile from './Components/Dashboard/Profile/Profile.js';
import TodoList from './Components/Dashboard/TodoList/Todolist.js';
import Weather from './Components/Dashboard/Weather/Weather.js';
import Events from './Components/Dashboard/Events/Events.js';
import Quote from './Components/Dashboard/Quote/Quote.js';
import Mood from './Components/Dashboard/Mood/Mood.js';
function App() {
  const profile = {
    Avatar: '',
    name: 'Charles Davies',
    occupation: 'Managing Director',
  };
  const events = [
    { id: 1, title: 'first event' },
    { id: 2, title: 'second event' },
    { id: 3, title: 'second event' },
  ];
  return (
    <div style={{ margin: '50px' }}>
      <Profile profile={profile} />
      <br />
      <TodoList />
      <br />
      <Weather />
      <br />
      <Events events={events} />
      <br />
      <Quote />
      <br />
      <Mood />
    </div>
  );
}

export default App;
