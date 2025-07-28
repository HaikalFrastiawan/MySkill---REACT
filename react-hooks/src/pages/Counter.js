import { useState,useEffect } from "react";

function Counter () {
    const [Count,setCount] = useState (0)
    const [Calculation,setCalculation] = useState(0)

    useEffect( ()=>{
        setCalculation( () => Count * 2)
    }, [Count]) //add the variabel here

    return (
        <>
        <p> Count: {Count} </p>
        <button onClick={ () => setCount ((c) => c+1 )}> + </button>
        <p>Calculation: {Calculation}</p>
        </>
    )
}

export default Counter