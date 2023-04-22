"use client";
import { useWaitlistStore } from "@/store/waitlistStore";
import { ClashGrotesk } from "@/utils/font";
import { useFormik } from "formik";

const WaitlistForm = () => {
  const { setWaitlistStore } = useWaitlistStore();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: ({ email }) => {
      useWaitlistStore.setState({ email });
      setWaitlistStore(true);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={
        "flex max-w-xl text-slate-900 dark:text-slate-200 border-2 border-neutral-950 dark:border-slate-50 divide-x-2 divide-neutral-950 dark:divide-slate-50 mx-auto " +
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
      />
      <button
        type='submit'
        className='appearance-none px-3 hover:bg-slate-950 dark:hover:bg-slate-50 hover:text-slate-50 dark:hover:text-black font-semibold text-sm sm:text-base md:text-lg'
      >
        Join waitlist
      </button>
    </form>
  );
};

export default WaitlistForm;
