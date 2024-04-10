import React from "react";

class MyTask2 extends React.Component{
    constructor(props){
        super()
        console.log("inside constructor")
        this.state={
            count:0
        }
    }

    componentDidMount(){
        console.log("component did mount!")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("component did update!")
    }

    componentWillUnmount(){
        console.log("component will unmount!")
    }

    increment=(e)=>{
        this.setState({ count: this.state.count + 1 })

    }

    decrement=(e)=>{
        this.setState({ count: this.state.count - 1 })

    }


    render(){
        return(
            <div>
                <button onClick={this.increment}>+</button>
                <p>count:{this.state.count}</p>
                <button onClick={this.decrement}>-</button>
                {/* <button onClick={disappear}>Click me!</button> */}
            </div>
        )
    }
}

export default MyTask2;