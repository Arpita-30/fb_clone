import React, { useState } from "react";
//import { createContext } from 'react';

import Posts from "./Posts.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import { SignpostOutlined } from "@mui/icons-material";
// import Login from "./Login.js";
// import { render } from "react-dom";
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {
  // const myContext = React.createContext();
  // const [user, setUser] = useState([
  //   {
  //     userName: '',
  //     comments: [],
  //     likedPosts: [],
  //   },
  // ]);
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Login />,
  //     children: [
  //       {
  //         path: '/Posts',
  //         element: <Posts />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    // <myContext.provider value={{ user, setUser }}>
    <div>
      <Signup />
    </div>
    // </myContext.provider>
  );
}
