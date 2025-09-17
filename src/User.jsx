function User({names}){
    return(
        <div>
            <h1>Array pass on props</h1>
            <h2>{names}</h2>
        </div>
    )
}

export default User;




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