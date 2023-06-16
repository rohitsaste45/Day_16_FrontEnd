import { BrowserRouter, Route,Link, Routes } from "react-router-dom";
import MyTodo from "./Pages/MyTodo";
import MyRegistration from "./Pages/MyRegistration";


function App() {
  return (
    <>
      <BrowserRouter>
        <Link to={"/home"}>Home</Link>
        <Link to={"/todo"}>Todo</Link>
        <Link to={"/registration"}>Registration</Link>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/todo" element={<MyTodo />} />
          <Route path="/registration" element={<MyRegistration />} />
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