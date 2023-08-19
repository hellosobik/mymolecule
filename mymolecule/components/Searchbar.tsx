'use client'
import {useState, useRef} from "react"

export default function Searchbar(props) {
  const inputField=useRef(null);
    const [initial, setInitial] = useState(props.value);
  return (
    
    
      <div className="font-bold font-sans text-black text-2xl bg-gray-800 sticky top-0 text-center w-screen py-3 ring-red-400 border-lime-400 ">
      <form onSubmit={(e)=>{e.preventDefault();inputField.current.blur(); props.dataFun(initial)}}>
        <input type="text" className="h-10 px-3 p-3 w-11/12 ring-red-400 border-lime-400 z-20" placeholder="search" value={initial} onChange={event => setInitial(event.target.value)} ref={inputField} />
     <button type="submit"></button>
      </form> </div>
    

  );
}
