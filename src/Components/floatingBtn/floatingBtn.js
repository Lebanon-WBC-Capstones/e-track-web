import { StateContext } from '../../StateProvider.js';
import { useContext } from 'react';

function FloatingBtn({ onClick }) {
  const [state] = useContext(StateContext);

  return (
    <div className="fixed bottom-8 right-8 z-10 ">
      <button
        onClick={onClick}
        className={`flex items-center place-items-center content-center text-center rounded-full h-14 w-14 shadow-md bg-theme${state.profile.theme_id} p-3`}
      >
        <span className="pb-1 text-white self-center justify-self-center text-medium text-center w-full text-3xl">
          +
        </span>
      </button>
    </div>
  );
}
export default FloatingBtn;
