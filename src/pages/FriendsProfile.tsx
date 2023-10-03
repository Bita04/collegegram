// @flow 
import * as React from 'react';
import { UserProfile } from './UserProfile';
import {
    Avatar,
    Container,
    Flex,
    
  } from "@chakra-ui/react";
import { AvatarTik } from '../icons/AvatarTik';
import ButtonText from '../components/ui/button/Button';
import { Pin } from '../icons/Pin';
import { Favorite } from '../icons/Favorite';
import { Comment } from '../icons/Comment';
import { Block } from '../icons/Block';
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
                <Flex className='w-[400px] gap-8 flex-col items-center h-[487px] bg-[#F1EBE3] border-[#CDCDCD]'>
                    <Flex className='flex-col gap-6 -mt-12 justify-center items-center'>

                    
                    <Flex>
                    <Avatar width={106} height={107}/>
                    <AvatarTik className=' absolute mt-[75px]'/>
                    

                    </Flex>

                    <Flex className='flex-col gap-2 items-center'>
                        <Flex>
                        <span className='text-[#C38F00] text-[16px] font-bold'>متین دهقان</span>

                        </Flex>
                        <Flex>
                        <span className='text-[#17494D] text-[11px]'> 170 هزار دنبال کننده </span> 
                        <span className=' px-2 text-[11px] text-[#17494D]'> | </span>
                        <span className='text-[#17494D] text-[11px]'>9 دنبال شونده</span>

                        </Flex>
                        </Flex>
                    </Flex>

                    <ButtonText
          className="w-[91px] px-[10px]   text-[#FFF] text-[14px] font-medium bg-[#C38F00] rounded-[100px] h-[33px]"
          type="button"
        >
            دنبال کردن
        </ButtonText>
        <Flex className='flex-col items-center justify-center gap-3'>
        <Pin/>
        <span className='text-[#17494D] text-[14px]'>
            86 عکس
        </span>


        </Flex>

        <Flex className='w-[212px] border-[#CDCDCD] justify-center gap-5 items-center h-[72px] bg-[#F3F0EE]'>
            <Favorite/>
            <Comment/>
            <Block/>

        </Flex>

                   

                    

                </Flex>

                

        </UserProfile>
    );
};