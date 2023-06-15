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
  let[ sucessBox,setSucessBox] = useState(false)

  let [todo, setTodo] = useState({ task: " ", description: "" });

  let handleChangeTaskAction = (e) => {
    let newTodo = { ...todo, task: e.target.value }
    setTodo(newTodo);
  }

  let handleChangeDescriptionAction = (e) => {
    let newTodo = { ...todo, description: e.target.value };
    setTodo(newTodo);
  }

  let addTodoAction = async() => {
   let uri =`http://localhost:4000/addtodo?task=${todo.task}&description=${todo.description}`;
   await fetch(uri);

   let newTodo = {task : " ", description : " "};
   setTodo(newTodo);
   setSucessBox(true);
  }
  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Enter task"
        value={todo.task}
        onChange={handleChangeTaskAction} />

      <textarea
        className="form-control"
        cols="30"
        rows="3"
        placeholder="Enter Description"
        onChange={handleChangeDescriptionAction}></textarea>

      <input type="button" value="Add Todo" onClick={addTodoAction} />

      {sucessBox && (
        <div className=" alert alert-success">Operation Success</div>
      )}

    </>
  );
}


export default App;