import FeatureCard from "@/components/FeatureCard";
import CommunitySvg from "@/components/Illustrations/CommunitySvg";
import CoursesSvg from "@/components/Illustrations/CoursesSvg";
import DashboardSvg from "@/components/Illustrations/DashboardSvg";
import LiveSessionsSvg from "@/components/Illustrations/LiveSessionsSvg";
import PortfolioSvg from "@/components/Illustrations/PortfolioSvg";
import PracticeSvg from "@/components/Illustrations/PracticeSvg";
import { ClashDisplay, ClashGrotesk } from "@/utils/font";
import React from "react";

const features = [
  {
    title: "Learn anything, anywhere",
    content: "Get to access any course you like anywhere",
    linkText: "Find a course",
    link: "#",
    children: (
      <div className='absolute w-full flex justify-end inset-x-0 transition-transform duration-200 group-hover:scale-105'>
        <CoursesSvg />
      </div>
    ),
  },
  {
    title: "Personalised Dashboard",
    content:
      "With a personalized dashboard, you'll experience a learning environment designed specifically for you.",
    linkText: "Set up your dashboard",
    link: "#",
    children: (
      <div className='absolute w-full flex justify-center pt-6 inset-0 transition-transform duration-200 group-hover:scale-105'>
        <DashboardSvg />
      </div>
    ),
  },
  {
    title: "Live Sessions",
    content:
      "Providing you with live, interactive and self-paced sessions from the best mentors around the world through Dome.",
    linkText: "Find a course",
    link: "#",
    children: (
      <div className='absolute w-full flex pt-5 pr-6 transition-transform duration-200 group-hover:scale-105'>
        <LiveSessionsSvg />
      </div>
    ),
  },
  {
    title: "Hands-on practice",
    content:
      "At Dome, you get to learn by practicing. By solving real-world challenges in our interactive labs, all within your browser.",
    linkText: "Coming soon",
    link: "#",
    children: (
      <div className='absolute w-full flex pr-5 transition-transform duration-200 group-hover:scale-105'>
        <PracticeSvg />
      </div>
    ),
  },
  {
    title: "Community",
    content:
      "Join a network of like-minded individuals on our online platform for an enriching educational experience.",
    linkText: "Join our community",
    link: "#",
    children: (
      <div className='absolute w-full flex justify-end pt-3 inset-x-0 pr-3 transition-transform duration-200 group-hover:scale-105'>
        <CommunitySvg />
      </div>
    ),
  },
  {
    title: "Build Portfolio",
    content: "Share your wins and progress as you learn.",
    linkText: "Start building",
    link: "#",
    children: (
      <div className='absolute w-full flex justify-end pt-4 transition-transform duration-200 group-hover:scale-105'>
        <PortfolioSvg />
      </div>
    ),
  },
];

const Features = () => {
  return (
    <section className='border-y-2 border-y-neutral-950 dark:border-y-slate-50'>
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
            "grid mt-12 min-w-0 max-w-screen-xl px-4 mx-auto justify-center gap-x-10 gap-y-6 md:gap-y-8 xl:gap-y-10 md:grid-cols-2 xl:grid-cols-3 " +
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
