// @flow 
import { Flex } from '@chakra-ui/react';
import * as React from 'react';
type Props = {
    title: string;
    color: string;
    
};
export const Tag = (props: Props) => {
    return (
        <Flex backgroundColor={props.color} className='p-[6px] rounded-[4px] text-[#ffffff]'>
            <span className='text-[14px] font-normal leading-[16px]'>
                {props.title}

            </span>
            
        </Flex>
    );
};