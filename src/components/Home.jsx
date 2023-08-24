import React from "react";
import { DiCode } from "react-icons/di";
import { FaChalkboardTeacher } from "react-icons/fa";
export default function home() {
  return (
    <>
      <div className='bg-white px-20 h-[40.438rem] rounded-2xl'>
        <div className='w-[80%]  flex justify-between items-center gap-9 pt-6'>
          <h1 className='text-4xl font-medium text-black'>ABOUT ME</h1>
          <div className='h-[.1rem] w-2/4 bg-main-light'></div>
        </div>
        <p className='mt-6 font-medium text-base'>
          Hello there! I'm thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>
        <h2 className='font-medium text-3xl my-7'>What i do!</h2>
        <div className='flex flex-row justify-between'>
          <div className='bg-[#FFEBD1] w-[40%] h-36 rounded-xl gap-2'>
            <div className='p-2 '>
              <div className='flex flext-row items-center font-medium text-xl '>
                <DiCode color='red' /> Web Development
              </div>
              <p className='s font-normal text-xs mt-1 text-slate-500'>
                As a developer, I find myself most captivated by the power and
                flexibility of NEXT.js. I'm always eager to dive into new
                projects that leverage NEXT.js and discover innovative ways to
                create fast, scalable, and user-friendly applications.
              </p>
            </div>
          </div>
          <div className='bg-[#F2F7FC] w-[40%] h-36 rounded-xl'>
            <div className='p-2 '>
              <div className='flex flext-row items-center font-medium text-xl gap-2'>
                <FaChalkboardTeacher color='#FF9C1A' /> Mentorship
              </div>
              <p className='s font-normal text-xs mt-1 text-slate-500'>
                I have also found great joy in sharing my knowledge with others.
                Being a technical mentor allows me to give back to the community
                that has supported me throughout my career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
