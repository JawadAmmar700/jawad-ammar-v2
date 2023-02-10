"use client";
import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const SendEmail = async (e: any) => {
    e.preventDefault();
    if (name && email && message && subject) {
      window.open(
        `mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=Hello I'm ${encodeURIComponent(name)}: ${encodeURIComponent(
          message
        )}`
      );

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-start sm:items-center py-3 md:py-5 sm:py-0  text-slate-400 w-full h-full px-12 md:px-32 md:justify-start"
    >
      <form
        className="flex flex-col space-y-2 w-full sm:max-w-lg"
        onSubmit={SendEmail}
      >
        {/* <div>
            <h1 className="text-3xl font-bold text-white">Contact Me</h1>
            <p className="xl:w-[700px] w-[300px] md:w-[500px] text-gray-200">
              Need to get in touch with me? For all inquiries, please email me
              using the form below.
            </p>
          </div> */}
        <div className="flex flex-col">
          <label className="py-2 font-bold">Name*</label>
          <input
            required
            type="text"
            value={name}
            size={35}
            id="contactName1"
            name="contactName1"
            onChange={(e) => setName(e.target.value)}
            className="w-full h-8 rounded bg-[#161B22] text-slate-400 focus:ring-indigo-700 ring ring-gray-800 font-medium text-xs py-0.5 px-2 outline-none placeholder:text-slate-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="py-2 font-bold">Email*</label>
          <input
            required
            type="text"
            value={email}
            size={35}
            placeholder="1234@example.com"
            id="contactName2"
            name="contactName2"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-8 rounded bg-[#161B22] text-slate-400 focus:ring-indigo-700 ring ring-gray-800 font-medium text-xs py-0.5 px-2 outline-none placeholder:text-slate-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="py-2 font-bold">Subject</label>
          <input
            type="text"
            required
            value={subject}
            size={35}
            id="contactName3"
            name="contactName3"
            onChange={(e) => setSubject(e.target.value)}
            className="w-full h-8 rounded bg-[#161B22] text-slate-400 focus:ring-indigo-700 ring ring-gray-800 font-medium text-xs py-0.5 px-2 outline-none placeholder:text-slate-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="py-2 font-bold">Message</label>

          <textarea
            cols={30}
            rows={10}
            required
            className="w-full h-[150px] rounded bg-[#161B22] text-slate-400 focus:ring-indigo-700 ring ring-gray-800 font-medium text-xs py-0.5 px-2 outline-none placeholder:text-slate-600"
            value={message}
            id="contactName4"
            name="contactName4"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={!name || !email || !message || !subject}
          className="btn btn-square ring ring-gray-800 btn-md relative top-1 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <PaperAirplaneIcon className="h-5 w-5 text-green-500 " />
        </button>
      </form>
    </motion.div>
  );
};

export default Form;
