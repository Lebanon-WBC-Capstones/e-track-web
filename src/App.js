import Habitmap from './Components/HabitTracker/Habitmap.js';
function App() {
  return (
    <div>
      <Habitmap
        title="Brushing teeth"
        duration={[
          { id: 1, status: 'notYet' },
          { id: 2, status: 'checked' },
        ]}
        click={() => alert('I am an alert box!')}
      />
    </div>
  );
}

export default App;
