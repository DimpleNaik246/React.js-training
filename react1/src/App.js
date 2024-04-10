import logo from './logo.svg';
import './App.css';
import React from "react";
import {useState} from "react";
// import Task1 from './Components/task1';
// import MyTask1 from './Components/Day1/Mytask1';
// import MyTask2 from './Components/Day1/Mytask2';
// import TypeCheck from './Components/Day2_Props/Task1';
// import Task2 from './Components/Day2_Props/Task2';
import { AddState } from './Components/Day3_ChildParent/SetState/State';

import { ParentComponent } from './Components/Day3_ChildParent/Children/Parentcomp';
// import { AddState } from './Components/Day3_ChildParent/SetState/State';
// import { Nested } from './Components/Day3_ChildParent/SetState/Nested';
// import { ParentComp } from './Components/Day3_ChildParent/SetState/UseState';
import { ArrayTask } from './Components/Day4_UseSatte/Array';
import { AppendArrayTask } from './Components/Day4_UseSatte/UpdateArray';
import { CounterTask } from './Components/Day4_UseSatte/Counter';
import { MainParent } from './Components/Day4_UseSatte/NestedComp/MainParent';
import { ImageError } from './Components/Day4_UseSatte/Image';
import { StatevsProps } from './Components/Day5_UseEffect/StateProps';
import { CounterEffect } from './Components/Day5_UseEffect/Counter_effect';
import { APIFetch } from './Components/Day5_UseEffect/Api';
import { SetTimeOut } from './Components/Day6_useEffectprac/Settimeout';
// import { Child } from './Components/Day3_ChildParent/SetState/StateChild';


// import TypeCheck from './Components/Day2/Task1';

// function App() {
//   return (
//     <div className="App">
//       <h1>hello react!</h1>
//     </div>
//   );
// }

function App(){

  const [Count, setCount]=useState(0)

  const increase=()=>{
    setCount(Count+1)
  }

  

    console.log("render");
    return (

      <div className='App'>

        <h1>Hello React!</h1>
        {/* <Task1/> */}
        {/* <MyTask1/>
        <MyTask2/> */}
        {/* <TypeCheck myName={21}/>
        <TypeCheck age={21}/>
        <Task2 increase={increase} count={Count}/> */}
       
        <ParentComponent/>

        {/* <ParentComp/> */}
        <AddState/>
        {/* <Nested/> */}

        
        {/* <Child/> */}

        <ArrayTask/>
        <AppendArrayTask/>
        <CounterTask/>

        <MainParent/>

        <ImageError/>

        <StatevsProps/>

        <CounterEffect/>

        <APIFetch/>

        <SetTimeOut/>
      </div>
      
    )
}
  
  
    
  

  


export default App;
