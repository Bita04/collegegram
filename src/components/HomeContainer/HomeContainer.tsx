// @flow 
import { Center, Flex } from '@chakra-ui/react';
import * as React from 'react';
import {Like} from '../../../public/assets/icons/Like';
import {Comment} from '../../../public/assets/icons/Comment';
import {Bookmark} from '../../../public/assets/icons/Bookmark';
import { Tag } from '../Tag/Tag';
import { getHomePosts } from '../../api/appApi';
import InfiniteScroll from "react-infinite-scroll-component";

import { useInfiniteQuery } from 'react-query';
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
export const HomeContainer = () => {

    const [hasMore, setHasMore] = React.useState(false);
  const [first, setFirst] = React.useState(true);

    const {
        status,
        data,
        error,
        isFetching,
        isLoading,
        fetchNextPage,
      } = useInfiniteQuery(
        "homePosts",
        ({ pageParam  }) => getHomePosts(3, pageParam, first),
        {
          keepPreviousData: true,
          refetchOnWindowFocus: false,
          onSuccess: (data) => {
            // console.log(data.pages[data.pages.length-1])
            console.log(data.pages)
            // setOrginalData((prev) => [...prev, ...data.pages[data.pages.length-1]?.posts]);
            if (data.pages[data.pages.length-1].hasMore) {
              // console.log(data.pages[data.pages.length-1].nextOffset)
              
              // setOffset();
              setHasMore(true);
              setFirst(false)
              
            } else {
              setHasMore(false);
            }
          },
          // enabled: hasMore,
        }
      );

    console.log(data?.pages)
    return (
        data?.pages?.length === 0 ? <p>پستی وجود ندارد</p> :
        <InfiniteScroll
className="flex-row max-w-5xl"
    next={() => fetchNextPage({ pageParam: data?.pages[data.pages.length-1].nextOffset })}
    hasMore={hasMore}
    loader={<p>Loading...</p>}
    dataLength={
        data?.pages.reduce((total, page) => total + page?.posts?.length, 0) ||
        0
    }
>

<Flex className="w-[100%] max-w-5xl flex-wrap gap-[24px]">


{/* {postData.map(post => <Flex className="w-[360px] flex-col h-[522px] bg-[#ffffff]  rounded-t-[24px] rounded-b-[16px]">
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
                    

                    </Flex>)} */}



{

          
data?.pages?.map((page, index) => (
  page.posts.map((post, index) => ( post.photos.length === 1 ?
    
    <Flex className="w-[360px] flex-col h-[522px] bg-[#ffffff]  rounded-t-[24px] rounded-b-[16px]">
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
    

    </Flex> : 
    
    <Flex className="w-[360px] flex-col h-[522px] bg-[#ffffff]  rounded-t-[24px] rounded-b-[16px]">
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
     <Flex className='p-[16px] gap-2 -mt-3'>
        {post.tags.map(tag => <Tag title={tag.title} color = {tag.color} />
)}
     </Flex>
    

    </Flex>

    
    
  ))
 
))


}

  
         

         {/* {postData.map(post => <Flex className="w-[360px] flex-col h-[522px] bg-[#ffffff]  rounded-t-[24px] rounded-b-[16px]">
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
            

            </Flex>)} */}
         












            {/* <Flex className="w-[320px] h-[522px] bg-black rounded-t-[24px]">
            

            </Flex> */}
            {/* <Flex className="w-[320px] h-[522px] bg-black rounded-t-[24px]">
            

            </Flex> */}
            {/* <Flex className="w-[320px] h-[522px] bg-black rounded-t-[24px]">
            

            </Flex> */}
    
</Flex>


</InfiniteScroll>
        
    );
};