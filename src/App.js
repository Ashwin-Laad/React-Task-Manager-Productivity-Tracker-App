
import Header from "./MyComponents/Header"

import Footer from "./MyComponents/footer"

import Items from "./MyComponents/Items"

import MainList from "./MyComponents/MainList"

import React, { useState } from "react";
import Addtodo from "./MyComponents/addtodo";

import Notodo from "./MyComponents/notodo";
//start component with capital letter



const todoList = []
 

function App() {

  const [todos, setTodos] = useState(todoList);

  // const[todos1,addTask]=useState(todoList); //for the task 

  
  // const[todos2,adddesc]=useState(todoList); //for the description

//update the array for new task and desc
  function addTodo(taskName, description) {
    const srNo = todos.length + 1; // simple increment
    const newTodo = { srNo, taskName, description };
    setTodos([...todos, newTodo]); // create new array with new item
  }





  //function to delete the items 

function Delete(srn1) {
    const newTodos = todos.filter(item => item.srNo !== srn1);
    setTodos(newTodos); // update the state
  }


  //here to main list we will pass the array and the delete function 

  //the main list will pass individual array items and on each item apply the delete

  return (
 <>
 <Header title="To-Do" login={true} ></Header>


<Addtodo add={addTodo} ></Addtodo>

{
  //when array changes this main list is called and rendered ONLY

  todos.length?
<MainList todo={todos} del={Delete}></MainList>:<Notodo />
}

{/* <Items></Items> */}
<Footer></Footer>


 </>
  );
}

export default App;
