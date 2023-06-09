import { useState } from "react";
import "./App.css";

function App() {
  const[count,setcount]=useState(0);
  function decreaseHandler(){
           setcount(count-1);
  }
  function increaseHandler(){
    setcount(count+1);
}
function resetHandler(){
  setcount(0);
}
  return (
   
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="font-medium text-[#0398d4] text-2xl">Increment && decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className="text-center border-r-2 w-20 border-[#bfbfbf] text-5xl"> 
          -</button>
        <div className="font-bold gap-12 text-5xl">
          {count}
          </div>
      <button onClick={increaseHandler}  className="text-center border-l-2 w-20 border-[#bfbfbf] text-5xl">
        +</button>
      </div>
      <button onClick={resetHandler} className="bg-[#0398d4] px-5 py-2 text-white rounded-sm text-lg">
        Reset
        </button>
    
    </div>
  );
}

export default App;
