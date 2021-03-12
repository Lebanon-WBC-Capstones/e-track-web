//props example : {title:"Read"}
import React from 'react';
import { useTranslation } from 'react-i18next';
import Addnew from '../../../assets/images/Addnew.png';

function Tracker({ tracker }) {
  const { t, i18n } = useTranslation();
  let today = null;
  if (tracker) {
    today = tracker.track.find((el) => el.date === new Date().toDateString());
  }
  return (
    <div className="bg-white text-Grey rounded-xl shadow-md p-3 min-w-min">
      <h2 className="font-medium text-Grey text-base text-center pb-3">
        {t(`Dashboard.trackers`)}
      </h2>
      {!tracker ? (
        <div className="opacity-30 flex items-center justify-center">
          <img
            className="h-5 w-5 mr-5 place-self-center"
            src={Addnew}
            alt="add"
          />
          <h1 className="font-medium text-Grey">{t(`Dashboard.addtracker`)}</h1>
        </div>
      ) : today.status !== 'checked' ? (
        <p className="text-center text-Grey">
          {t(`Dashboard.unfinishedTracker1`)} “{tracker.title}”{' '}
          {t(`Dashboard.unfinishedTracker2`)}
        </p>
      ) : (
        <div className="text-center text-Grey">
          <p>
            {t(`Dashboard.finishedTracker1`)} “{tracker.title}”{' '}
            {t(`Dashboard.finishedTracker2`)}
          </p>
          <p> {t(`Dashboard.finishedTracker3`)}</p>{' '}
        </div>
      )}
    </div>
  );
}
export default Tracker;
