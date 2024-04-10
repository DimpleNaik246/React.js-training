import React from "react";

class MyTask1 extends React.Component{
    constructor(props){
        super()

        this.state={
            name:"john",
            id:1,
            // isGraduate:true,
            count:0
        }
        console.log("My name is: ", this.state.name)
    }

    

    changeName=(e)=>{
        this.setState({name:"John Doe"})
    }

    render(){
        // console.log("render");
        return(
            <>
            <h1>Change your Name</h1>
            <h2>{this.state.name}</h2>
            <button onClick={this.changeName}>Change Name</button>
            <hr/>
            </>

        )
    }
}


export default MyTask1;