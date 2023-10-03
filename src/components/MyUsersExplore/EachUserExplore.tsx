import { Flex } from '@chakra-ui/react';
import React from 'react';

const EachUserExplore = () => {
    return (
      <div>
        <Flex className="w-[100%] max-w-6xl flex-wrap bg-pink gap-[24px]">
          <Flex className="w-[232px] flex-row h-[232px] bg-[#000]  rounded-[24px]"></Flex>
          <Flex className="w-[232px] flex-row h-[232px] bg-[#000] rounded-[24px]"></Flex>
          <Flex className="w-[232px] flex-row h-[232px] bg-[#000]  rounded-[24px]"></Flex>
          <Flex className="w-[232px] flex-row h-[232px] bg-[#000]  rounded-[24px]"></Flex>
        </Flex>
      </div>
    );
};

export default EachUserExplore;