import React, { useState } from "react";
import ChildComponent from './Childcomp';

export function ParentComponent(){
    let array = ["x", "y"]
    return(
        <ChildComponent array={array}><p>Hello {array} </p></ChildComponent>
    )
}

