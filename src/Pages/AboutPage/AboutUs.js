import React from 'react';
//import About_Us from '../../assets/images/AboutUs.png';
import yellow from '../../assets/images/yellow.png';
import Team from '../../Components/TeamMemberCard/TeamMember';
import ContactUs from '../../Components/ContactUs/Contact';
import Footer from '../../Components/Footer/Footer';

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <img src={yellow} alt="yellow" className="absolute right-0 top-0 w-2/3" />
      <div className="flex justify-around h-screen items-center flex-wrap">
        {/*<img src={About_Us} alt="about us" className="z-10" />*/}
        <p className=" text-xl text-left font-sans z-10">
          <span className="text-2xl font-medium flex justify-center ">
            Our project
          </span>
          <br />
          It is all about organizing and managing <br />
          the biggest project in anyone's life
          <br />
          "our whole life". <br /> I learnt about journal few years ago, and
          <br />
          it changed my life, I keep tracking my <br />
          days, my activities, and my hobbies,
          <br /> which is giving me control over my life.
          <br />
          <br />
          <span className="font-light">
            “It will not only help you get more <br />
            organized but will also help you become
            <br /> a better person.”
            <br />
          </span>
          <br />
          <span className="font-semibold">
            – Cal Newport, author of Deep Work
          </span>
        </p>
      </div>

      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}
