import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import PrincipalButton from "./assets/button";
import Login from "./components/Login";
import { Routes } from "react-router-dom";

function App() {
  /*y
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
*/
  return (
    /*
    <div>
      
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
        />
        <PrincipalButton></PrincipalButton>
      </form>
    </div>*/

    <Login></Login>
  );
}

export default App;
