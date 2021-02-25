import empty from '../../../assets/images/empty.png';
import bassam from '../../../assets/images/bassam.png';
import jana from '../../../assets/images/jana.png';
import osama from '../../../assets/images/osama.png';
import ibrahim from '../../../assets/images/ibrahim.png';

const card = [
  {
    photo: <img src={osama} alt="programmerIMG" />,
    name: 'Osama Abdullah',
    role: 'Lead Engineer',
  },
  {
    photo: <img src={empty} alt="programmerIMG" />,
    name: 'Abdellatif Edlby',
    role: 'Junior Engineer',
  },
  {
    photo: <img src={jana} alt="programmerIMG" />,
    name: 'Jana Khanji',
    role: 'Junior Engineer',
  },
  {
    photo: <img src={bassam} alt="programmerIMG" />,
    name: 'Bassam Edelbi',
    role: 'Junior Engineer',
  },
  {
    photo: <img src={ibrahim} alt="programmerIMG" />,
    name: 'Ibrahim Nour',
    role: 'Junior Engineer',
  },

  {
    photo: <img src={empty} alt="programmerIMG" />,
    name: 'Tommy Chaanin',
    role: 'Junior Engineer',
  },
].map((anObjectMapped, index) => {
  return (
    <div
      className="w-54 h-80 transform hover:scale-110 m-auto p-5 hover:shadow-2xl duration-500"
      key={`${anObjectMapped.name}`}
    >
      {anObjectMapped.photo}
      <div className="flex justify-center text-center text-gray-700 text-xl font-semibold">
        {anObjectMapped.name} <br /> {anObjectMapped.role}
      </div>
    </div>
  );
});

function TeamMembers() {
  return (
    <div className="bg-white">
      <div className="w-full h-8"></div>
      <div className="font-semibold text-6xl flex justify-center text-gray-700 font-mono">
        Team Members
      </div>
      <div className="w-full h-14"></div>

      <div className="grid grid-cols-3 gap-8">{card}</div>
    </div>
  );
}

export default TeamMembers;
