import React from "react";

function Child({handleMyclick}){
    const counter =10;

    
    return(
        <>
        <p>this is a child component</p>
        <button onClick={()=>handleMyclick(counter)}>Click please</button>
        </>
        
        
    )
}

export default Child;