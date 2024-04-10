import React from "react";

function Task2(props){

    return(
        <>
        <p>{props.count}</p>
        <button onClick={props.increase}>Increment</button>
        </>
    )
}

export default Task2;

