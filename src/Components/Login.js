import React, { useState } from "react";
import axios from "axios";

function LoginUser() {
  // const [user, setUser] = useState('');
  // const [role, setRole] = useState('');

  const ans = axios
    .get(`http://localhost:8080/login/getUser/kalerutuja862@gmail.com`)
    .then((data) => {
      console.log(data.data);
      localStorage.setItem("user", data.data.name);
      localStorage.setItem("role", data.data.role);
      const username = data.data.name;
      const role = data.data.role;
      console.log("name :" + username + " role :" + role);
    })
    .catch((error) => console.log(error));
  console.log(ans);
  // localStorage.setItem("user",ans)
}

const Login = () => {
  return (
    <div>
      <button onClick={LoginUser}>login</button>
    </div>
  );
};

export default Login;
