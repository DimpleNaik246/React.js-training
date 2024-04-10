import React from "react";
import PropTypes from "prop-types";

function TypeCheck (props){
    return(
        <>
            <h2>hello, {props.myName}</h2>
            <h2>I'm {props.age} years old</h2>
        </>
    )
}

TypeCheck.propTypes={
    myName:PropTypes.string,
    age:PropTypes.number
}

TypeCheck.defaultProps={

}


export default TypeCheck;