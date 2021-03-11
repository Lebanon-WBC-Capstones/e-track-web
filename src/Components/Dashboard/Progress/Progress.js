// props example : {title:"Horror movies",deadline:"25/2/2021", goal:"10",finished:"7"}
import ProgressBar from './../../ProgressBar/ProgressBar.js';
import Addnew from '../../../assets/images/Addnew.png';
import { useTranslation } from 'react-i18next';
import React from 'react';

function Progress({ goal }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-xl shadow-md p-3 h-full">
      <h2 className="font-medium text-red-500 text-center pb-3">
        {t(`Dashboard.progress_progress`)}
      </h2>
      {goal === undefined ? (
        <div className="opacity-30 flex items-center justify-center">
          <img
            className="h-5 w-5 mr-5 place-self-center"
            src={Addnew}
            alt="add"
          />
          <h1 className="font-medium text-Grey">
            {t(`Dashboard.progress_goal`)}
          </h1>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="text-center pb-3">
            <p>{goal.title}</p>
            <p>
              {t(`Dashboard.progress_deadline`)} {goal.deadline}
            </p>
          </div>
          <ProgressBar
            maxValue={goal.goal}
            value={goal.completedItems}
            size="100px"
          />
        </div>
      )}
    </div>
  );
}

export default Progress;
