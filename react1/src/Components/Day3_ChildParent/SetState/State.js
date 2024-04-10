import React from "react";
import {useState} from "react";
// import img1 from "../../../Components/Day3_ChildParent/SetState"

import img1 from "../../../images/img1.png"
import img2 from "../../../images/img2.png"


export function AddState(){
    const randomName = "xyz"
    const [fname, setFname] = useState(<h2>Hello</h2>)
    const addHtml=()=>{
        setFname(<h2>Hi</h2>)
    }
    //
    const images = [img1, img2]
    const [img, setImg] = useState(images[0])

    const changeImg =()=>{
        setImg(images[1])
    }
    
    const [jsxElement, setjsxElement] =useState(
        <div>
            <p>This is JSX, hello {randomName}</p>
        </div>
    )
    const changeJSX=()=>{
        setjsxElement(
            <div>
                <p>The JSX is now updated! hello {randomName}</p>
            </div>
        )
    }
    

    return(
        <>
        <p>Adding html in useState</p>
        <h3>{fname}</h3>
        <button onClick={addHtml}>See Html</button>
        <br></br><hr></hr>
        
        <img src={img} width={100} />
        <button onClick={changeImg}>Change image</button>
        <hr></hr>

        {jsxElement}
        <button onClick={changeJSX}>Change JSX</button>
        <hr></hr>
        </>
        
    )

    
}


