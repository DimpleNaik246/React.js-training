import React from "react";
import Child from "./Child";


function Parent(){

    const handleClick =(counter)=>{
        console.log("Parent: handle click fired", counter)
    }
    return(
        <>
        
        <Child handleMyclick={handleClick}/>
        </>
        
    )
}
// 
export default Parent;