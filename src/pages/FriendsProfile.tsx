// @flow 
import * as React from 'react';
import { UserProfile } from './UserProfile';
import {
    Container,
    Flex,
    
  } from "@chakra-ui/react";
type Props = {
    
};
export const FriendsProfile = (props: Props) => {
    return (
        <UserProfile Lnavbar= {false}>
                <Flex className="w-[100%] max-w-5xl flex-wrap gap-[24px]   bg-white">
                <Flex className="w-[310px] h-[354.5px] bg-black rounded-t-[24px]">
          
        </Flex>

        <Flex className="w-[310px] h-[354.5px] bg-black rounded-t-[24px]">
        
        </Flex>
                </Flex>
                <Flex className='w-[400px] h-[487px] bg-[#F1EBE3] border-[#CDCDCD]'>

                </Flex>

                

        </UserProfile>
    );
};