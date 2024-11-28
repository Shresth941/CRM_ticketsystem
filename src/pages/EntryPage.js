import React, { useState } from "react";
import "./EntryPage.css";
import { Container } from "react-bootstrap";
import Login from "../component/login/login";
import Passwordreset from "../component/passwordreset/password";

const EntryPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("Login");

  const handleonchange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    if(!email||!password){
        alert("Please fill in all fields");
    }
    console.log(email,password)
  }
  const handleOnResetSubmit=(e)=>{
    e.preventDefault();
    if(!email){
        alert("Please fill the email");
    }
    console.log(email)
  }
  
  const formswitcher=(formtype)=>{
    setShow(formtype);
  }

  return (
    <div className="entryPage bg-info">
      <Container
        className="container p-5 bg-light text-center rounded"
        style={{ width: "auto" }}
      >
        {show==='Login'&&  <Login handleonchange={handleonchange } formswitcher={formswitcher} email={email} pass={password} handleOnSubmit={handleOnSubmit} />
      }
      {show==='reset'&& <Passwordreset handleonchange={handleonchange} email={email}  handleOnResetSubmit={handleOnResetSubmit} formswitcher={formswitcher} />
}
       </Container>
    </div>
  );
};

export default EntryPage;
