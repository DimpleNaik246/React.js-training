import React from "react";

export function Child3({manipulateData}){
    const originalData = "dimple"
    
    const manipulatedData =manipulateData(originalData)
    return(
        <>
            <h4>Child Component 3</h4>
            <p>Original Data: {originalData}</p>
            <p>Manipulated Data: {manipulatedData}</p>
        </>
    )
}