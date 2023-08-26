import Context from "./context.js";
import {useState} from "react";


const GlobalState =(props)=>{
  const globalData = {
   "NavFilter":1
  }
  const [global,SetGlobal] = useState(globalData)
  return(
      <Context.Provider value={{global,SetGlobal}}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </Context.Provider>
  )
}

export default GlobalState;
