import React from 'react';
import AboutUs from '../../../assets/images/About us page-rafiki 1.png';
import yellow from '../../../assets/images/Good team-rafiki 4.png';

export default function OurProject() {
    return (
    <div>
      <img src={yellow} alt="yellow" className="absolute right-0 top-0"/>
      <img src={AboutUs} alt="about us" className="relative left-10 top-20"/>
      <p className="absolute right-40 top-20 text-3xl text-center font-sans"><span className="text-5xl font-medium">Our project</span> <br/> <br/>It is all about organizing and managing <br/>the biggest project in anyone's life<br/>
      "our whole life". <br/> I learnt about journal few years ago, and <br/>it changed my life, I keep tracking my <br/>days, my activities, and my hobbies,<br/> which is giving me control over my life.<br/><br/>
      <span className="font-light">“It will not only help you get more <br/>organized but will also help you become<br/> a better person.”<br/></span>
      <span className="font-semibold"> – Cal Newport, author of Deep Work</span>
      </p>
    </div>
    )} 
