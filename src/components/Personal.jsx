
import image from "../assets/profile_picture.png";
import {
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoGithub,
} from "react-icons/bi";
import { IconContext } from "react-icons";
import Details from "./Details";
export default function Personal() {

  return (
    <>
      <section className='w-1/4 h-[56rem]'>
        <div className='flex justify-center'>
          <img src={image} alt='Logo' className='z-10' />
        </div>
        <div className='bg-white p-5  relative -top-20 rounded-2xl'>
          <div className="mt-16 px-6">
            <div className='text-center'>
              <h2 className="font-semibold text-3xl">Anup Kumar</h2>
              <p className="font-light text-[#0B0909] opacity-80 py-3">FullStack Developer</p>
            </div>
            <div className='flex justify-between'>
              <IconContext.Provider value={{ className: "w-10 h-5 " }}>
                <div className='py-3 bg-light-2 rounded-md'>
                  <BiLogoInstagramAlt fill='#1877F2' />
                </div>
                <div className='py-3 bg-light-2 rounded-md'>
                  <BiLogoLinkedin fill='#1877F2' />
                </div>
                <div className='py-3 bg-light-2 rounded-md'>
                  <BiLogoTwitter fill='#1877F2' />
                </div>
                <div className='py-3 bg-light-2 rounded-md'>
                  <BiLogoGithub />
                </div>
              </IconContext.Provider>
            </div>
          </div> 
          <Details/>
        </div>
      </section>
    </>
  );
}
