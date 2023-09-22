// @flow 
import { Flex } from '@chakra-ui/react';
import * as React from 'react';
import pin from '../../../public/assets/images/pin.svg';
import bookmark from '../../../public/assets/images/bookmark.svg';
import comment from '../../../public/assets/images/comment.svg';
import bing from '../../../public/assets/images/bing.svg';
import menu from '../../../public/assets/images/menu.svg';
import { ClassNames } from '@emotion/react';
type Props = {
    className?: string;
};
export const LNavbar = (props: Props) => {
    return (
        <Flex className={`w-[104px] ${props.className} h-[384px] gap-[48px] flex flex-col bg-[#F1EBE3] py-[32px] px-[40px]`}>
            <i>
                <img src={pin} alt='' />
                
            </i>
            <i>
                <img src={bookmark} alt="" />
            </i>
            <i>
                <img src={comment} alt="" />
            </i>
            <i>
                <img src={bing} alt="" />
            </i>
            <i>
                <img src={menu} alt="" />
            </i>
            
            
        </Flex>
    );
};