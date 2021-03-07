import CalendarComp from './../../Components/Calendar/calendar.js';
import FloatingBtn from '../../Components/floatingBtn/floatingBtn.js';
import EventForm from '../../Components/SpreadModals/EventForm.js';
import EventsModal from '../../Components/SpreadModals/EventsModal.js';

import { events } from '../../data.js';
import EventsType from '../../Constants/EventsType.js';
import { useState } from 'react';

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function SpreadPage() {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [monthEvents, setmonthEvents] = useState({ month: '', events: [] });

  const year = new Date().getFullYear();
  let calendar = [];

  function CalendarFct(date) {
    let todayEvents = events.find((el) => el.date === date.toDateString());
    if (date.toDateString() === new Date().toDateString()) return 'today';
    else if (todayEvents) {
      return EventsType.find((el) => el.id === todayEvents.type_id).name;
    }
  }

  function showevent(date) {
    setmonthEvents({
      month: months[date.getMonth()],
      events: [
        ...events.filter(
          (el) => new Date(el.date).getMonth() === date.getMonth()
        ),
      ],
    });
    setShowModal(true);
  }

  function AddNewEvents() {
    setShowForm(true);
  }

  for (let i = 0; i < 12; i++) {
    calendar.push(
      <div className="m-3" key={i}>
        <CalendarComp
          startDate={new Date(year, i, 1)}
          classDayfct={CalendarFct}
          onClick={showevent}
        />
      </div>
    );
  }

  return (
    <>
      <div className="h-5/6 overflow-y-scroll grid grid-cols-4 flex justify-items-center mx-9 my-5">
        {calendar}
        <FloatingBtn onClick={AddNewEvents} />
      </div>
      {showModal && (
        <EventsModal setShowModal={setShowModal} monthEvents={monthEvents} />
      )}
      {showForm && <EventForm setShowForm={setShowForm} />}
    </>
  );
}
export default SpreadPage;
