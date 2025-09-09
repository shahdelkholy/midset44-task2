import React from 'react';
import Navbar from "./Home/Navbar";
import Header from './Home/Header';
import Section1 from './Home/Section1';
import Section2 from './Home/Section2';
import Footer from './Home/Footer';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';


function App() {
  
const person = [

{firstName:"shahd",lastName:"elkholy",color:"green",id:1},
{firstName:"heba",lastName:"ali",color:"pink",id:2},
{firstName:"nour",lastName:"zaki",color:"black",id:3},
{firstName:"jana",lastName:"ahmed",color:"blue",id:4},

];





  return (
    <div>
      <Navbar/>
      <Header/>
      <Section1/>
      <Section2/>
      <Footer/>
    <Task1 nameee="shahd" colorrr="red"/>

    <Task2 nameee={person[1].firstName +person[1].lastName} colorrr={person[1].color} />

    <Task3 allData={person} />

    <Task4 allData={person} />
      
    </div>
  );
}

export default App;
