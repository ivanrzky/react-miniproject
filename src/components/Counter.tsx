import useCounter from "../hooks/useCounter";


const Counter = () => {
    const {count, handleDecrement, handleIncrement, handleReset} = useCounter(); 
    return ( 
    <div style={{ display : "flex", gap : "16px ", }}>
        <button onClick={handleIncrement}>Tambah</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>Kurang</button>
        <button onClick={handleReset}>Reset</button>
    </div>
    
    )
   
};

export default Counter;