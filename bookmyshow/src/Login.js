import React, { useState, } from "react";
import { TextField, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navi=useNavigate();

  const handleInput = (event) => {
    if (event.target.name === "userName") {
      setUserName(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleLogin = () => {
    if (userName == "" && password == "") {
      alert("please fill the userName ");
      alert("pleace fill the password");
    } else if (userName == "") {
      alert("please fill the userName");
    } else if (password == "") {
      alert("pleace fill the password");
    } else if (userName != "" && password != "") {
      navi("/Home");
    }
  };

  return (
    <div className="login">
      <div className="formEle">
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="outlined-basic"
            label="userName"
            name="userName"
            variant="outlined"
            onChange={handleInput}
          />
        </FormControl>
        <br></br>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            id="outlined-basic"
            label="password"
            name="password"
            variant="outlined"
            onChange={handleInput}
          />
        </FormControl>

        <div className="btn">
          <Button
            type="submit"
            variant="contained"
            onClick={() => handleLogin()}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
