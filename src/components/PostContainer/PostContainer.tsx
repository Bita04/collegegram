import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { getPosts } from "../../api/appApi";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const PostContainer = () => {
  const navigate = useNavigate()
  const [offset, setOffset] = React.useState("");
  const [hasMore, setHasMore] = React.useState(false);
  const [first, setFirst] = React.useState(true);
  const [orginalData, setOrginalData] = React.useState([]);
  const handleClick = (postID) => {
    navigate(`/post/${postID}`)
    

  }

  const {
    status,
    data,
    error,
    isFetching,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery(
    "posts",
    ({ pageParam  }) => getPosts(3, pageParam, first),
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

  return (
    <Flex className="w-[100%] max-w-4xl flex-wrap gap-[24px]">
      {false || isLoading ? (
        <Flex className=" min-w-[850px] justify-center items-center">
          <Flex className="flex-col w-[359px] justify-center items-center">
            <h1 className="text-[#17494D] p-3 text-[20px] font-bold">
              سلام به کالج گرام من خوش اومدی!
            </h1>
            <Text className="w-[359px] leading-[25px] text-[16px] h-[71px] font-normal text-[#17494D] text-center">
              از اینجا به تمام محتواهایی مثل پست، ذخیره‌ها، پیام‌ها و... دسترسی داری کافیه بخش مرتبط رو از منوی سممت چپ انتخاب کنی. :)
            </Text>
            <Text className="mt-[80px] text-[16px] text-[#17494D] font-normal">
              حالا وقت گذاشتن اولین پست هست:)
            </Text>
          </Flex>
        </Flex>
      ) : (
       



<InfiniteScroll
className="flex-row max-w-5xl"
    next={() => fetchNextPage({ pageParam: data?.pages[data.pages.length-1].nextOffset })}
    hasMore={hasMore}
    loader={<Text>Loading...</Text>}
    dataLength={
        data?.pages.reduce((total, page) => total + page.posts.length, 0) ||
        0
    }
>
<Flex className="w-[100%] max-w-4xl flex-wrap gap-[24px]">

{

          
          data?.pages?.map((page, index) => (
            page.posts.map((post, index) => (
              post.photos.map((photo, index) => (
                <Flex
                onClick={() => handleClick(post.id)}
                key={index}
                className="w-[232px] cursor-pointer h-[232px] bg-black rounded-t-[24px]"
              >
                <img
                  className="w-[232px] rounded-t-[24px] h-[232px]"
                  src={photo}
                  alt=""
                />
              </Flex>

              ))
            ))
           
          ))
          

        }
        </Flex>
</InfiniteScroll>

        
         
       
      )}
    </Flex>
  );
};
