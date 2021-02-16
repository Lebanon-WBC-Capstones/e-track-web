import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import Calendar from 'react-calendar';

/*
the calendar component takes 3 props:
-classDayfct : a function that return a className to be applied for a specific day based on a condition 
    input : date to compare it with the date of the event
    return: class name     //we need to add these classes for calendar.css later
    for   : events and mood style
    
-clicked : a function called when a day is clicked
    input :value of the day clicked
    no return 
    for : spreads and moood
   
-value : 
  to specify the month that we want to dispplay
  example: value={new Date(year, month, 1)}
*/
function CalendarComp({ classDayfct, clicked, value }) {
  return (
    <div className="App">
      <Calendar
        defaultView="month"
        className="react-calendar bg-white rounded-xl shadow-md"
        view="month"
        minDetail="month"
        onClickDay={(value) => {
          clicked(value);
        }}
        activeStartDate={value}
        tileClassName={({ activeStartDate, date, view }) => classDayfct(date)}
      />
    </div>
  );
}
export default CalendarComp;
