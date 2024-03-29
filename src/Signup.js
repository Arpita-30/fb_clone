import React, { useEffect, useState } from "react";
import "./Signup.css";
import WarningIcon from "@mui/icons-material/Warning";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Alert from "@mui/material/Alert";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  var lowerCase = new RegExp("^(?=.*[a-z])");
  var upperCase = new RegExp("(?=.*[A-Z])");
  var numeric = new RegExp("(?=.*[-+_!@#$%^&*.,?]).+$");
  var special = new RegExp("(?=.*\\d)");

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

  //   useEffect(() => {
  //     var lowerCase = new RegExp("^(?=.*[a-z])");
  //     var upperCase = new RegExp("(?=.*[A-Z])");
  //     var numeric = new RegExp("(?=.*[-+_!@#$%^&*.,?]).+$");
  //     var special = new RegExp("(?=.*\\d)");

  //     setTimeout(() => {
  //       if (lowerCase.test(password)) {
  //         setPassCriteria({ ...passCriteria, lowerCase: true });
  //       } else {
  //         setPassCriteria({ ...passCriteria, lowerCase: false });
  //       }
  //       if (upperCase.test(password)) {
  //         setPassCriteria({ ...passCriteria, upperCase: true });
  //       } else {
  //         setPassCriteria({ ...passCriteria, upperCase: false });
  //       }
  //       if (numeric.test(password)) {
  //         setPassCriteria({ ...passCriteria, numeric: true });
  //       } else {
  //         setPassCriteria({ ...passCriteria, numeric: false });
  //       }
  //       if (special.test(password)) {
  //         setPassCriteria({ ...passCriteria, special: true });
  //       } else {
  //         setPassCriteria({ ...passCriteria, special: false });
  //       }
  //     }, 1000);

  //     console.log(passCriteria);
  //   }, [password]);

  const handleFormSubmit = () => {
    if (password === "" || email === "" || name === "") {
      return setError("Please fill all fields");
    } else {
      if (email.includes("@gmail.com")) {
        if (
          lowerCase.test(password) &&
          upperCase.test(password) &&
          special.test(password) &&
          numeric.test(password)
        ) {
          return alert("success");
        } else {
          return setError("Please read the password criteria");
        }
      } else {
        setError("Enter correct email format");
      }
    }

    // const temp = users.filter((user, i) => {
    //   if (email.includes("@gmail.com")) {
    //     if (email === user.email) {
    //       if (password === user.password) {
    //         return user;
    //       } else {
    //         setError("Wrong Password");
    //         return {};
    //       }
    //     } else {
    //       setError("Email not registered");
    //       return {};
    //     }
    //   } else {
    //     setError("Enter correct email format");
    //     return {};
    //   }
    // });
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Sign up</h3>
        {error !== null ? (
          <Alert severity="error">
            {error}
            <CloseIcon
              style={{ fontSize: "1rem" }}
              onClick={() => setError(null)}
            />
          </Alert>
        ) : null}
        <div className="name">
          <label className="login__label">Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className="pass_criteria">
          Password criteria:
          <p>
            {lowerCase.test(password) ? (
              <>
                <CheckCircleIcon style={{ fontSize: "1rem", color: "green" }} />
              </>
            ) : (
              <>
                <CheckCircleIcon style={{ fontSize: "1rem" }} />
              </>
            )}
            Should contain a upper case letter
          </p>
          <p>
            {upperCase.test(password) ? (
              <>
                <CheckCircleIcon style={{ fontSize: "1rem", color: "green" }} />
              </>
            ) : (
              <>
                <CheckCircleIcon style={{ fontSize: "1rem" }} />
              </>
            )}
            Should contain a upper case letter
          </p>
          <p>
            {special.test(password) ? (
              <>
                <CheckCircleIcon style={{ fontSize: "1rem", color: "green" }} />
              </>
            ) : (
              <>
                <CheckCircleIcon style={{ fontSize: "1rem" }} />
              </>
            )}
            Should contain a special value
          </p>
          <p>
            {numeric.test(password) ? (
              <>
                <CheckCircleIcon style={{ fontSize: "1rem", color: "green" }} />
              </>
            ) : (
              <>
                <CheckCircleIcon style={{ fontSize: "1rem" }} />
              </>
            )}
            Should contain a numeric character
          </p>
        </div>

        <button onClick={handleFormSubmit}>Sign up</button>
      </div>
    </div>
  );
};

export default Signup;
