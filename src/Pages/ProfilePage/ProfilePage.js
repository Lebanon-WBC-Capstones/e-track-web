import Avatar from '../../assets/images/Avatar.png';
import themes from '../../Constants/themes.js';
import { useState, useRef, useContext } from 'react/cjs/react.development';
import { StateContext } from '../../StateProvider.js';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { auth } from './../../firebase.js';

import Button from '../../Components/button/button.js';
import { useHistory } from 'react-router';

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
  const [state, dispatch] = useContext(StateContext);
  let history = useHistory();

  const { t, i18n } = useTranslation();
  const lang = useRef('');
  const month = useRef(1);
  const day = useRef(1);
  const year = useRef(1980);
  const [gender, setGender] = useState(state.profile.gender);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  let imgSrc;
  state.profile.Avatar === ''
    ? (imgSrc = Avatar)
    : (imgSrc = state.profile.Avatar);
  let [theme, setTheme] = useState(state.profile.theme_id);
  function onValueChange(event) {
    setGender(event.target.value);
  }
  function logout() {
    auth.signOut().then(
      function () {
        alert('done');
        history.push('/');
      },
      function (error) {
        alert('error');
      }
    );
  }

  function saveData() {
    const newData = {
      id: state.profile.id,
      email: state.profile.email,
      name: state.profile.name,
      Avatar: state.profile.Avatar,
      language: lang.current.value,
      gender: gender,
      birthday: {
        month: month.current.value,
        day: day.current.value,
        year: year.current.value,
      },
      theme_id: theme,
    };
    dispatch({ type: 'SET_PROFILE', payload: newData });
    changeLanguage(lang.current.value);
  }

  return (
    <div className="flex flex-wrap justify-center mx-9 my-7">
      <div className="bg-white rounded-xl shadow-md w-3/6">
        <div className="w-full flex shadow-sm p-4 justify-center items-center">
          <div className="m-5 w-1/4 flex flex-col items-center">
            <figure className=" mx-5 mb-2">
              <img className="rounded-full" src={imgSrc} alt="state.profile" />
            </figure>
          </div>
          <div className="text-Grey m-5 w-3/4">
            <div className="mb-2">
              <input
                disabled
                value={state.profile.email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
              />
            </div>
            <div className="mb-2">
              <input
                disabled
                value={state.profile.name}
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
                defaultValue={state.profile.birthday.day}
                className="border rounded w-full  mx-3 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {days}
              </select>
              <select
                id="month"
                ref={month}
                defaultValue={state.profile.birthday.month}
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
                defaultValue={state.profile.birthday.year}
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
                defaultValue={i18next.language}
                id="language"
                className="border rounded w-full mx-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ref={lang}
              >
                <option key="en" value="en">
                  English
                </option>
                <option key="ar" value="ar">
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
          <div className="px-3">
            <button
              className="shadow-md text-red-400 hover:text-white font-bold py-3 px-7 rounded-full hover:bg-red-400"
              onClick={logout}
            >
              Log out
            </button>
          </div>
          <div className="px-3">
            <Button
              text="Save"
              onClick={saveData}
              theme={`theme${state.profile.theme_id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SettingsPage;
