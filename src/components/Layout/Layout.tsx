import * as React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
    
      flexDirection="column"
      justifyContent="flex-end"
      width="100%"
      
      minHeight="100vh"
      
      
      // minHeight="100vh"
       className=' min-w-fit'
      backgroundColor="#F3F0EE"
    >
      {children}
    </Flex>
  );
};
