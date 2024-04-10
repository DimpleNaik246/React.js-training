import React, { useState } from "react";

export function CounterTask(){
    

    const [count, setCount]=useState(0);

    const Increment =()=>{
        setCount(count+2)
        if(count===20){
            setCount(0)
            
            
        }
    }

    const Decrement =()=>{
        setCount(count-2)
        if(count===0){
            setCount(20)
            
        }
    }
    return(
        <>
       <hr></hr>
        <br></br>
        <button onClick={Increment}>+</button>
        <p>Count: {count}</p>
        <button onClick={Decrement}>-</button>
        </>
        
    )
}