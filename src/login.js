import React from "react";
import "./login.css";
import  { loginUrl } from './spotify';


function Login() {
    return (
        <div className="Login"> 
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo"></img>
            <a href={loginUrl}>Login with spotify</a>
        </div>
    )
}

export default Login