import { ClashDisplay, ClashGrotesk } from "@/utils/font";
import React from "react";

const WebinersSection = () => {
  return (
    <section
      className={
        "text-slate-900 dark:text-slate-200  py-8 md:py-14 " +
        ClashGrotesk.className
      }
    >
      <h1
        className={
          "text-center text-2xl md:text-4xl font-semibold w-5/6 max-w-screen-md mx-auto " +
          ClashDisplay.className
        }
      >
        Upcoming Live sessions 🎙
      </h1>
      <p className='text-base md:text-lg max-w-xl mx-auto mb-8 mt-4 text-center text-slate-700 dark:text-slate-300 '>
        Ignite Your Learning Journey. Join & Engage with Our Upcoming Webinars!
      </p>
    </section>
  );
};

export default WebinersSection;
