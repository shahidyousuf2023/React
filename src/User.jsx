
function User ({data}){
    return(
        <div>
            <h3>Name: {data.name}</h3>
            <h3>Age: {data.age}</h3>
            <h3>Email: {data.email}</h3>
            <h3>ID: {data.id}</h3>
        </div>
    )
}

export default User;




// function User () {
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
//         }
//     ]
//     return (
//         <div>
//             <h1>Loops in JSX with Map function</h1>
//             <table border='5'>
//                 <thead>
//                     <tr>
//                         <td>Id</td>
//                         <td>Name</td>
//                         <td>Email</td>
//                         <td>Age</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         userData.map((user)=>(
//                     <tr key={user.id}>
//                         <td>{user.id}</td>
//                         <td>{user.name}</td>
//                         <td>{user.email}</td>
//                         <td>{user.age}</td>
//                     </tr>   
//                         ))
//                     }
//                 </tbody>
//             </table>

//             <h1>Dammy Data</h1>
//             <table border='5'>
//                 <thead>
//                     <tr>
//                         <td>Id</td>
//                         <td>Name</td>
//                         <td>Mail</td>
//                         <td>Age</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>01</td>
//                         <td>Shahid</td>
//                         <td>shahid@test.com</td>
//                         <td>29</td>
//                     </tr>
//                     <tr>
//                         <td>02</td>
//                         <td>Peter</td>
//                         <td>peter@test.com</td>
//                         <td>30</td>
//                     </tr>
//                     <tr>
//                         <td>03</td>
//                         <td>Ali</td>
//                         <td>ali@test.com</td>
//                         <td>31</td>
//                     </tr>
//                     <tr>
//                         <td>04</td>
//                         <td>Yousuf</td>
//                         <td>yousuf@test.com</td>
//                         <td>32</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default User;

// import { useState } from 'react';

// function App() {
//     const [gender, setGender] = useState('female');
//     const [city, setCity] = useState('gilgit');

//     return (
//         <div>
//             <h1>radio and drop down selection and store value in state</h1>
//             <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" id="male"
//                 value={"male"} checked={gender == "male"} />
//             <label htmlFor="male">Male</label>
//             <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" id="female"
//                 value={"female"} checked={gender == "female"} />
//             <label htmlFor="female">Female</label>
//             <h1>{gender}</h1>
//             <br /><br />

//             <select defaultValue={"gilgit"} onChange={(event)=>setCity(event.target.value)}>
//                 <option value="gilgit">Gilgit</option>
//                 <option value="nagar">Nagar</option>
//                 <option value="hunza">Hunza</option>
//             </select>
//             <h1>{city}</h1>

//         </div>
//     )
// }

// export default App;



// import {useState} from 'react';

// function User(){
//     const [skills,setSkills]=useState(['']);
//     const handleSkills=(event)=>{
//         console.log(event.target.value, event.target.checked)
//         if(event.target.checked){
//             setSkills([...skills,event.target.value])
//         }else{
//             setSkills([skills.filter((item)=>item!=event.target.value)])
//         }
//     }
//     return(
//         <div>
//             <h2>Check Boxes</h2>
//             <form>
//                 <input type="checkbox" onChange={handleSkills} id="html" value="html" />
//                 <label htmlFor="html">Html</label>
//                 <br />
//                 <input type="checkbox" onChange={handleSkills} id="css" value="css" />
//                 <label htmlFor="css">CSS</label>
//                 <br />
//                 <input type="checkbox" onChange={handleSkills} id="js" value="JS" />
//                 <label htmlFor="js">JS</label>
//                 <br />
//                 <input type="checkbox" onChange={handleSkills} id="react" value="react" />
//                 <label htmlFor="react">React</label>
//                 <br />
//                 <h3>{skills.toString()}</h3>
//             </form>
//         </div>
//     )
// }

// export default User;



// function User({children, color="red"}){
//     return(
//         <div style={{color:color, border:"5px solid green", width:"300px", margin:"10px"}}>
//         {children}
//         </div>
//     )
// }

// export default User;

// function User({names}){
//     return(
//         <div>
//             <h1>Array pass on props</h1>
//             <h2>{names}</h2>
//         </div>
//     )
// }

// export default User;




// function User({data}){
//     console.log(data)
//     return(
//         <div>
//             <h1>User Component</h1>
//             <h1>Name: {data.name}</h1>
//             <h1>Age: {data.age}</h1>
//             <h1>Email: {data.email}</h1>
//         </div>
//     )
// }

// export default User;




// function User(){
//     return(
//         <div>
//             <h1>Toggle Component</h1>
//         </div>
//     )
// }
// export default User;





// function Bpp(){
//     const userObj={
//         name: "Shahid",
//         email: "shahid@test.com",
//         age:"33"
//     }

//     const userArry = ['sam','peter','ali']

//     function operation(a,b,op){
//         if(op=="+"){
//             return a+b;
//         }if(op=="-"){
//             return a-b;
//         }
//         else{
//             return a*b;
//         }
//     }
//     // const name="Shahid Yousuf";
//     let x=10;
//     let y=20;
//     function fruit(){
//         return "Apple";
//     }
//     function sum(a,b){
//         return a+b;
//     }
//     return(
//         <div>
//         <h1>JSX with curly Braces</h1>
//         <h1>{name?name:"User Not Found"}</h1>
//         <h1>{x+y}</h1>
//         <h1>{fruit()}</h1>
//         {sum(100,10)}
//         <h1>{operation(10,20,"-")}</h1>
//         <h1>{userObj.email}</h1>
//         <h1>{userArry[1]}</h1>
//         </div>
//     )
// }

// export default Bpp;