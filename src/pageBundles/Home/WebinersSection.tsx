import WebinarCard, { WebinarCardProps } from "@/components/WebinarCard";
import { ClashDisplay, ClashGrotesk } from "@/utils/font";
import React from "react";

const webinars: WebinarCardProps[] = [
  {
    coverImage: "/images/webinar-poster.png",
    date: "April 20th",
    link: "#",
    speaker: {
      image: "/images/man-1.webp",
      name: "David Lee",
      position: "Product Designer at Inter",
    },
    time: "10am - GMT+1",
    title: "How to get started with Figma",
    venue: "google meet",
  },
  {
    coverImage: "/images/webinar-poster.png",
    date: "April 20th",
    link: "#",
    speaker: {
      image: "/images/man-1.webp",
      name: "David Lee",
      position: "Product Designer at Inter",
    },
    time: "10am - GMT+1",
    title: "How to get started with Figma",
    venue: "google meet",
  },
  {
    coverImage: "/images/webinar-poster.png",
    date: "April 20th",
    link: "#",
    speaker: {
      image: "/images/man-1.webp",
      name: "David Lee",
      position: "Product Designer at Inter",
    },
    time: "10am - GMT+1",
    title: "How to get started with Figma",
    venue: "google meet",
  },
];

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
      <p className='text-base md:text-lg max-w-xl mx-auto mb-8 xl:mb-12 mt-4 text-center text-slate-700 dark:text-slate-300 '>
        Ignite Your Learning Journey. Join & Engage with Our Upcoming Webinars!
      </p>
      <article className='grid lg:grid-cols-3 max-w-screen-xl mx-auto lg:gap-x-4 xl:gap-x-6 px-4 md:px-8 lg:px-8'>
        {webinars.map((web, i) => (
          <WebinarCard key={i} {...web} />
        ))}
      </article>
    </section>
  );
};

export default WebinersSection;
