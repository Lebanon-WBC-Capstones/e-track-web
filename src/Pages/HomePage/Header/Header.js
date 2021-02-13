import React from 'react';
import Logo from '../../../Assets/Images/Logo.png';
import img1 from '../../../Assets/Images/img1.png';

function Header() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <img src={Logo} className="w-1/12 h-auto absolute left-14 top-9" alt="" />
      <img
        src={img1}
        className=" absolute top-0 right-0 w-6/12"
        alt=""
        width="900"
      />

      <div className="leading-10 font-bold md:text-center absolute top-1/3 right-2/4">
        <span className="text-5xl ">
          Your life is your biggest{' '}
          <span className="text-green-500"> Project </span>{' '}
        </span>{' '}
        <br />
        <span className="text-7xl">Track it the right way </span>{' '}
      </div>
    </div>
  );
}

export default Header;
