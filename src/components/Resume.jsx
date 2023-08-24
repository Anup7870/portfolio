import React from "react";
import { IconContext } from "react-icons";
import { PiGraduationCapThin } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
export default function Resume() {
  return (
    <div className='bg-white px-20 h-[40.438rem] rounded-2xl'>
      <div className='w-[80%]  flex justify-between items-center gap-9 pt-6'>
        <h1 className='text-4xl font-medium text-black'>Resume</h1>
        <div className='h-[.1rem] w-2/4 bg-main-light'></div>
      </div>
      <section className='w-full flex justify-between'>
        <IconContext.Provider value={{ color: "red", size: "2rem" }}>
          <div className='flex flex-col w-[50%] gap-4'>
            <div className='flex flex-row gap-3 font-medium text-xl'>
              <PiGraduationCapThin />
              Education
            </div>
            <div className='bg-[#FFE3BF] w-[70%] h-32 rounded-xl gap-2'>
              <div className='p-3 flex flex-col'>
                <span className='text-xm font-light'>2021</span>
                <span className='text-xl font-medium'>Intermediate</span>
                <span className='text-sm font-normal text-slate-500'>
                  St. Paul College Ranchi{" "}
                  <p className='text-slate-400'>Second Division 58%</p>
                </span>
              </div>
            </div>
            <div className='bg-[#FFEED9] w-[70%] h-32 rounded-xl gap-2'>
              <div className='p-3 flex flex-col'>
                <span className='text-xm font-light'>2021-2024</span>
                <span className='text-xl font-medium'>Bsc(IT)</span>
                <span className='text-sm font-normal text-slate-500 line-clamp-3'>
                  Dr. Shyama Prasad Mukherjee University
                  <p className='text-slate-400'>current Agg - 7.5cgpa</p>
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[50%]'>
            <div className='flex flex-row gap-3 font-medium text-xl mb-4'>
              <MdWorkOutline />
              Experience
            </div>
            <div className='bg-[#FFEED9] w-[70%] h-32 rounded-xl gap-2'>
              <div className='p-3 flex flex-col'>
                <span className='text-xm font-light'>2022 (Training)</span>
                <span className='text-xl font-medium'>PHP</span>
                <span className='text-sm font-normal text-slate-500 line-clamp-3'>
                  Central Coal Filed Ltd.
                </span>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </section>
      <div className='w-full flex flex-row justify-between mt-6'>
        <div className="flex flex-col w-[50%] ">
          <h2 className='mt-4 font-semibold text-xl'>Work Skill</h2>
          <div className='flex flex-row flex-wrap gap-8  mt-2 '>
            <p className='p-1 bg-light rounded-xl'>React.js</p>
            <p className='p-1 bg-light rounded-xl'>Html5</p>
            <p className='p-1 bg-light rounded-xl'>css3</p>
            <p className='p-1 bg-light rounded-xl'>Tailwind css</p>
            <p className='p-1 bg-light rounded-xl'>Javascript</p>
            <p className='p-1 bg-light rounded-xl'>Python</p>
            <p className='p-1 bg-light rounded-xl'>C++</p>
            <p className='p-1 bg-light rounded-xl'>C</p>
          </div>
          <div className='flex flex-col w-[50%] '></div>
        </div>
        <div className="flex flex-col w-[50%]">
          <h2 className='mt-4 font-semibold text-xl'>Soft Skill</h2>
          <div className='flex flex-row flex-wrap gap-8  mt-2 '>
            <p className='p-1 bg-light rounded-xl'>Leader Ship</p>
            <p className='p-1 bg-light rounded-xl'>Time Management</p>
            <p className='p-1 bg-light rounded-xl'>Flexibility</p>
            <p className='p-1 bg-light rounded-xl'></p>
          </div>
          <div className='flex flex-col w-[50%] '></div>
        </div>
      </div>
    </div>
  );
}
