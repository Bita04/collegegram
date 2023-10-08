// @flow 
import { Avatar, Flex ,Text } from '@chakra-ui/react';
import * as React from 'react';
import more from '../../../public/assets/images/more.svg'
import leftArrow from '../../../public/assets/images/leftArrow.svg'
type Props = {
    firstName:string;
    lastName:string;
    followers:number;
};
export const ExploreContainer = (props: Props) => {
    return (
      <Flex direction={'column'}>
        <Flex
          className="w-[100%] flex-wrap  gap-[24px]"
          direction={"row"}
        >
          <Flex className="w-[232px] flex-col h-[232px] bg-[#000]  rounded-[24px]"></Flex>
          <Flex className="w-[232px] flex-col h-[232px] bg-[#000] rounded-[24px]"></Flex>
          <Flex className="w-[232px] flex-col h-[232px] bg-[#000]  rounded-[24px]"></Flex>
          <Flex className="w-[232px] flex-col h-[232px] bg-[#000]  rounded-[24px]"></Flex>
        
            <img src={leftArrow} />
          
        </Flex>

        <Flex direction={"row"} marginTop={5} >
          <Avatar size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Flex direction={"column" } marginX={5} >
            <Text>
              {props.firstName} {props.lastName}
            </Text>
            <Text> {props.followers}دنبال‌کننده</Text>
          </Flex>

          <img src={more} height={24} width={24}/>
        </Flex>
      </Flex>
    );
};