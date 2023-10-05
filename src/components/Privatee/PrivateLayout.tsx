import { Flex, WrapItem, filter } from '@chakra-ui/react';
import React from 'react';

const PrivateLayout = () => {
    return (
      <WrapItem className="w-full h-full blur-sm">
        <Flex
          backgroundColor={"rgba(196, 196, 196, 0.50) "}
          className="w-full h-full rounded-t-[10%] "
        ></Flex>
      </WrapItem>
    );
};

export default PrivateLayout;