'use client'
import  Navbar  from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import BodyDemo from "@/components/bodyDemo";
import {useState} from 'react';
// function demolines(numlines) {
//   let demostring;
  // for (let index = 0; index < numlines; index++) {
  //   demostring+="<div>demoline -"+index.toString()+"</div>";
  // }
  let App = () => {
  return <div className="text-center py-3 ">

    <ul className="space-y-3">{[...Array(100)].map((e, i) => {
    return <li key={i}>{i}</li>
  })}</ul>


  </div>
  }
  // return demostring;


export default function Home() {
  const [element, setelement] = useState("")
  function getData(data) {
    
    setelement(data);
          
  }
  return (

    <div className="relative">
      <Navbar />
      <Searchbar value={element} dataFun={getData}/>
      <BodyDemo value={element} />

      <App/>
          </div>
  );
}
