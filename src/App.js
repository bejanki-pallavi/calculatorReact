import React,{useState} from 'react'
import "./App.css"

const App=()=>{
  const [input,setInput]=useState("")
  const [result,setResult]=useState("0")
  const handle=e=>{
    setInput(e.target.value)
  }
  const clean=()=>{
    setInput("")
    setResult("0")
  }


  return(
    <div className="App">
      <h1 className="mb-3">Calculator</h1>
      <input value={input} name="input" type="text" onChange={handle} />
      <br/>
         
      <button onClick={()=>setResult(eval(input))} className=" btn btn-primary ">calculate</button>
      <h3>Result is: {result}</h3>
      <center className="mt-3">
        <button  onClick={()=>setInput(input+"1")} >1</button>
        <button  onClick={()=>setInput(input+"2")}>2</button>
        <button   onClick={()=>setInput(input+"3")}>3</button>
         <button  onClick={()=>setInput(input+"4")}>4</button>
        
         <button  onClick={()=>setInput(input+"5")}>5</button>
         <br/>
       <button  onClick={()=>setInput(input+"6")}>6</button>
        <button  onClick={()=>setInput(input+"7")}>7</button>
         <button  onClick={()=>setInput(input+"8")}>8</button>
        
          <button  onClick={()=>setInput(input+"9")}>9</button>
          <button  onClick={()=>setInput(input+"0")}>0</button>
          <br/>
       <button  onClick={()=>setInput(input+"+")}>+</button>
        <button  onClick={()=>setInput(input+"-")}>-</button>
         <button  onClick={()=>setInput(input+"*")}>*</button>
         <button  onClick={()=>setInput(input+"/")}>/</button>
         <button  onClick={clean}>clr</button>

      </center>
    
     
    </div>
  )

}

export default App;