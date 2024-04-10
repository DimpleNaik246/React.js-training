import React from "react";

export const ChildComp=({storedData, setStoredData})=>{
    const passFunction =()=>{
        setStoredData(storedData+" Naik")
    };
    return(
        <>
            <h3>Child Component</h3>
            <p>Data from parent: {storedData}</p>
            <button onClick={passFunction}>Change Data</button>
        </>
    );
};