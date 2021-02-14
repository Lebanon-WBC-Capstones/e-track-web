import React from "react";
import img1 from '../../../assets/images/Data points-pana 1.png';
import img2 from '../../../assets/images/OBJECTS.png';
import Button from "../../../Components/button/button.js";

export default function YourJournal() {
    return(
    <div>
        <div className=" top-20 relative ">
         <p className="text-center text-4xl font-bold font-sans">your journal begins <br/> with a click</p>
         </div>
         <div className=" flex justify-center top-20 relative">
         <Button onClick={()=>{alert("Hello!")}} text={"Get started"} />
         </div>
        <img src={img2} alt="Objects" className="right-0 top-40 absolute "/>
        <img src={img1} alt="Data" className="relative left-0 top-0 "/>   
    </div>
    )}