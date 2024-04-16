import React, { useState } from "react";
import { data } from "./data";

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Filter(){
    console.log(data);

    const[search,setSearch]=useState("")
    console.log(search);
    return(
        <div>
            <h1>Search Filter</h1>
            <form
            
            onChange={(e)=>{
                setSearch(e.target.value)
            }}
            >
            <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search Filter"
            />
            </InputGroup>
            </form>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {

         data.filter((item)=>{
         return search.toLowerCase()===""?item:item.first_name.toLowerCase().includes(search)
         }).map((item)=>(  
            <tr>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
          </tr>
          ))
        }
      </tbody>
    </Table>
        </div>
    )
}

export default Filter;