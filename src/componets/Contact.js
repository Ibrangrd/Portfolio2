import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  TEMPLATE_ID_EMAIL,
  SERVICE_ID_EMAIL,
  PUBLIC_KEY_EMAIL,
} from "../utilis/constant";
import Dark from "../utilis/Dark";
import Alert from "@mui/material/Alert";

export const Contact = () => {
  const form = useRef();
  const [showMsgDiv, setShowMsgDiv] = useState(false);
  const dark = useContext(Dark).darkMode;

  const sendEmail = () => {
    // e.preventDefault();
    setShowMsgDiv(true);

    // emailjs.sendForm(SERVICE_ID_EMAIL, TEMPLATE_ID_EMAIL, form.current, {
    //   publicKey: PUBLIC_KEY_EMAIL,
    };

  return (
    <div className={`${dark && "dark"}`}>
      <div className="dark:bg-slate-900 -mt-2 min-h-screen py-10">

        {/* Success Alert */}
        {showMsgDiv && (
          <Alert variant="filled" severity="success" className="w-1/2 mx-auto mb-6">
            SUCCESSFULLY SENT
          </Alert>
        )}

        {/* Card Container */}
        <div className="md:w-5/12 w-11/12 mx-auto bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center dark:text-white">
            Contact Me
          </h1>

          {/* Form */}
          <form action="https://api.web3forms.com/submit" method="POST" class="left" className="space-y-6">

            {/* Name */}
            <div className="hidden">
            <input type="hidden" name="access_key" value="150ddb2d-5e1a-40be-9b23-f61c069139c3"></input>
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-semibold dark:text-slate-200">Name</label>
              <input
                type="text"
                name="from_name"
                className="border border-slate-400 dark:border-slate-600 dark:bg-slate-700 rounded-md px-4 py-3 text-sm md:text-base dark:text-white"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold dark:text-slate-200">Email</label>
              <input
                type="email"
                name="from_email"
                className="border border-slate-400 dark:border-slate-600 dark:bg-slate-700 rounded-md px-4 py-3 text-sm md:text-base dark:text-white"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold dark:text-slate-200">Phone</label>
              <input
                type="number"
                name="from_mob"
                className="border border-slate-400 dark:border-slate-600 dark:bg-slate-700 rounded-md px-4 py-3 text-sm md:text-base dark:text-white"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-lg font-semibold dark:text-slate-200">Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                className="border border-slate-400 dark:border-slate-600 dark:bg-slate-700 rounded-md px-4 py-3 h-32 text-sm md:text-base dark:text-white"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                value="SEND"
                className="px-6 py-3 rounded-lg font-semibold bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-400"
                onClick={sendEmail}
              >
                Send
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
