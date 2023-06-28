import CoursePill from "@/components/CoursePill";
import CodeIcon from "@/components/icons/CodeIcon";
import DesignIcon from "@/components/icons/DesignIcon";
import DocumentIcon from "@/components/icons/DocumentIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import { ClashDisplay, ClashGrotesk } from "@/utils/font";
import Link from "next/link";

const courses = [
  {
    icon: <DesignIcon />,
    title: "UI/UX",
    subtext: "30 Courses Available",
    color: "#E7C5F6",
  },
  {
    icon: <CodeIcon />,
    title: "Software Development",
    subtext: "30 Courses Available",
    color: "#B8F5B7",
  },
  {
    icon: <CodeIcon />,
    title: "Software Development",
    subtext: "30 Courses Available",
    color: "#B8F5B7",
  },
  {
    icon: <DesignIcon />,
    title: "Cloud Computing",
    subtext: "30 Courses Available",
    color: "#E7C5F6",
  },
  {
    icon: <ShieldIcon />,
    title: "Cyber Security",
    subtext: "30 Courses Available",
    color: "#BAC7F6",
  },
  {
    icon: <DocumentIcon />,
    title: "Content Writing",
    subtext: "30 Courses Available",
    color: "#F5E0B7",
  },
];

const CoursesGroup = () => {
  return (
    <section className='border-t-2 border-y-neutral-950 dark:border-y-slate-50'>
      <div className='border-x-2 border-x-neutral-950 dark:border-x-slate-50 text-slate-900 dark:text-slate-200  mx-4 md:mx-16 py-8 md:py-14'>
        <h1
          className={
            "text-center text-2xl md:text-4xl font-semibold w-5/6 max-w-screen-md mx-auto " +
            ClashDisplay.className
          }
        >
          Practice based instructor-lead courses.
        </h1>
        <p
          className={
            "text-base md:text-lg max-w-xl mx-auto mb-8 mt-4 text-center text-slate-700 dark:text-slate-300 " +
            ClashGrotesk.className
          }
        >
          Learn from different courses fields
        </p>

        <article
          className={
            "flex flex-wrap mt-12 min-w-0 max-w-screen-lg px-4 mx-auto justify-items-center justify-center gap-x-10 gap-y-6 md:gap-y-8 xl:gap-y-10 md:grid-cols-2 xl:grid-cols-3 " +
            ClashGrotesk.className
          }
        >
          {courses.map((course, i) => (
            <CoursePill key={i} {...course} />
          ))}
        </article>
        <div className='flex justify-center mt-10 md:mt-20 lg:mt-24'>
          <Link
            href='/login'
            className={
              "appearance-none px-3 uppercase inline-flex items-center text-slate-800 dark:text-slate-100 hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold py-3 border-2 border-neutral-950 dark:border-slate-50 " +
              ClashGrotesk.className
            }
          >
            <span>Explore all courses</span>{" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              className='ml-1'
              viewBox='0 0 256 256'
            >
              <path d='M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z'></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesGroup;
