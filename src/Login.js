import React from "react";
import { loginUrl } from "./Spotify";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <h1>i am login</h1>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      {/*Login with Spotify */}
      <a href={loginUrl}> Login With Spotify</a>
    </div>
  );
}

export default Login;
