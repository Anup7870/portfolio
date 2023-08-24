import { IconContext } from "react-icons";
import "./App.css";
import { BsMoon } from "react-icons/bs";
import Personal from "./components/Personal";
import Main from "./components/Main";

import GlobalState from "./context/Global";
function App() {
  return (
    <>
    <GlobalState>
      <div className='container h-screen bg-light max-w-screen-2xl overflow-x-scroll'>
        <div className='px-8 pt-5 h-full'>
          <header className='flex justify-between h-14 items-center'>
            <p className='font-logo font-bold text-4xl'>
              Anup<span className='text-main-light'>Kumar</span>
            </p>
            <div className='rounded-full w-12 h-12 drop-shadow-md flex justify-center items-center bg-light-2 cursor-pointer hover:scale-110 '>
              <IconContext.Provider value={{ className: "text-xl" }}>
                <BsMoon />
              </IconContext.Provider>
            </div>
          </header>
          <main className="w-full mt-9">
            <section className='flex justify-between '>
              <Personal />
              <Main />
            </section>
          </main>
        </div>
      </div>
      </GlobalState>
    </>
  );
}

export default App;
