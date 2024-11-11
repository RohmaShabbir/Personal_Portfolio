import React from "react";

const Contacts = () => {
  return (
    <div id="Contact" className="border-b border-neutral-900 pb-28 responsive">
      <h2 className="my-20 text-center text-4xl">Contact</h2>
      <div className="lg:w-full flex justify-center items-center">
        <span className="my-4 text-center max-w-xl">
          I create premium, responsive websites using modern design and AI.
          Whether you need a new site or improvements to your current one, I’m
          ready to help. Reach out for freelance projects or full-time
          opportunities. Let’s turn your vision into reality!
        </span>
      </div>
      <form className="flex flex-col items-center space-y-4 mt-10  p-8 rounded-lg">
        <input
          type="text"
          className="w-full max-w-md px-4 py-2  rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          className="w-full max-w-md px-4 py-2  rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none "
          placeholder="Enter Your Email"
        />
        <textarea
          name="message"
          className="w-full max-w-md px-4 py-2  rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none "
          rows={5}
          placeholder="Your Message"
        ></textarea>
       <button
  type="submit"
  className="w-32 py-2 mt-6 text-gray-400 bg-gray-700 rounded-2xl hover:bg-gray-800"
>
  Submit
</button>

      </form>
    </div>
  );
};

export default Contacts;

