import Happy from '../../assets/images/emoji/Happy.png';
import MoodBgLow from '../../assets/images/MoodBgLow.png';

function MoodPage() {
  return (
    <div className="flex justify-items-center mx-9 my-5 h-5/6">
      <div
        style={{ backgroundImage: `url(${MoodBgLow})` }}
        className="bg-no-repeat bg-center w-screen bg-opacity-10"
      >
        <div className="flex justify-center items-center ">
          <div className="bg-white rounded-xl shadow-md flex flex-col flex-wrap p-6 min-w-min justify-items items-center content-center mt-28">
            <p className="text-8xl">Coming soon</p>
            <br />
            <p className="text-primary text-2xl pt-1">Mood tracker</p>
            <img className="w-1/12 h-auto" src={Happy} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MoodPage;
