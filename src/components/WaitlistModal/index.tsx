"use client";
import { ClashDisplay } from "@/utils/font";
import { ClashGrotesk } from "@/utils/font";
import { useWaitlistStore } from "@/store/waitlistStore";
import { useFormik } from "formik";
import { useEffect, useMemo } from "react";

const WaitlistModal = () => {
  const { showModal, email, setWaitlistStore } = useWaitlistStore();

  const handleHide = () => setWaitlistStore(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: email,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    formik.setValues({ ...formik.values, email });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  const show = useMemo(() => showModal, [showModal]);

  return show ? (
    <main
      className={
        "fixed grid inset-0 place-items-center bg-black/60 backdrop-blur-sm z-20 px-2 " +
        ClashGrotesk.className
      }
    >
      <div className='inset-x-0 top-0 bg-transparent z-30 absolute p-4 md:p-8 lg:p-10 flex justify-end'>
        <button onClick={handleHide} className='scale-125 bg-red inline-flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-x text-neutral-950 dark:text-slate-50'
          >
            <line x1='18' y1='6' x2='6' y2='18'></line>
            <line x1='6' y1='6' x2='18' y2='18'></line>
          </svg>
        </button>
      </div>
      <article className='z-20 relative bg-gray-50 dark:bg-slate-950 max-w-xl w-full p-4'>
        <div className='text-center p-3 py-4 md:py-10 border-2 border-neutral-950 dark:border-slate-50'>
          <h1
            className={
              "text-2xl font-semibold text-slate-800 dark:text-slate-200 md:text-3xl " +
              ClashDisplay.className
            }
          >
            Join our waitlist
          </h1>
          <p className='text-slate-700 dark:text-slate-300 w-[4/5] md:max-w-sm mx-auto mt-3 lg:text-lg'>
            As a member of Dome Academy, you have access to community meetings,
            mentorship and collaboration with seasoned instructors and experts.
          </p>

          <form
            onSubmit={formik.handleSubmit}
            className='mt-4 md:mt-6 space-y-5 text-left max-w-lg mx-auto'
          >
            <section>
              <p className='mb-2 text-slate-700 dark:text-slate-300'>Name</p>
              <div
                className={
                  "flex  text-slate-900 dark:text-slate-200 border-2 border-neutral-950 dark:border-slate-50 divide-x-2 divide-neutral-950 dark:divide-slate-50 mx-auto " +
                  ClashGrotesk.className
                }
              >
                <input
                  type='text'
                  name='firstName'
                  className='bg-transparent outline-none border-none h-full py-4 px-3 flex-1 md:text-lg'
                  inputMode='text'
                  placeholder='John Doe'
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </section>
            <section>
              <p className='mb-2 text-slate-700 dark:text-slate-300'>Name</p>
              <div
                className={
                  "flex  text-slate-900 dark:text-slate-200 border-2 border-neutral-950 dark:border-slate-50 divide-x-2 divide-neutral-950 dark:divide-slate-50 mx-auto " +
                  ClashGrotesk.className
                }
              >
                <input
                  type='text'
                  name='lastName'
                  className='bg-transparent outline-none border-none h-full py-4 px-3 flex-1 md:text-lg'
                  inputMode='text'
                  placeholder='John Doe'
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </section>
            <section>
              <p className='mb-2 text-slate-700 dark:text-slate-300'>Email</p>
              <div
                className={
                  "flex  text-slate-900 dark:text-slate-200 border-2 border-neutral-950 dark:border-slate-50 divide-x-2 divide-neutral-950 dark:divide-slate-50 mx-auto " +
                  ClashGrotesk.className
                }
              >
                <input
                  type='email'
                  name='email'
                  className='bg-transparent outline-none border-none h-full py-4 px-3 flex-1 md:text-lg'
                  inputMode='email'
                  placeholder='johndoe@mail.com'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </section>
            <section>
              <button
                type='submit'
                className='appearance-none mt-3 px-3 w-full text-slate-800 dark:text-slate-100 hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold inline-block py-3 border-2 border-neutral-950 dark:border-slate-50'
              >
                Join waitlist
              </button>
            </section>
          </form>
        </div>
      </article>
    </main>
  ) : (
    <></>
  );
};

export default WaitlistModal;
