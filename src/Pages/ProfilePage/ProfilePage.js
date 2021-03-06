import { profile } from '../../data.js';
import Avatar from '../../assets/images/Avatar.png';
import themes from '../../Constants/themes.js';
import { useState, useRef } from 'react/cjs/react.development';

import Button from '../../Components/button/button.js';

let days = [];
for (let i = 1; i < 32; i++) {
  days.push(
    <option key={i} value={i}>
      {i}
    </option>
  );
}

let years = [];
for (let i = 1980; i <= new Date().getFullYear(); i++) {
  years.push(
    <option key={i} value={i}>
      {i}
    </option>
  );
}

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

function SettingsPage() {
  const lang = useRef('');
  const month = useRef(1);
  const day = useRef(0);
  const year = useRef(1980);
  const [gender, setGender] = useState(profile.gender);

  let imgSrc;
  profile.Avatar === '' ? (imgSrc = Avatar) : (imgSrc = profile.Avatar);
  let [theme, setTheme] = useState(profile.theme_id);
  function onValueChange(event) {
    setGender(event.target.value);
  }
  function saveData() {
    const Obj = {
      id: '4ad3fe1b-d179-417d-9927-4b38bbf23e76',
      email: 'jana.khanji@ieee.org',
      name: 'Jana Khanji',
      Avatar: '',
      language: lang.current.value,
      gender: gender,
      birthday: {
        month: month.current.value,
        day: day.current.value,
        year: year.current.value,
      },
      theme_id: theme,
    };
    console.log(Obj);
  }

  return (
    <div className="flex flex-wrap justify-center mx-9 my-7">
      <div className="bg-white rounded-xl shadow-md w-3/6">
        <div className="w-full flex shadow-sm p-4 justify-center items-center">
          <div className="m-5 w-1/4 flex flex-col items-center">
            <figure className=" mx-5 mb-2">
              <img className="rounded-full" src={imgSrc} alt="profile" />
            </figure>
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
                disabled
                value={profile.name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
              />
            </div>
          </div>
        </div>
        <div className="w-full shadow-sm p-4">
          <div className="flex items-center m-2">
            <div className="w-2/12">
              <p>Gender:</p>
            </div>
            <div className="flex w-full items-center mx-3">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mx-2"
                onChange={onValueChange}
                checked={gender === 'male'}
              />
              <label for="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mx-2"
                onChange={onValueChange}
                checked={gender === 'female'}
              />
              <label for="female">Female</label>
            </div>
          </div>
          <div className="flex items-center m-2">
            <div className="w-2/12">
              <p>Birthday:</p>
            </div>
            <div className="flex w-full">
              <select
                id="day"
                ref={day}
                defaultValue={profile.birthday.day}
                className="border rounded w-full  mx-3 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {days}
              </select>
              <select
                id="month"
                ref={month}
                defaultValue={profile.birthday.month}
                className="border rounded w-full mx-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {months.map((el, index) => (
                  <option key={index} value={el}>
                    {el}
                  </option>
                ))}
              </select>
              <select
                id="year"
                ref={year}
                defaultValue={profile.birthday.year}
                className="border rounded w-full mx-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {years}
              </select>
            </div>
          </div>
          <div className="flex items-center m-2">
            <div className="w-2/12">
              <p>Language:</p>
            </div>
            <div className="flex w-full">
              <select
                id="language"
                className="border rounded w-full mx-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ref={lang}
              >
                <option key="us" value="English">
                  English
                </option>
                <option key="ar" value="Arabic">
                  Arabic
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full shadow-sm p-4">
          <div className="flex justify-center items-center">
            <p>Theme:</p>
            <div className="flex justify-between w-full mx-20">
              {themes.map((el) => {
                return (
                  <button
                    key={el.id}
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
        <div className="w-full shadow-sm p-4 flex justify-end px-12">
          <Button text="Save" onClick={saveData} />
        </div>
      </div>
    </div>
  );
}
export default SettingsPage;
