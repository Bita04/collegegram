
import { Flex } from "@chakra-ui/react";
import * as React from "react";
import { TreeIcon } from "../../icons/TreeIcon";

type Props = {

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
      <TreeIcon width={250} height={250} />
    </Flex>
  );
};

