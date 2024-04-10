import React from "react";
import {Car} from "./StateProps2"

export function StatevsProps(){
    return(
        <>
            <h1>State vs Props</h1>
            <Car name="mercedes" color="black" defaultName="BMW" />
        </>
    )
}