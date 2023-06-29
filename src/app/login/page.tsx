import { ClashGrotesk } from "@/utils/font";
import React from "react";

const Login = () => {
  return (
    <main
      className={` min-h-screen mb-0 sticky flex ` + ClashGrotesk.className}
    >
      <div className='h-screen border-r grid bg-gray-50 dark:bg-neutral-950 border-neutral-950/70 dark:border-slate-50/70 w-2/5 text-slate-900 dark:text-slate-200 place-items-center'>
        <h1>Login</h1>
      </div>
    </main>
  );
};

export default Login;
