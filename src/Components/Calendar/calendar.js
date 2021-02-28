/*
the calendar component takes 3 props:
-classDayfct : a function that return a className to be applied for a specific day based on a condition 
    input : date to compare it with the date of the event
    return: class name     //we need to add these classes for calendar.css later
    for   : events and mood style
    
-onClick : a function called when a day is clicked
    input :value of the day clicked
    no return 
    for : spreads and moood
   
-startDate : 
  to specify the month that we want to dispplay
  example: startDate={new Date(year, month, 1)}
*/

import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import Calendar from 'react-calendar';

function CalendarComp({ classDayfct, onClick, startDate }) {
  return (
    <div>
      <Calendar
        defaultView="month"
        className="react-calendar bg-white rounded-xl shadow-md w-full"
        view="month"
        minDetail="month"
        onClickDay={(value) => {
          onClick(value);
        }}
        activeStartDate={startDate}
        tileClassName={({ activeStartDate, date, view }) => classDayfct(date)}
      />
    </div>
  );
}
export default CalendarComp;
