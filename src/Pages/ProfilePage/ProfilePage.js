import { profile } from '../../data.js';
import Avatar from '../../assets/images/Avatar.png';
import themes from '../../Constants/themes.js';
import { useState } from 'react/cjs/react.development';

function SettingsPage() {
  let imgSrc;
  profile.Avatar === '' ? (imgSrc = Avatar) : (imgSrc = profile.Avatar);
  let [theme, setTheme] = useState(profile.theme_id);
  return (
    <div className="flex flex-wrap justify-center mx-9 my-7">
      <div className="bg-white rounded-xl shadow-md w-3/6">
        <div className="w-full flex shadow-sm p-4 justify-center items-center">
          <div className="m-5 w-1/4 flex flex-col items-center">
            <figure className=" mx-5 mb-2">
              <img className="rounded-full" src={imgSrc} alt="profile" />
            </figure>
            <button className="text-xs shadow appearance-none border rounded p-1">
              Upload an Image
            </button>
            <button className="text-xs text-red-500 appearance-none mt-2 p-1">
              Remove Image
            </button>
          </div>
          <div className="text-Grey m-5 w-3/4">
            <div className="mb-2">
              <input
                disabled
                value={profile.email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
              />
            </div>
            <div className="mb-2">
              <input
                value={profile.name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
              />
            </div>
            <div className="mb-2">
              <input
                value={profile.occupation}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
              />
            </div>
          </div>
        </div>
        <div className="w-full shadow-sm p-4">
          <div className="flex">
            <p>Gender:</p>
          </div>
          <div className="flex">
            <p>Birthday:</p>
          </div>
          <div className="flex">
            <p>Language:</p>
          </div>
        </div>
        <div className="w-full shadow-sm p-4">
          <div className="flex justify-center items-center">
            <p>Theme:</p>
            <div className="flex justify-between w-full mx-20">
              {themes.map((el) => {
                return (
                  <button
                    style={{ backgroundColor: el.color }}
                    onClick={(e) => {
                      e.preventDefault();
                      setTheme(el.id);
                    }}
                    className={
                      +el.id === theme
                        ? 'rounded h-6 w-6 shadow-md p-6'
                        : ' rounded h-6 w-6 shadow-md p-6 opacity-50'
                    }
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SettingsPage;
