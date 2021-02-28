import CalendarComp from './../../Components/Calendar/calendar.js';
function SpreadPage() {
  const year = new Date().getFullYear();
  let calendar = [];

  function test(date) {
    return null;
  }
  for (let i = 0; i < 12; i++) {
    calendar.push(
      <CalendarComp
        key={i}
        startDate={new Date(year, i, 1)}
        classDayfct={test}
        onClick={test}
      />
    );
  }
  return (
    <div className="h-5/6 overflow-scroll grid grid-cols-4 flex justify-items-center mx-9 my-7">
      {calendar}
    </div>
  );
}
export default SpreadPage;
