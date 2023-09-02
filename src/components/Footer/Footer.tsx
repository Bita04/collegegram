import { Flex } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  children: React.ReactNode;
};
export const Footer = (props: Props) => {
  return (
    <Flex
      marginTop="100px"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#F1EBE3"
      width="100%"
      height="440px"
    >
      {props.children}
    </Flex>
  );
};
