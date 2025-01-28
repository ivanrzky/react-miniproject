 import { useState } from 'react';

const useCounter = () => {
    const [count, setCount] = useState(0);

    const handleDecrement = ()=>{
        alert("Decrement")
        //count--;
        setCount(count - 1);
    }
    const handleIncrement = ()=>{
        alert("Increment")
       // count++;
         setCount(count + 1);
        
    }
    const handleReset = ()=>{
        alert("Reset")
        //count = 0;
        setCount(0);
    } 
    return {count, handleDecrement, handleIncrement, handleReset};
};
export default useCounter;