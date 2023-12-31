import Context from "./context";
import {useState} from "react";
 

const GlobalState =(props)=>{
  const width = window.innerWidth;
  const globalData = {
   "NavFilter":1,
   "width":width
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
