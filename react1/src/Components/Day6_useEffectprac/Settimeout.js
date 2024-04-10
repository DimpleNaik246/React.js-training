import React from "react";
import { useState, useEffect } from "react";

export function SetTimeOut(){
    const[userInp, setUserInp] = useState('');

    useEffect(()=>{
        const stopInp = setTimeout(()=>{
            console.log("Searching for: ", userInp)
        }, 5e000)

        return ()=>clearTimeout(stopInp)
    }, [userInp])

    return(
        <>
            <input type="text" placeholder="Enter Name" value={userInp} onChange={(e)=>setUserInp(e.target.value)}></input>
        </>
    )
}