import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Resume from "./Resume.jsx";
import Work from "./work";
import Contact from "./Contact.jsx";
export default function Main() {
  return (
    <>
      <main className='w-full lg:w-3/4 md:w-screen h-full'>
        <div className='w-full h-2/6 items-center lg:flex lg:justify-end'>
          <Navbar />
        </div>
        <div className='container mt-12  m-auto '>
          <div className='pl-10 w-full'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/resume' element={<Resume/>} />
              <Route path='/work' element={<Work/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}
