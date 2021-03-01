import EventsType from '../../Constants/EventsType.js';

export default function EventsModal({ setShowModal, monthEvents }) {
  return (
    <>
      <div
        id="myModal"
        className=" text-Grey justify-center modal items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-5/12 h-6/12 my-6 mx-auto max-w-3xl modal-overlay">
          <div className=" rounded-lg h-full shadow-lg relative modal-close flex flex-col w-full text-center bg-white outline-none focus:outline-none">
            <div className=" items-start justify-between py-8 h-72 rounded-t overflow-y-scroll modal-content">
              <h2 className="font-medium text-center pb-3 text-xl">
                {monthEvents.month}
              </h2>
              <p>Events</p>
              {monthEvents.events.map((el) => {
                return (
                  <div className="shadow-sm w-100 flex items-center justify-between py-3 px-20 w-full">
                    <div>
                      <h2
                        className="font-medium text-center pb-3 text-xl leading-none"
                        style={{
                          color: EventsType.find(
                            (type) => type.id === el.type_id
                          ).color,
                        }}
                      >
                        {el.title}
                      </h2>
                      <p class="text-gray-400 text-sm">{el.description}</p>
                    </div>
                    <h2 className="font-medium text-red-500 text-center pb-3 leading-none">
                      {el.date.split(' ').slice(1, 3).join(' ')}
                    </h2>
                  </div>
                );
              })}
            </div>
            <div className="absolute right-0">
              <button
                className="background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(false)}
              >
                {' '}
                x
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black z-10 bg-red w-screen h-sceen"></div>
    </>
  );
}
