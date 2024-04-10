import React from "react";
import { useState } from "react";

export function AppendArrayTask(){
    

    const [myArray, setMyArray] = useState([1,2,3])

    function AppendArray(){
        const input =   prompt("Enter your number");
        setMyArray([input,...myArray])
    }


    return(
        <>
        <p>Your updated array: {myArray.join(",")}</p>
        <button onClick={AppendArray}>Update your Array</button>
        </>
    )
}