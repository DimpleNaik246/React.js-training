import React from "react";
import { useState } from "react";
// import {Child} from "../Child";
import { ChildComp } from "./StateChild";

export const ParentComp=()=>{
    const [storedData, setStoredData] =useState("Dimple");
    return(
        <>
            <h2>Parent Component</h2>
            <p>Data: {storedData}</p>
            
            <ChildComp storedData={storedData} setStoredData={setStoredData}/>
        </>
    );
};