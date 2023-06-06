import FeatureCard from "@/components/FeatureCard";
import { ClashDisplay, ClashGrotesk } from "@/utils/font";
import React from "react";

const features = [
  {
    title: "Learn anything, anywhere",
    content: "Get to access any course you like anywhere",
    linkText: "Find a course",
    link: "#",
  },
  {
    title: "Learn anything, anywhere",
    content: "Get to access any course you like anywhere",
    linkText: "Find a course",
    link: "#",
  },
  {
    title: "Learn anything, anywhere",
    content: "Get to access any course you like anywhere",
    linkText: "Find a course",
    link: "#",
  },
  {
    title: "Learn anything, anywhere",
    content: "Get to access any course you like anywhere",
    linkText: "Find a course",
    link: "#",
  },
  {
    title: "Learn anything, anywhere",
    content: "Get to access any course you like anywhere",
    linkText: "Find a course",
    link: "#",
  },
  {
    title: "Learn anything, anywhere",
    content: "Get to access any course you like anywhere",
    linkText: "Find a course",
    link: "#",
  },
];

const Features = () => {
  return (
    <section className='border-t-2 border-y-neutral-950 dark:border-y-slate-50'>
      <div className='border-x-2 border-x-neutral-950 dark:border-x-slate-50 text-slate-900 dark:text-slate-200  mx-4 md:mx-16 py-8 md:py-14'>
        <h1
          className={
            "text-center text-2xl md:text-4xl font-semibold w-5/6 max-w-screen-md mx-auto " +
            ClashDisplay.className
          }
        >
          Why Learn with Dome ?
        </h1>
        <p
          className={
            "text-base md:text-lg max-w-xl mx-auto mb-8 mt-4 text-center text-slate-700 dark:text-slate-300 " +
            ClashGrotesk.className
          }
        >
          Get access to amazing features that will help you grow
        </p>
        <article
          className={
            "grid mt-12 min-w-0 max-w-screen-xl px-4 mx-auto justify-items-center justify-center gap-x-10 gap-y-6 md:gap-y-8 xl:gap-y-10 md:grid-cols-2 xl:grid-cols-3 " +
            ClashGrotesk.className
          }
        >
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </article>
      </div>
    </section>
  );
};

export default Features;
