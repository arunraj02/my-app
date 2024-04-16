import React, { Component } from 'react';

class EmployeeComponent extends Component {
  render() {
    const employees = [
      {
        name: "Alex",
        skills: [
          { name: "ReactJS", type: "Frontend" },
          { name: "nodeJS", type: "Backend" }
        ]
      },
      {
        name: "Anna",
        skills: [
          { name: "Angular", type: "Frontend" },
          { name: "Python", type: "Backend" }
        ]
      }
    ];

    return (
      <div>
        <h1>Employee Details</h1>
        {employees.map((employee, index) => (
          <div key={index}>
            <h2>Name: {employee.name}</h2>
            <h3>Skills:</h3>
            <ul>
              {employee.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  {skill.name} - {skill.type}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default EmployeeComponent;