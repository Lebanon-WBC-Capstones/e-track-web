import Profile from './Components/Profile/Profile.js';
import TodoList from './Components/TodoList/Todolist.js';
import Weather from './Components/Weather/Weather.js';
import Events from './Components/Events/Events.js';
import Quote from './Components/Quote/Quote.js';
function App() {
  const profile = {
    Avatar: '',
    name: 'Charles Davies',
    occupation: 'Managing Director',
  };
  const events = [
    { id: 1, title: 'first event' },
    { id: 2, title: 'second event' },
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
    </div>
  );
}

export default App;
