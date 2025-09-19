import {useState} from "react";

function App(){
  const [val,setVal]=useState();
  const [pass,setPass]=useState();
  const [email,setEmail]=useState();
  return(
    <div>
      <h1>get input field val in State</h1>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter your name"/>
      <br></br><br></br>
      <input type="password" value={pass} onChange={(event)=>setPass(event.target.value)} placeholder="Enter your password"/>
      <br></br><br></br>
      <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your email"/>


      <h1>{val}</h1>
      <h1>{pass}</h1>
      <h1>{email}</h1>
      <button onClick={()=>{setVal(""); setPass(""); setEmail("")}}>Clear Value</button>
    </div>
  )
}

export default App


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