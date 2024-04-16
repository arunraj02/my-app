import React from "react";

class About extends React.Component{
    render(){
        const {employee}=this.props;
        const employeeData=employee.map((data,index)=>{
            return(               
                    <tr>
                        <td>{index+1}</td>
                        <td>{data.name}</td>
                        <td>{data.profession}</td>
                    </tr>
            )
        })
        return(
            <div>
                <h1>Class Component</h1>
                <p>I'm a {this.props.pro}</p>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Profession</th>
                    </thead>
                    <tbody>
                        {employeeData}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default About;