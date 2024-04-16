import React from "react";

const Table=(props)=>{
    const {user} = props;
    
    const store =user.map((e,index)=>{
        return(
            <tr>
                <td>{index+1}</td>
                <td>{e.userName}</td>
                <td>{e.age}</td>
            </tr>
        )
    });
    return (
    <div>
        <h2>Welcome Table</h2>
        <table>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </thead>

          <tbody>
            {store}
          </tbody>    
        </table>
    </div> 
    )       
}

export default Table;