// import {useState, useEffect} from 'react';

// function App () {
//     const [counter, setCounter]=useState(0);
//     const [data, setData]=useState(0);

//     function secondFun () {
//         console.log("second function", counter)
//     }
    

//     function callOnce() {
//         console.log("once called function" )
//     }
    
// useEffect(()=>{
//     callOnce()   
// }, [])

// useEffect(()=>{
//     secondFun()
// }, [counter])

//     return (
//         <div>
//             <h1>using of useEffect Hook</h1>
//             <button onClick={()=>setCounter(counter+1)}>Counter{counter}</button>
//             <button onClick={()=>setData(data+1)}>Data {data}</button>
//         </div>
//     )
// }
// export default App;

// import User from './User.jsx'
// import College from './College.jsx'

// function App () {
//     const collegeData = [
//         {
//             name: "NIT Raw",
//             city: "Raw",
//             website: "nit.com",
//             student: [
//                 {
//                     name: "Ali",
//                     age: "32",
//                     email: "ali@mail.com"
//                 },
//                 {
//                     name: "Hasan",
//                     age: "29",
//                     email: "hasan@mail.com"
//                 },
//                 {
//                     name: "wajji",
//                     age: "30",
//                     email: "wajji@mail.com"
//                 }
//             ]
//         },
//         {
//             name: "KIU Gilgit",
//             city: "Raw",
//             website: "kiu.com",
//             student: [
//                 {
//                     name: "Ali",
//                     age: "25",
//                     email: "ali@mail.com"
//                 },
//                 {
//                     name: "wajji",
//                     age: "29",
//                     email: "wajji@mail.com"
//                 },
//                 {
//                     name: "hasan",
//                     age: "29",
//                     email: "hasan@mail.com"
//                 }

//             ]
//         },
//         {
//             name: "KU Karachi",
//             city: "Karachi",
//             website: "ku.com",
//             student: [
//                 {
//                     name: "Ali",
//                     age: "32",
//                     email: "ali@mail.com"
//                 },
//                 {
//                     name: "hasan",
//                     age: "29",
//                     email: "hasan@gmail.com"
//                 },
//                 {
//                     name: "wajji",
//                     age: "30",
//                     email: "wajji@gmail.com"
//                 }
//             ]
//         }
//     ]
//     return (
//         <div>
//             <h1>Nested Loops in react</h1>
//             {
//                 collegeData.map((college, index)=>(
//                     <div key={index}>
//                     <College college={college} />
//                     </div>
//                 ))
//             }
//             <User />
//         </div>
//     )
// }

// export default App;




// import User from './User';
// import UseEffectExamples from './UseEffectExamples';
// import {useState} from 'react';

// function App () {
//     const [color, setColor]=useState('white');
//     return (
//         <div>
//             <h1>useEffect() Examples</h1>
//             <select onChange={(event)=>setColor(event.target.value)}>
//                 <option value={"red"}>Red</option>
//                 <option value={"yellow"}>Yellow</option>
//                 <option value={"white"}>White</option>
//             </select>
        
//         <User color={color} />
//         <hr style={{margin: '20px 0'}} />
//         <UseEffectExamples />
//         </div>
//     )
// }

// export default App;




// import User from './User.jsx';

// function App () {
//     const userData=[
//         {
//             name: 'shahid',
//             age: '29',
//             email: 'shahid@test.com',
//             id: '1'
//         },
//         {
//             name: 'peter',
//             age: '30',
//             email: 'peter@text.com',
//             id: '2'
//         }, 
//         {
//             name: 'ali',
//             age: '31',
//             email: 'ali@mail.com',
//             id: '3'
//         },
//         {
//             name: 'yousuf',
//             age: '32',
//             email: 'you@mail.com',
//             id: '4'
//         }]
//         return (
//             <div>
//                 <h1>Resue Component in React</h1>
//             {
//                 userData.map((user)=>(
//                     <div>
//                     <User data={user}/>
//                     </div>
//                 ))
//             }
//             </div>
//         )
//     }


// export default App;







