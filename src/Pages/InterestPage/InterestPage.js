import React, { useState, useRef, useEffect, useContext } from 'react';
import { StateContext } from '../../StateProvider.js';
import NoTrack from '../NoTrack/noTrack.js';
import Mainpage from './mainpage.js';
import Form from '../../Components/forms/interest-form.js';
function InterestPage() {
  const [showForm, setShowForm] = useState(false);
  const [state, dispatch] = useContext(StateContext);

  function AddNewinterest() {
    setShowForm(true);
  }

  return (
    <>
      {state.interest.length === 0 ? (
        <NoTrack onClick={AddNewinterest} />
      ) : (
        <Mainpage />
      )}
      {showForm && <Form setShowForm={setShowForm} />}
    </>
  );
}

export default InterestPage;
