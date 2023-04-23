"use client";
import { useWaitlistStore } from "@/store/waitlistStore";

const WaitlistCard = () => {
  const { setWaitlistStore } = useWaitlistStore();
  const handleShow = () => setWaitlistStore(true);
  return (
    <article className='bg-gray-50 dark:bg-neutral-950 p-8 md:p-12 lg:px-16 lg:py-24 border-2 border-neutral-950 dark:border-slate-50'>
      <div className='mx-auto max-w-xl text-left'>
        <h2 className='text-2xl font-semibold text-slate-800 dark:text-slate-200 md:text-3xl xl:text-4xl'>
          Join the growth community of innovators, developers and entreprenuers
        </h2>

        <p className='hidden text-slate-700 dark:text-slate-300 sm:mt-4 sm:block xl:text-lg'>
          As a member of Dome Academy, you have access to community meetings,
          mentorship and collaboration with seasoned instructors and experts.
        </p>

        <div className='mt-4 md:mt-8'>
          <button
            onClick={handleShow}
            className='appearance-none px-3 text-slate-800 dark:text-slate-100 hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold inline-block py-3 border-2 border-neutral-950 dark:border-slate-50'
          >
            Join waitlist
          </button>
        </div>
      </div>
    </article>
  );
};

export default WaitlistCard;
