import React from "react"
import {useState} from "react"

export function Car(props){
    const[carName, setCarName] = useState(props.defaultName)
    return(
        <>
        <div>The car is {carName}</div>
        <input type='text' placeholder="car's name" onChange={(e)=>setCarName(e.target.value)}/>
        </>
    )
}