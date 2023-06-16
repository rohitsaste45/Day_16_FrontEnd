import { useState } from "react";


 function MyRegistration() {

    let [user, setUser] = useState({
        username: " ",
        password: " ",
        email: " ",
        mobile: " ",
    });

    let handlerUsernameAction = (e) =>{
        let newuser = {...user,username:e.target.value}
        setUser(newuser)
    }
    let handlerPasswordAction = (e) =>{
        let newuser = {...user,password:e.target.value}
        setUser(newuser)
    }
    let handlerEmailAction = (e) =>{
        let newuser = {...user,email:e.target.value}
        setUser(newuser)
    }
    let handlerMobileAction = (e) =>{
        let newuser = {...user,mobile:e.target.value}
        setUser(newuser)
    }
    let registrationAction = async ( )=>{
        let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;
        await fetch(url);
        let newuser = {
            username: "",
            password: "",
            email: "",
            mobile: "",
          };
          setUser(newuser);
    };

    return (
        <>
            <input
                className="form-control"
                type="text"
                placeholder="Enter Username..."
                value={user.username}
                onChange={handlerUsernameAction} />

            <input
                className="form-control"
                type="password"
                placeholder="Enter Password..."
                value={user.password}
                onChange={handlerPasswordAction} />

            <input
                className="form-control"
                type="text"
                placeholder="Enter Email..."
                value={user.email}
                onChange={handlerEmailAction} />

            <input
                className="form-control"
                type="text"
                placeholder="Enter MobileNumbar..."
                value={user.mobile}
                onChange={handlerMobileAction} />

            <input 
                type="button" 
                value="register"
                className="w-100"
                onClick={registrationAction}
                />

        </>
    );
}

export default MyRegistration;