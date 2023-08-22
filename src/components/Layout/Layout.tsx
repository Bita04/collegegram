import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-end"
      width="100%"
      minHeight="100vh"
      backgroundColor="#F3F0EE"
    >
      {children}
      <Footer />
    </Flex>
  );
};
