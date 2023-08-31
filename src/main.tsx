import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "./components/rtl-provider.tsx";
import SignUp from "./pages/SignUp.tsx";
import { NewPost } from "./components/NewPost/NewPost.tsx";
import { theme } from './themes/Theme.ts';


import ForgetPassword from "./pages/ForgetPassword.tsx";
import Error from "./pages/Error.tsx";
import {UserProfile} from "./pages/UserProfile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewPost />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/error",
    element: <Error title="Not Found" subTitle="test" > It's failed </Error>,
  },
  {
    path: "/profile",
    element: <UserProfile > </UserProfile>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RtlProvider>
        <RouterProvider router={router} />
      </RtlProvider>
    </ChakraProvider>
  </React.StrictMode>
);
