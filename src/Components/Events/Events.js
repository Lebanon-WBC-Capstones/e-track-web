// events is an array of event object; it must contain an id and a title
function Events({ events }) {
  return (
    <div className="bg-white text-Grey rounded-xl shadow-md p-3 min-w-min max-h-40 min-h-40 overflow-y-auto">
      <h2 className="font-medium text-Grey text-base text-center">
        {new Date().toDateString()}
      </h2>
      {events.length === 0 ? (
        <p className="text-gray-400 text-center">You have no events today</p>
      ) : (
        <ul className="pl-5">
          {events.map((el) => {
            return <li key={el.id}>{el.title}</li>;
          })}{' '}
        </ul>
      )}
    </div>
  );
}
export default Events;
