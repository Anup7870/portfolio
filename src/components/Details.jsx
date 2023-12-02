import React from "react";
import { IconContext } from "react-icons";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
import Resume from "./Resume.pdf";
import { useContext } from "react";
import Context from "../context/context";
export default function Details() {
  const data = useContext(Context)

  return (
    <div className='w-full bg-light-2 mt-10 rounded-2xl'>
      <div className='px-3 w-full'>
        <IconContext.Provider value={{ className: "w-5 h-5" }}>
          <div className='flex flex-row gap-4 py-6 '>
            <MdPhoneIphone fill='#FF9A1A' />
            <span className=''>
              <p className='font-semibold text-sm text-gray-600 opacity-80'>
                Phone
              </p>
              <p className='font-semibold text-sm'>+91 9341756835</p>
            </span>
          </div>
          <div className='border-2 border-b border-b-line border-t-0 border-r-0 border-l-0'></div>
          <div className='flex gap-4 flex-row  py-6 '>
            <HiOutlineMailOpen color='#FF9A1A' />
            <span>
              <p className='font-semibold text-sm text-gray-600 opacity-80'>
                Email
              </p>
              <p className='font-semibold text-sm text-ellipsis'>
                anupkumar7870337110@gmail.com
              </p>
            </span>
          </div>
          <div className='border-2 border-b border-b-line border-t-0 border-r-0 border-l-0'></div>
          <div className='flex flex-row gap-4 py-6'>
            <CiLocationOn fill='#FF9A1A' />
            <span>
              <p className='font-semibold text-sm text-gray-600 opacity-80'>
                Location
              </p>
              <p className='font-semibold text-sm'>Ranchi, Jharkhand</p>
            </span>
          </div>
          <div className='border-2 border-b border-b-line border-t-0 border-r-0 border-l-0'></div>
          <div className='w-full flex justify-center'>
            <Link
              to={Resume}
              target='_blank'
              download='Resume.pdf'
              rel='noreferrer'>
              <button
                className='grad flex flex-row p-4 rounded-2xl mt-6 mb-7 items-center gap-2'
                onClick={() => downloadResume}>
                <AiOutlineDownload /> Download Resume
              </button>
            </Link>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
