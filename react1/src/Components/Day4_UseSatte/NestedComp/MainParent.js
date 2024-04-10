import React from "react";
import { Child1 } from "./Child1";

export function MainParent(){
    
    const manipulateData = (data) =>{
        return data.toUpperCase();
    }
    
    return(
        
        <>
            <hr></hr>
            <h1>Parent Component</h1>
            <Child1 manipulateData={manipulateData}/>
        </>
    )
}