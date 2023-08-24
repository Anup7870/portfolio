import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineStar} from "react-icons/ai"
export default function work() {
  return (
    <div className='bg-white px-20 h-[40.438rem] rounded-2xl'>
      <div className='w-[80%]  flex justify-between items-center gap-9 pt-6'>
        <h1 className='text-4xl font-medium text-black'>Portfolio</h1>
        <div className='h-[.1rem] w-2/4 bg-main-light'></div>
      </div>
      <div className='w-full mt-4'>
        <h2 className="font-semibold text-lg">competitive coding Profiles :-</h2>
        <div className=" mt-2">
          <Link to="https://www.codechef.com/users/anup_kumar_787">
          <p className="flex  items-center">Codechef<AiOutlineStar color="red"/><AiOutlineStar color="red"/></p>
          </Link>
          <Link to="https://leetcode.com/anupkumar787033/">
          <p>Leetcode <span className="tx text-slate-400 text-xs">(Beginer)</span> </p>
          </Link>
          
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-lg mt-3">Web projects</h2>

      </div>
    </div>
  );
}
