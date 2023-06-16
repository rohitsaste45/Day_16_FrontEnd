import { useRef, useState } from "react";
import MyTodo from "./Pages/MyTodo";
import MyRegistration from "./Pages/MyRegistration";

function App() {
  return (
    <>
      <h1>My Todo</h1>
      <MyTodo />
      <MyRegistration/>
    </>
  );
}
export default App;