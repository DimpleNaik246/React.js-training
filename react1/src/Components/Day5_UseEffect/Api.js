import React from "react";
import { useState, useEffect } from "react";

export function APIFetch(){
    
    const[dataisLoaded, setDataisLoaded] = useState(false)
    const[items, setItems] = useState([]);

    useEffect(()=>{
        console.log("correctly working")
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((json)=>{
            setDataisLoaded(true);
            setItems(json);
        },[])
        
    })
    if(!dataisLoaded){
        return(<h1>Please wait some time</h1>)
    }
    

    return(
        <>
            <h3>Fetch data from an API in react</h3>
            {items.map((item)=>(
                <div>
                    <ol key={item.id}>
                        <div>
                            {"Username:"}
                            {item.username}
                        </div>
                        <div>
                            FullName:{item.name},
                        </div>
                        <div>
                            Usermail:{item.email}
                        </div>
                    </ol>
                </div>
            ))}
        </>
    )
}