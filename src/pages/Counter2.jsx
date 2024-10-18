import { useEffect, useState } from "react"


const Counter2 = () => {
    //create useState to remount ui
    const [counT, setCounT] = useState(0);
//    write a function to increment the value of count whenever button is pressed

    // 1. event listener for button
    const handleClick = ()=>{
        // 2. What should happen when button is clicked?
        setCounT(counT +1);
        console.log(`Button count is : ${counT}`);
    };
    //side effect of function being executed

    useEffect(()=>{
        alert(`Count has been successfully update to ${counT}`)
    },[counT]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        <p className="font-bold text-[1em]">Count : {counT}</p>
        <button onClick={handleClick} className="w-[30%] h-[30%] p-[2em] bg-[#61c061] text-[2em] shadow-lg font-extrabold">Click Me</button>
    </div>
  )
}

export default Counter2;