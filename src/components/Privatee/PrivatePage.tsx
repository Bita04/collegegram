import React from 'react';
import PrivateLayout from './PrivateLayout';
import { Flex } from '@chakra-ui/react';
import UsersCard from '../UsersCard/UsersCard';

export const PrivatePage = ({data}:{data :[number]}) => {
    return (
      <>
        <Flex className="w-<[50%] h-[50%] gap-[26px]">
          <Flex className="w-[25%] h-[355px] gap-x-[13px]">
            <PrivateLayout />
          </Flex>
          <Flex className="w-[25%] h-[355px] gap-x-[13px]">
            <PrivateLayout />
          </Flex>
          <Flex className="w-[25%] h-[355px] gap-x-[13px]">
            <PrivateLayout />
          </Flex>
        </Flex>
      </>
    );
};

