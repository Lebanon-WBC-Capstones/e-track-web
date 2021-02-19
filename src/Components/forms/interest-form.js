import React, { useState } from 'react';
import Button from '../button/button.js';
const Form = () => {
  const [formData, setFormData] = useState({
    Title: '',
    Goal: '',
    Dealine: '',
    Item: '',
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { Title, Goal, Deadline, Item } = formData;

  return (
    <form className="w-6/12 h-auto rounded border sm:border-solid border-gray-200">
      <div className="flex justify-between w-full">
        <input
          className="w-full m-3 p-2 border rounded 2xl:border-solid border-gray-300 block"
          value={Title}
          onChange={(e) => updateFormData(e)}
          placeholder="Title"
          type="text"
          name="Title"
          required
        />
      </div>
      <div className="flex justify-between w-full">
        <input
          className=" m-3 p-2 w-2/5 border rounded 2xl:border-solid border-gray-300 block"
          value={Goal}
          onChange={(e) => updateFormData(e)}
          placeholder="Goal"
          type="text"
          name="Goal"
          required
        />
        <input
          className="  m-3 p-2 w-2/5  border rounded 2xl:border-solid border-gray-300 block"
          value={Deadline}
          onChange={(e) => updateFormData(e)}
          placeholder="Deadline"
          type="date"
          name="Deadline"
          onfocus="(this.type='date')"
          required
        />
      </div>
      <div className="flex justify-between w-full">
        <input
          className="w-full m-3 p-2 border rounded 2xl:border-solid border-gray-300 block"
          value={Item}
          onChange={(e) => updateFormData(e)}
          placeholder="add new item"
          type="text"
          name="item"
          required
        />
      </div>
      <div className="flex justify-center p-2">
        <Button text="Add" />
      </div>
    </form>
  );
};

export default Form;
