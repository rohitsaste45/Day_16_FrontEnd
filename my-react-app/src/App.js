import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>My Todo</h1>
      <MyTodo />
    </>
  );
}

function MyTodo() {
  let[todo,setTodo] =useState({task :" ",description:""});

  let handleChangeTaskAction = (e) =>{
    console.log(e.target);

    let newTodo = {...todo, task:e.target.value}
    setTodo(newTodo);
  }
  let handleChangeDescriptionAction = (e) =>{
    let newTodo = {...todo,description:e.target.value};
    setTodo(newTodo);
  }
  let addTodoAction = () => {
    alert(todo.task)
  }
  return (
    <>
      <input
      className="form-control"
      type="text"
      placeholder="Entar task"
      value={todo.task}
      onChange={handleChangeTaskAction} />

      <textarea 
      className="form-contro"
       cols="30" 
       rows="10"
       placeholder="Enter Description"
       onChange={handleChangeDescriptionAction}></textarea>

      <input type="button" value="Add Todo" onClick={addTodoAction} />
      
    </>
  );
}


export default App;