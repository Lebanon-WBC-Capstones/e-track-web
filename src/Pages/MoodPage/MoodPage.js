import React, { useContext } from 'react';
import Happy from '../../assets/images/emoji/Happy.png';
import MoodBgLow from '../../assets/images/MoodBgLow.png';
import { useTranslation } from 'react-i18next';
import { StateContext } from '../../StateProvider.js';

function MoodPage() {
  const { t } = useTranslation();
  const [state] = useContext(StateContext);

  return (
    <div className="flex justify-items-center mx-9 my-5 h-5/6">
      <div
        style={{ backgroundImage: `url(${MoodBgLow})` }}
        className="bg-no-repeat bg-center w-screen bg-opacity-10"
      >
        <div className="flex justify-center items-center ">
          <div className="bg-white rounded-xl shadow-md flex flex-col flex-wrap p-6 min-w-min justify-items items-center content-center mt-28">
            <p className="text-8xl">{t(`Mood.comingSoon`)}</p>
            <br />
            <p className={`text-theme${state.profile.theme_id} text-2xl pt-1}`}>
              {t(`Mood.moodTracker`)}
            </p>
            <img className="w-1/12 h-auto" src={Happy} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MoodPage;
