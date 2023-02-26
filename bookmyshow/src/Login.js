import React, { useState, useEffect} from "react";
import { TextField, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import bookmyshow from "./Bookmyshow.json";
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
    if (userName ==="" && password === "") {
      alert("please fill the userName ");
      alert("pleace fill the password");
    } else if (userName === "") {
      alert("please fill the userName");
    } else if (password === "") {
      alert("pleace fill the password");
    } else if (userName !== "" && password !== "") {
     console.log("bookmyshow",bookmyshow);
    let isValid = bookmyshow.some((user)=>{
     if(user.username===userName){
        if(user.password===password){
           return true;
        }
     }
    })
     if(isValid===true){
      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
       navi("/Home");
     }
     else{
       alert("Please enter  valid username and password");
     }
    
     
    }
  };
  
    useEffect(() => {
      console.log("line 53");
      let user=localStorage.getItem("username");
      let pass=localStorage.getItem("password");
      console.log(user,pass,bookmyshow);
      let isCheck= bookmyshow.some((use)=>{
         if(use.username===user){
            if(use.password===pass){
                console.log("line 60");
                return true;
            }
         }
        
      });
      console.log(isCheck);
      if(isCheck===true){
        navi("/Home")
      }
      
    }, []);
   
    
   
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
