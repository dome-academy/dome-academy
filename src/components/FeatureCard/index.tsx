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
    <div className='w-full relative rounded-3xl border-2 border-neutral-950 dark:border-slate-50 bg-neutral-300/50 dark:bg-neutral-800/50 px-4 lg:px-5'>
      <div
        className={"relative mt-[200px] mb-[18px] " + ClashGrotesk.className}
      >
        <h2
          className={
            "text-xl md:text-2xl w-52 mb-4 font-medium leading-tight " +
            ClashDisplay.className
          }
        >
          {title}
        </h2>
        <p className='text-sm md:text-base mb-14 w-2/3'>{content}</p>
        <Link
          href={link}
          className='inline-flex justify-center items-center px-4 py-2 text-base min-w-[120px] bg-neutral-800 dark:bg-neutral-300 text-white dark:text-black font-medium'
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
