import React from 'react';
import Logo from '../../../Assets/Images/Logo.png';
import img1 from '../../../Assets/Images/img1.png';
import Button from '../../../Components/button/button';

function Header() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <img
        src={Logo}
        className="w-1/12 h-auto absolute left-14 top-9"
        alt="E-Track Logo"
      />
      <img
        src={img1}
        className=" absolute top-0 right-0 w-6/12"
        alt="background image"
        width="900"
      />

      <div className="w-52 h-14 absolute top-5 right-5">
        <Button text="Get Started" />
      </div>

      <div className="absolute top-1/3 right-2/4 h-60">
        <div className="leading-10 font-bold md:text-center ">
          <span className="text-5xl ">
            Your life is your biggest
            <span className="text-primary"> Project </span>
          </span>
          <br />
          <span className="text-7xl">Track it the right way </span>
        </div>

        <div className="absolute bottom-0 w-full">
          <div className="flex justify-center">
            <Button text="How It Works?" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
