import React from "react";
import { useState } from "react";
import img1 from "../../../src/images/img1.png";


export function ImageError(){
    const[ImgError, setImgError] = useState(false)
    const [image, setImage] = useState(img1)

    return(
        <>
            {ImgError && <p>Error: Problem in image Loading</p>}
            <img src="img1.png" onError={()=>setImgError(true)} alt="Image"></img>
        </>
    )
}