import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    // let count = 0;

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
    return ( 
    <div style={{ display : "flex", gap : "16px ", }}>
        <button onClick={handleIncrement}>Tambah</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>Kurang</button>
    </div>
    
    )
   
}

export default Counter;