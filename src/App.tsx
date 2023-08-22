import { useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { RtlProvider } from "./components/rtl-provider";
import Login from "./pages/Login";
const theme = extendTheme({
  colors: {
    primary: {
      100: '#C19008",',
    },
  },
});
function App() {
  return (
    <ChakraProvider>
      <RtlProvider>
        <Layout>
          <Login />
        </Layout>
      </RtlProvider>
    </ChakraProvider>
  );
}

export default App;
