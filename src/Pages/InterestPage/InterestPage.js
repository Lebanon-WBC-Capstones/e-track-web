import React, { useState } from 'react';
const InterestPage = () => {
  const [formData, setFormData] = useState({
    Goal: '',
    Dealine: '',
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { Goal, Deadline } = formData;

  return (
    <div className="flex h-5/6 w-11/12 ml-10">
      <div className="bg-white m-2 w-4/12 h-full border rounded-lg">
        <div className="flex  h-10 ">
          <p className=" justify-center ">My Trackers</p>
        </div>
      </div>

      <div className="bg-white m-2 w-8/12 h-full border rounded-lg ">
        <div className="flex justify-center w-full">
          <input
            className=" m-3 mr-0 p-2 w-2/5 border rounded 2xl:border-solid border-gray-300 block"
            value={Goal}
            onChange={(e) => updateFormData(e)}
            placeholder="Search"
            type="search"
            name="Goal"
            required
          />
          <button type="button">yes</button>
          <input
            className="  m-3 p-2 w-2/5  border rounded 2xl:border-solid border-gray-300 block"
            value={Deadline}
            onChange={(e) => updateFormData(e)}
            placeholder="filter"
            type="text"
            name="Deadline"
            onfocus="(this.type='date')"
            required
          />
        </div>

        {/* <input type="text" name="myText" value="Norway"
       selectBoxOptions="Canada;Denmark;Finland;Germany;Mexico"> */}
      </div>
    </div>
  );
};
export default InterestPage;
