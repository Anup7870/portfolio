import React from "react";

export default function Contact() {
  return (
    <div className='bg-white px-20 h-[40.438rem] rounded-2xl'>
      <div className='w-[80%]  flex justify-between items-center gap-9 pt-6'>
        <h1 className='text-4xl font-medium text-black'>Contact Info</h1>
        <div className='h-[.1rem] w-2/4 bg-main-light'></div>
      </div>
      <div className='w-full mt-4'>
        <div className='flex flex-row justify-between'>
          <div className='bg-[#FFE3BF] w-[40%] h-32 rounded-xl gap-2'>
            <div className='p-3 flex flex-col'>
              <span className='text-xm font-light'>2021</span>
              <span className='text-xl font-medium'>Intermediate</span>
              <span className='text-sm font-normal text-slate-500'>
                St. Paul College Ranchi{" "}
                <p className='text-slate-400'>Second Division 58%</p>
              </span>
            </div>
          </div>
          <div className='bg-[#FFEED9] w-[40%] h-32 rounded-xl gap-2'>
            <div className='p-3 flex flex-col'>
              <span className='text-xm font-light'>2021</span>
              <span className='text-xl font-medium'>Intermediate</span>
              <span className='text-sm font-normal text-slate-500'>
                St. Paul College Ranchi{" "}
                <p className='text-slate-400'>Second Division 58%</p>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-light rounded-xl">
          <div className="p-10">
            <p>
              I am always open to discussing new projects, opportunities in tech
              world, partnerships and more so mentorship.{" "}
            </p>
            <form>
              <div className="py-5 border-2 border-[#B5B5B5] border-r-0 border-l-0 border-t-0 w-full flex">
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" id="name" className="bg-transparent ml-1 outline-none w-full"/>
              </div>
              <div className="py-5 border-2 border-[#B5B5B5] border-r-0 border-l-0 border-t-0 w-full flex">
                <label htmlFor='name'>Email:</label>
                <input type="text" name="email" id="email" className="bg-transparent ml-1 outline-none w-full"/>
              </div>
              <div className="py-5 border-2 border-[#B5B5B5] border-r-0 border-l-0 border-t-0 w-full flex">
                <label htmlFor='name'>Message:</label>
                <input type="text" name="text" id="text" className="bg-transparent ml-1 w-full outline-none"/>
              </div>
              <button className="mt-6 px-5 py-2 border-2 border-main-color rounded-3xl ">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
