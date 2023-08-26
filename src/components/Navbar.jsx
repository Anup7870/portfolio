import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { useContext } from "react";
import Context from "../context/context.js";
import { Link } from "react-router-dom";
export default function Main() {
  let navState = useContext(Context);

  return (
    <nav className='flex  bg-light-2 p-4 drop-shadow-2xl gap-8 rounded-3xl border-slate-400'>
      <Link to='/' className=''>
        <div
          className={
            "button  flex flex-col items-center justify-center p-2 rounded-md w-20 cursor-pointer" +
            (navState.global.NavFilter === 1 ? "  grad" : " bg-but  text-black")
          }
          onClick={() => {
            navState.SetGlobal({ ...navState.global, NavFilter: 1 });
          }}>
          <AiOutlineHome />
          <p className='font-medium text-sm'>Home</p>
        </div>
      </Link>
      <Link to='/resume' className=''>
        <div
          className={
            "button  flex flex-col items-center justify-center p-2 rounded-md w-20 cursor-pointer" +
            (navState.global.NavFilter === 2 ? "  grad" : " bg-but  text-black")
          }
          onClick={() => {
            navState.SetGlobal({ ...navState.global, NavFilter: 2 });
          }}>
          <LuFileSpreadsheet />
          <p className='font-medium text-sm'>Resume</p>
        </div>
      </Link>
      <Link to='/work' className=''>
        <div
          className={
            "button  flex flex-col items-center justify-center  p-2 rounded-md w-20 cursor-pointer   text-black" +
            (navState.global.NavFilter === 3 ? " grad" : " bg-but")
          }
          onClick={() => {
            navState.SetGlobal({ ...navState.global, NavFilter: 3 });
          }}>
          <MdWorkOutline />
          <p className={"font-medium text-sm"}>Portfolio</p>
        </div>
      </Link>
      <Link to='/contact' className=''>
        <div
          className={
            "button flex flex-col items-center justify-center  p-2 rounded-md  w-20 cursor-pointer" +
            (navState.global.NavFilter === 4 ? "  grad" : " bg-but  text-black")
          }
          onClick={() => {
            navState.SetGlobal({ ...navState.global, NavFilter: 4 });
          }}>
          <BiSolidContact />
          <p className={"font-medium text-sm"}>Contact</p>
        </div>
      </Link>
    </nav>
  );
}
