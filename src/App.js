import './App.css';
import Table from './Table';
import List from './List'; 
import About from'./About';
import ClassState from './ClassState';
import Changehook from './Changehook';
import LoginLogout from './Login';
import EmployeeComponent from './EmployeeComponent';
import Effecthook from './Effecthook';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Form from './Form';
import Filter from './Filter';

function App() {
  const userDetail = [
    {
      userName: "person1",
      age: "20"
    },
    {
      userName: "person2",
      age: "21"
    },
    {
      userName: "person3",
      age: "22"
    }
  ];

  const workers = [
    {
      name:"Person 1",
      profession:"UI/UX Designer"
    },
    {
      name:"Person 2",
      profession:"Backend Developer"
    },
    {
      name:"Person 3",
      profession:"Full Stack Developer"
    },
    {
      name:"Person 4",
      profession:"Software Developer"
    }
  ];

  return (
    <div className="App">
     <h2>Welcome to React Class</h2>
      <Table user={userDetail} />
      <List users={userDetail} /> 
      <About pro="Web Developer" employee={workers}/>
      <ClassState/>
      <Changehook/>
      <LoginLogout/>
      <EmployeeComponent/>
      <Effecthook/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/create' element ={<Create/>}/>
          <Route path='/edit' element ={<Edit/>}/>
        </Routes>
      </Router>
      <Form/>
      <Filter/>
    </div>
  );
}

export default App;