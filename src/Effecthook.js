import React, { useEffect, useState } from "react";

function Effecthook(){

    const [count,setCount]=useState(0);
    const [msg,setMsg]=useState("Welcome to React")

    useEffect(()=>{
        console.log("Component Update");
    },[count,msg])
    
    return(
        <div>
            <p><strong>Use Effect Method</strong></p>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <p>The count value is : {count}</p>
            <p>Updates Message is : {msg}</p>
            <button onClick={()=>setMsg("Welcome to React Hooks")} >UpdateMessage</button>
        </div>
    )
}

export default Effecthook;