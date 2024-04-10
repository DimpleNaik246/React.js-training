import React from "react";
import { Child2 } from "./Child2";

export function Child1({manipulateData}){
    
    return(
        <>
            <h2>Child Component 1</h2>
            <Child2 manipulateData={manipulateData}/>
        </>
    )
}