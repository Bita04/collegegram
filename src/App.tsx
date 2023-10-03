// import { useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { RtlProvider } from "./components/rtl-provider";
// import Login from "./pages/Login";
// import Error from "./pages/Error";
import ForgetPassword from "./pages/ForgetPassword";
// import { EditProfile } from "./components/EditProfile/EditProfile";
// const theme = extendTheme();
function App() {
  return (
    <ChakraProvider>
      <RtlProvider>
        <Layout>
          <ForgetPassword />
        </Layout>
      </RtlProvider>
    </ChakraProvider>
  );
}

export default App;
