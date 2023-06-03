import Image from "next/image";

const People = () => {
  return (
    <section className='grid grid-cols-2 gap-4 lg:grid-cols-4 my-12 md:pt-10 lg:py-10 px-4 md:px-12 lg:px-0 max-w-screen-xl mx-auto'>
      <div className='bg-white/30 h-auto aspect-square lg:aspect-[3/4] self-center relative'>
        <Image
          src='/images/people-working.jpg'
          alt='Something'
          className='object-cover border-2 border-neutral-950 dark:border-slate-50'
          fill
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='bg-white/30 h-auto aspect-square lg:aspect-[4/5] self-center relative hidden lg:block'>
        <Image
          src='/images/ladies-collaborating.jpg'
          alt='Something'
          className='object-cover border-2 border-neutral-950 dark:border-slate-50'
          fill
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='bg-white/30 h-auto aspect-square lg:aspect-[3/4] self-center relative hidden lg:block'>
        <Image
          src='/images/guy-with-laptop.webp'
          alt='Something'
          className='object-cover border-2 border-neutral-950 dark:border-slate-50'
          fill
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='bg-white/30 h-auto aspect-square lg:aspect-[4/5] self-center relative'>
        <Image
          src='/images/guy-smiling.jpg'
          alt='Something'
          className='object-cover border-2 border-neutral-950 dark:border-slate-50'
          fill
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
    </section>
  );
};

export default People;
