// @flow 
import { Center, Flex } from '@chakra-ui/react';
import * as React from 'react';
import {Like} from '../../../public/assets/icons/Like';
import {Comment} from '../../../public/assets/icons/Comment';
import {Bookmark} from '../../../public/assets/icons/Bookmark';
import { Tag } from '../Tag/Tag';
type Props = {
    postData : []
    
};
type HomePost = {
    familyName : {
        firstName: string,
        lastName: string
    },
    id: number,
    photos: string[],
    tags:  {
        title: string,
        color: string
    } []
}
export const HomeContainer = ({postData}: {
    postData: HomePost[]
}) => {
    return (
        <Flex className="w-[100%] max-w-5xl flex-wrap gap-[24px]   ">
         
                 {postData.map(post => <Flex className="w-[360px] flex-col h-[522px] bg-[#ffffff]  rounded-t-[24px] rounded-b-[16px]">
                    <Flex className='w-[360px] h-[358px] rounded-t-[24px] bg-orange-700'>
                        <img className=' rounded-[24px]' src={post.photos[0]} alt="" />
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
                            {post.familyName.firstName}
                        </span>
                        <span className='text-[#191919] text-[16px] font-medium'>
                            {post.familyName.lastName}
                        </span>
                    </Flex>
                     <Flex className='p-[16px] -mt-3'>
                        {post.tags.map(tag => <Tag title={tag.title} color = {tag.color} />
)}
                     </Flex>
                    

                    </Flex>)}
                 












                    <Flex className="w-[320px] h-[522px] bg-black rounded-t-[24px]">
                    

                    </Flex>
                    <Flex className="w-[320px] h-[522px] bg-black rounded-t-[24px]">
                    

                    </Flex>
                    <Flex className="w-[320px] h-[522px] bg-black rounded-t-[24px]">
                    

                    </Flex>
            
        </Flex>
    );
};