import React, { useState } from "react";

function Changehook(){
    const [count,setcount] = useState(0)

    const handleChange1=()=>{
        setcount(count + 1)
     }

     const handleChange2 = () => {
        if (count > 0) {
            setcount(count - 1);
        }
    };

     return(
        <div>
            <p><strong>Using useState</strong></p>
            <p>count value is : {count}</p>
            <button onClick={handleChange1}>Increment</button>
            <button onClick={handleChange2}>Decrement</button>
        </div>
     )
}

export default Changehook;