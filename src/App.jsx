import { IconContext } from "react-icons";
import "./App.css";
import { BsMoon } from "react-icons/bs";
import Personal from "./components/Personal";
import Main from "./components/Main";
import Context from "./context/context";
import { useContext, useEffect, useState } from "react";

function App() {
  const context = useContext(Context);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    console.log(context.global.width);
    if (context.global.width < 760) setMobile(true);
  },[context.global.width]);

  return (
    <>
      <div className='h-screen bg-light w-screen   overflow-x-scroll'>
        <div className='px-8 pt-5 h-full'>
          <header className='flex justify-between h-14 items-center'>
            <p className='font-logo font-bold lg:text-4xl md:text-3xl flex flex-row gap-3 item-center justify-center'>
              {mobile === true ? (
                <img
                  src='src\assets\profile_picture.png'
                  alt=''
                  className='w-10 h-10 rounded-xl'
                />
              ) : (
                " "
              )}
              Anup<span className='text-main-light'>Kumar</span>
            </p>
            <div className='rounded-full w-12 lg:w-12 md:w-8 lg:h-8 md:h-8 h-12 drop-shadow-md flex justify-center items-center bg-light-2 cursor-pointer hover:scale-110 '>
              <IconContext.Provider value={{ className: "text-xl" }}>
                <BsMoon />
              </IconContext.Provider>
            </div>
          </header>
          <main className='w-full mt-9'>
            <section className='flex justify-between '>
              {mobile === true ? " " : <Personal />}
              <Main />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
