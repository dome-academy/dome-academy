import Link from "next/link";
import React, { FC } from "react";

interface CoursePillProps {
  title: string;
  subtext: string;
}

const CoursePill: FC<CoursePillProps> = ({ title, subtext }) => {
  return (
    <Link
      href='#'
      className='inline-flex items-center gap-x-2 p-3 rounded-[20px] border-2 border-neutral-950 dark:border-slate-50'
    >
      <span className='h-10 aspect-square rounded-full bg-fuchsia-400 grid place-items-center'>
        0
      </span>
      <div className='md:space-y-1'>
        <h3 className='text-base sm:text-lg md:text-xl font-medium'>{title}</h3>
        <p className='text-sm md:text-base'>{subtext}</p>
      </div>
    </Link>
  );
};

export default CoursePill;
