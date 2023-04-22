import Image from "next/image";
import { ClashDisplay, ClashGrotesk } from "@/utils/font";

const AboutPage = () => {
  return (
    <main
      className={
        "border-x-2 border-x-neutral-950 dark:border-x-slate-50 ml-4 md:ml-16 min-h-screen mb-0 sticky divide-y-2 divide-neutral-950 dark:divide-slate-50 " +
        ClashGrotesk.className
      }
    >
      <header className='flex flex-col xl:flex-row divide-y-2 xl:divide-x-2 xl:divide-y-0 divide-neutral-950 dark:divide-slate-50 w-full'>
        <section className='py-20 px-8 md:pl-10 lg:py-40 w-full xl:w-3/5 xl:grid xl:items-center'>
          <div className='max-w-3xl'>
            <h1
              className={
                "text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-slate-800 dark:text-slate-200 xl:w-11/12 " +
                ClashDisplay.className
              }
            >
              We are growth community of innovators, developers and
              entreprenuers
            </h1>
            <p className=' text-slate-700 dark:text-slate-300 mt-4  xl:text-lg w-3/4'>
              As a member of Dome Academy, you have access to community
              meetings, mentorship and collaboration with seasoned instructors
              and experts.
            </p>
          </div>
        </section>
        <section className='w-full xl:w-2/5 grid grid-cols-2 grid-rows-2 gap-0 bg-black dark:bg-white'>
          <div className='bg-white/30 h-auto relative aspect-[5/4] xl:aspect-square'>
            <Image
              src='/images/ds.webp'
              alt='Something'
              className='object-cover border-b-2 border-r-2 border-neutral-950 dark:border-slate-50 filter brightness-125'
              fill
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </div>
          <div className='bg-white/30 h-auto relative aspect-[5/4] xl:aspect-square'>
            <Image
              src='/images/pm.webp'
              alt='Something'
              className='object-cover border-b-2 border-neutral-950 dark:border-slate-50'
              fill
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </div>
          <div className='bg-white/30 h-auto relative col-span-2'>
            <Image
              src='/images/people-working.jpg'
              alt='Something'
              className='object-cover'
              fill
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </div>
        </section>
      </header>
      <div />
    </main>
  );
};

export default AboutPage;
