import { useEffect, useState } from "react";


const Counter = () => {
    // hook useState returning count, setcount
    // const res = useState(0);
    // [  state,    func to update state]
    const [count, setCount] = useState(0);
    // console.log(res);
    //  let count=0;

    const handleClick = () =>{
        // count+=1;

        console.log("I was called"); 
        setCount(count+1)
        console.log(count);
    }; 
    // useEffect handles side effects; anything you want to happen as a result of the state being changed.
    useEffect(()=>{
        alert(`Current value of count is ${count}`)
    },[count]);
    
   
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
        <p className="font-bold mb-[2em] text-[2em]">Count : {count}</p>
        <button 
        // onClick={()=>handleClick()}
        onClick={handleClick} 
        className="bg-pink-500 w-[30%] h-[30%] shadow-xl p-4 text-[black] rounded-md text-[3em] font-bold">Click Me </button>
    </div>
  )
}

export default Counter;