// @flow 
import { Center, Flex } from '@chakra-ui/react';
import * as React from 'react';
import {Like} from '../../../public/assets/icons/Like';
import {Comment} from '../../../public/assets/icons/Comment';
import {Bookmark} from '../../../public/assets/icons/Bookmark';
import { Tag } from '../Tag/Tag';
type Props = {
    
};
export const HomeContainer = (props: Props) => {
    return (
        <Flex className="w-[100%] max-w-6xl flex-wrap gap-[24px]   ">
         
                 
                 <Flex className="w-[360px] flex-col h-[522px] bg-[#ffffff]  rounded-t-[24px] rounded-b-[16px]">
                    <Flex className='w-[360px] h-[358px] rounded-t-[24px] bg-orange-700'>

                    </Flex>
                    <Flex className='gap-[12px] p-[16px]'>

                        <Flex className='gap-[8px] items-center text-[#C38F00]'>
                           <i><Like/></i>
                           <span className='text-[14px] font-medium'>۱۳۸</span>

                        </Flex>
                        <Flex className='gap-[8px] items-center text-[#C38F00]'>
                           <i><Bookmark/></i>
                           <span className='text-[14px] font-medium'>۱۳۸</span>

                        </Flex>
                        <Flex className='gap-[8px] items-center text-[#C38F00]'>
                           <i><Comment/></i>
                           <span className='text-[14px] font-medium'>۱۳۸</span>

                        </Flex>

                    </Flex>

                    <Flex className='p-[16px] -mt-3'>
                        <span className='text-[#191919] text-[16px] font-medium'>
                            امیر محمد مهری
                        </span>
                    </Flex>
                     <Flex className='p-[16px] -mt-3'>
                        <Tag title='گیاه' color = "#008753"  />
                     </Flex>
                    

                    </Flex>
                    <Flex className="w-[360px] h-[522px] bg-black rounded-t-[24px]">
                    

                    </Flex>
                    <Flex className="w-[360px] h-[522px] bg-black rounded-t-[24px]">
                    

                    </Flex>
                    <Flex className="w-[360px] h-[522px] bg-black rounded-t-[24px]">
                    

                    </Flex>
            
        </Flex>
    );
};