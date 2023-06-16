import { BrowserRouter, Route,Link, Routes, useNavigate } from "react-router-dom";
import MyTodo from "./Pages/MyTodo";
import MyRegistration from "./Pages/MyRegistration";
import MyNavigationLinks from "./Pages/MyNavigationLinks";


function App() {
  return (
    <>
      <BrowserRouter>
      <MyNavigationLinks />
        
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/todo" element={<MyTodo />} />
          <Route path="/registration" element={<MyRegistration />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />

        </Routes>
        <MyNavigationLinks />
      </BrowserRouter>
    </>
  );
}

function MyNavigationLinksUsingButton(){
const navigate = useNavigate();

let goToHomeAction = () =>{
  navigate("/home");
};

let goToTodaAction = () => {
  navigate("/todo")
};

let goToRegistrationAction = () =>{
  navigate("/registration")
};

return (
<div>
  <input type="button" value="Home" onClick={goToHomeAction} />
  <input type="button" value="Toda" onClick={goToTodaAction} />

  <input type="button" value="Registration"onClick={goToRegistrationAction} />
</div>

)

}

export default App;

// <h1>My Todo</h1>
//       <MyTodo />
//       <MyRegistration/>