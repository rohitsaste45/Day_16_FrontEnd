import { BrowserRouter, Route,Link, Routes, useNavigate } from "react-router-dom";
import MyTodo from "./Pages/MyTodo";
import MyRegistration from "./Pages/MyRegistration";
import MyNavigationLinks from "./Pages/MyNavigationLinks";
import MyTodoList from "./Pages/MyTodoList";
import MyUserList from "./Pages/MyUserList";


function App() {
  return (
    <>
      <BrowserRouter>
      <MyNavigationLinks />
        
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/todo" element={<MyTodo />} />
          <Route path="/todo-list" element ={<MyTodoList/>}/>
          <Route path="/registration" element={<MyRegistration />} />
          <Route path="/user-list" element={<MyUserList/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;

// <h1>My Todo</h1>
//       <MyTodo />
//       <MyRegistration/>