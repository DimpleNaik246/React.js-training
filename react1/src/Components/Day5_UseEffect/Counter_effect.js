import { func } from "prop-types";
import React from "react"
import { useState, useEffect } from "react"

export function CounterEffect(){
    const[counts, setCounts] = useState(0);

    useEffect(()=>{
        
            if(counts===-1){
                alert("your count is less than 0")
                setCounts(0)

            }
            if(counts===21){
                alert("your count is greater than 20")
                setCounts(20)
            }
            console.log("in use effect")
        
            
        
    },[counts])

    function Increase(){
        setCounts(counts+1)
        console.log("increased")
    
    }

    function Decrease(){
        setCounts(counts-1)
        console.log("decreased")
    }

    return(
        <>
            <br>
            </br> <hr></hr>
            <button onClick={Increase}>+</button>
            {counts}
            <button onClick={Decrease}>-</button>
        </>
    )
}