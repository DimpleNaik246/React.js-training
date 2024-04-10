import React from "react";
import { useState, useEffect } from "react";

export function ArrayTask(){
    const [array2, setArray2] = useState([4,5,6])
    const [array1, setArray1] = useState([1,2,3]);
    const [array3, setArray3 ] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        console.log(array3)
      }, [array3]);
    function MergeArray(){
        const mergdedArray = [...array1,...array2]
        setArray3(mergdedArray)
    }
    
    return(
        <>
        
        <p>Your first Array: {array1.join(',')} and Your second Array: {array2.join(',')}</p>
        <p>{"["+array3.join(',')+"]     "}</p>
        <button onClick={MergeArray}>Merge your Arrays</button>
        </>
    )
}