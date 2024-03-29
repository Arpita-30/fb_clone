import React, { useState } from "react";
import "./Login.css";
import WarningIcon from "@mui/icons-material/Warning";
import CloseIcon from "@mui/icons-material/Close";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const users = [
    {
      firstName: "Arpita",
      lastName: "Roy",
      email: "abc@gmail.com",
      password: "1234",
    },
    {
      firstName: "Ayush",
      lastName: "Roy",
      email: "abc@gmail.com",
      password: "1234",
    },
  ];

  const handleFormSubmit = () => {
    if (password === "" || email === "")
      return setError("Please fill all fields");
    const temp = users.filter((user, i) => {
      if (email.includes("@gmail.com")) {
        if (email === user.email) {
          if (password === user.password) {
            return user;
          } else {
            setError("Wrong Password");
            return {};
          }
        } else {
          setError("Email not registered");
          return {};
        }
      } else {
        setError("Enter correct email format");
        return {};
      }
    });
    console.log(temp);
  };

  return (
    <div className="container">
      <div className="card">
        {error !== null ? (
          <div className="error">
            <WarningIcon />
            {error}
            <CloseIcon
              style={{ fontSize: "0.5 rem" }}
              onClick={() => setError(null)}
            />
          </div>
        ) : null}
        <div className="email">
          <label className="login__label">Email ID :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label className="login__label">Password : </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleFormSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
