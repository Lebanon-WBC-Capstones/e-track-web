import { useTranslation } from 'react-i18next';
import moodElements from './../../../Constants/moodElements.js';
import React from 'react';
function Mood() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-white text-Grey rounded-xl shadow-md p-3 min-w-min text-center cursor-pointer">
      <h1 className="font-medium text-Grey text-base pb-2">
        {t(`Dashboard.mood`)}
      </h1>
      <div className="flex justify-center">
        {moodElements.map((el) => {
          return (
            <img
              key={el.id}
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
