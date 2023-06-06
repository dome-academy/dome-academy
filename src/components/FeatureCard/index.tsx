import React, { FC, PropsWithChildren } from "react";
import { ClashDisplay, ClashGrotesk } from "@/utils/font";
import Link from "next/link";

interface FeatureCardInterface {
  title: string;
  content: string;
  linkText: string;
  link: string;
}

const FeatureCard: FC<PropsWithChildren<FeatureCardInterface>> = ({
  title,
  content,
  linkText,
  link,
}) => {
  return (
    <div className='w-full relative rounded-3xl border-2 border-neutral-950 dark:border-slate-50 bg-neutral-200/50 dark:bg-neutral-800/50 px-4 lg:px-5 overflow-hidden'>
      <div className='absolute inset-y-0 w-1/2 grid-background right-0 opacity-30' />
      <div
        className={
          "relative flex flex-col mt-[200px] pb-[18px] " +
          ClashGrotesk.className
        }
      >
        <h2
          className={
            "text-xl md:text-2xl w-72 mb-4 font-medium leading-tight " +
            ClashDisplay.className
          }
        >
          {title}
        </h2>
        <p className='text-sm md:text-base w-11/12 mb-14'>{content}</p>
        <div className='mt-auto'>
          <Link
            href={link}
            className='inline-flex justify-center items-center  px-4 py-2 text-base min-w-[120px] bg-neutral-800 dark:bg-neutral-300 text-white dark:text-black font-medium'
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
