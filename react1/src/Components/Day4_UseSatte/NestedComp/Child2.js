import React from "react";
import { Child3 } from "./Child3";

export function Child2({manipulateData}){
    return(
        <>
            <h3>Child Component 2</h3>
            <Child3 manipulateData={manipulateData}/>
        </>
    )
}