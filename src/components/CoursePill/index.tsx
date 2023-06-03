import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface CoursePillProps {
  icon: ReactNode;
  title: string;
  subtext: string;
  color: string;
}

const CoursePill: FC<CoursePillProps> = ({ title, subtext, icon, color }) => {
  return (
    <Link href='#' className='min-w-0'>
      <div className='h-full group relative before:absolute before:inset-0 before:rounded-[20px] before:border-2 before:border-dashed before:border-neutral-950 dark:before:border-slate-50'>
        <div className='inline-flex w-full bg-gray-50 dark:bg-slate-950 items-center gap-x-2 py-3 px-6 rounded-[20px] border-2 border-neutral-950 dark:border-slate-50 transition group-hover:-translate-y-2 group-hover:-translate-x-2'>
          <span
            className={`h-10 aspect-square rounded-full grid place-items-center`}
            style={{ backgroundColor: color }}
          >
            {icon}
          </span>
          <div className='md:space-y-1'>
            <h3 className='text-base sm:text-lg md:text-xl font-medium'>
              {title}
            </h3>
            <p className='text-sm md:text-base'>{subtext}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoursePill;
