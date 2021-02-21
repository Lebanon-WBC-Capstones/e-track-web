// if the user does not have a profile picture, the avatar icon will be the default
// props example : profile = {Avatar: '', name: 'Charles Davies', occupation: 'Managing Director'}
import Avatar from '../../../assets/images/Avatar.png';

function Profile({ profile }) {
  let imgSrc;
  profile.Avatar === '' ? (imgSrc = Avatar) : (imgSrc = profile.Avatar);

  return (
    <div className="bg-white rounded-xl shadow-md flex flex-wrap p-3 min-w-min justify-items-center content-center">
      <figure>
        <img
          className="w-14 h-14 rounded-full mr-5"
          src={imgSrc}
          alt="profile"
        />
      </figure>
      <div className="text-Grey">
        <h1 className="font-medium text-Grey text-base">{profile.name}</h1>
        <p className="text-gray-400">{profile.occupation}</p>
      </div>
    </div>
  );
}
export default Profile;
