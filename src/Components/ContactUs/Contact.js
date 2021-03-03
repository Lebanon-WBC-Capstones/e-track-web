import ContactIMG from '../../assets/images/contactIMG.png';
import React, { useState } from 'react';
import Button from '../button/button';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t, i18n } = useTranslation();
  const [field, setField] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-100">
      <div className="w-full h-8"></div>
      <div className="font-semibold text-6xl flex justify-center text-gray-700 font-mono">
        {t(`contactUs.contactUs`)}
      </div>
      <div className="w-full h-28"></div>
      <div className="flex justify-center space-x-24 > *">
        <div className="">
          <form>
            <input
              className="mb-4 w-96 p-2 border-gray-500 border-solid rounded-md border box-border"
              type="text"
              name="email"
              placeholder={t(`contactUs.contactEmail`)}
              value={field.email}
              onChange={handleChange}
            />
            <br />
            <input
              className="mb-4 w-96 p-2 rounded-md  border-gray-500 border-solid border box-border"
              type="text"
              name="subject"
              placeholder={t(`contactUs.contactSubject`)}
              value={field.subject}
              onChange={handleChange}
            />
            <br />
            <textarea
              className="h-64 w-96 p-2  mb-4  border-gray-500 border-solid box-border rounded-md border"
              type="text"
              name="message"
              placeholder={t(`contactUs.contactMessage`)}
              value={field.message}
              onChange={handleChange}
            />
            <br />

            <div className="flex justify-center">
              <Button text={t(`contactUs.contactButton`)} />
            </div>
          </form>
        </div>

        <div>
          <img src={ContactIMG} alt="contact pic" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
