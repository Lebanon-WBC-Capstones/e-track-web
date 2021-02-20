import moodElements from './../../../Constants/moodElements.js';
function Mood() {
  return (
    <div className="bg-white text-Grey rounded-xl shadow-md p-3 min-w-min text-center">
      <h1 className="font-medium text-Grey text-base">
        How are you feeling today?
      </h1>
      <div className="flex justify-center">
        {moodElements.map((el) => {
          return (
            <img
              className="h-12 w-12 justify-self-center"
              src={
                require(`../../../assets/images/emoji/${el.title}.png`).default
              }
              alt={`${el} emoji`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Mood;
