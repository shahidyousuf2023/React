function App(){
  function callFun(){
    alert("call function")
  }
 const fruit=(name)=>{
  alert(name);
 }
  return(
    <div>
    <h1>Even and call function</h1>
    <button onClick={()=>fruit("Apple")}>Click Me</button>
    </div>
  )
}

export default App;




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