// import User from "./User";
// function App(){
//     return(
//         <div>
//             <h1>check boxes store in State in the form of Array and dsiply by using toString()</h1>
//             {/* <User /> */}
//         </div>
//     )
// }

// export default App;


// import {useState} from "react";

// function App(){
//   const [val,setVal]=useState();
//   const [pass,setPass]=useState();
//   const [email,setEmail]=useState();
//   return(
//     <div>
//       <h1>get input field val in State</h1>
//       <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter your name"/>
//       <br /><br />
//       <input type="password" value={pass} onChange={(event)=>setPass(event.target.value)} placeholder="Enter your password"/>
//       <br /><br />
//       <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your email"/>


//       <h1>{val}</h1>
//       <h1>{pass}</h1>
//       <h1>{email}</h1>
//       <button onClick={()=>{setVal(""); setPass(""); setEmail("")}}>Clear Value</button>
//     </div>
//   )
// }

// export default App


// import User from "./User.jsx"

// function App () {
//   return(
//     <div>
//     <User color="blue">
//     <h1>Shahid Ali</h1>
//     </User>
//     <User color="yellow">
//     <h1>Sam</h1>
//     </User>
//     <User>
//     <h1>Anil</h1>
//     </User>
//     </div>
//   )
// }

// export default App

// import User from "./User.jsx"

// function App(){
//   let collegeNames = ["GIM", "MIT", "NIT" ]
//   return(
//     <div>
//       <User names={collegeNames[0]}/>
//     </div>
//   )
// }

// export default App;

// import User from "./User.jsx";
// function App(){
//   let profile={
//     name: "Shahid Yousuf",
//     age: 33,
//     email: "shahid@mail.com"
//   } 
//   return(
//     <div>
//     <h1>Props in React</h1>
//    <User data={profile} />
//    </div>
//   )
// }

// export default App;



// import {useState} from "react";

// function App() {
//   const [count,setCount]=useState(0);
//   return(
//     <div>
//       <h1>Multiple conditions in React</h1>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Counter</button>
//       {
//         count==0?<h1>Condition 0</h1>:
//         count==1?<h1>Condition 1</h1>:
//         count==2?<h1>Condition 2</h1>:
//         count==3?<h1>Condition 3</h1>:
//         count==4?<h1>Condition 4</h1>:null
//       }
//     </div>
//   )
// }

// export default App;

// import {useState} from "react";
// import User from './User.jsx';

// function App(){
//   const [disply,setDisply]=useState(true);
//   return(
//     <div>
//       <h1>Toggle or Hide & Show</h1>
//       {disply?<User />:null}
//       <button onClick={()=>setDisply(!disply)}>Toggle or Hide & Show</button>
            
//     </div>
//   )
// }

// export default App;



// import {useState} from "react";

// function App(){
//   const [fruit, setFruit] = useState("Apple");
//   const handleFruit=()=>{
//     setFruit("Banana")
//   } 
//   return(
//     <div>
//     <h1>State in React</h1>
//     <h1>{fruit}</h1>
//     <button onClick={handleFruit}>Change fruit name.</button>
//     </div>
//   )
// }

// export default App;

// function App(){
//   let fruit="Apple"
//   const handleFruit=()=>{
//     fruit="Banana";
//     console.log(fruit);
//   }
//   return (
//     <div>
//     <h1>State in React</h1>
//     <h1>{fruit}</h1>
//     <button onClick={handleFruit}>Change Fruit Name</button>
//     </div>
//   )
// }

// export default App;




// function App(){
//   function callFun(){
//     alert("call function")
//   }
//  const fruit=(name)=>{
//   alert(name);
//  }
//   return(
//     <div>
//     <h1>Even and call function</h1>
//     <button onClick={()=>fruit("Apple")}>Click Me</button>
//     </div>
//   )
// }

// export default App;




// function App (){

//   return (
//     <>
//         <h1>Hello World{sum()}</h1>
//       <Fruit />
//       <Color />
//     </>
//   )
// }
// function Fruit(){
//   return (
//     <h1>Apple</h1>
//   )
// }

// function Color(){
//   return (
//     <h1>Red</h1>
//   )
// }
// function sum(){
//   return 10+10
// }


// export default App;