function Bpp(){
    const name="Anil Sidhu";
    let x=10;
    let y=20;
    function fruit(){
        return "Apple";
    }
    function sum(a,b){
        return a+b
    }
    return(
        <div>
        <h1>JSX with curly Braces</h1>
        <h1>{name}</h1>
        <h1>{x+y}</h1>
        <h1>{fruit}</h1>
        {sum(100,10)}
        </div>
    )
}

export default Bpp