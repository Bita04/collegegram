import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import * as React from "react";
import { getPosts } from "../../api/appApi";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const PostContainer = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = React.useState("");
  const [hasMore, setHasMore] = React.useState(false);
  const [first, setFirst] = React.useState(true);
  const [orginalData, setOrginalData] = React.useState([]);
  const handleClick = (postID) => {
    navigate(`/post/${postID}`);
  };

  const { status, data, error, isFetching, isLoading, fetchNextPage } =
    useInfiniteQuery(
      "posts",
      ({ pageParam }) => getPosts(3, pageParam, first),
      {
        keepPreviousData: true,
        refetchOnWindowFocus: false,

        onSuccess: (data) => {
          // console.log(data.pages[data.pages.length-1])
          console.log(data.pages);
          // setOrginalData((prev) => [...prev, ...data.pages[data.pages.length-1]?.posts]);
          if (data.pages[data.pages.length - 1].hasMore) {
            // console.log(data.pages[data.pages.length-1].nextOffset)

            // setOffset();
            setHasMore(true);
            setFirst(false);
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
              از اینجا به تمام محتواهایی مثل پست، ذخیره‌ها، پیام‌ها و... دسترسی
              داری کافیه بخش مرتبط رو از منوی سممت چپ انتخاب کنی. :)
            </Text>
            <Text className="mt-[80px] text-[16px] text-[#17494D] font-normal">
              حالا وقت گذاشتن اولین پست هست:)
            </Text>
          </Flex>
        </Flex>
      ) : (
        <InfiniteScroll
          className="flex-row max-w-5xl"
          next={() =>
            fetchNextPage({
              pageParam: data?.pages[data.pages.length - 1].nextOffset,
            })
          }
          hasMore={hasMore}
          loader={<Text>Loading...</Text>}
          dataLength={
            data?.pages.reduce((total, page) => total + page.posts.length, 0) ||
            0
          }
        >
          <Grid templateColumns='repeat(4, 1fr)' gap={6} className="w-[1000px] max-w-4xl">
            {data?.pages?.map((page, index) =>
              page.posts.map((post, index) =>
                post.photos.map((photo, index) => (
                  <GridItem w='100%'>
                    <Flex
                    onClick={() => handleClick(post.id)}
                    key={index}
                    className="cursor-pointer relative rounded-t-[24px] overflow-hidden pb-[100%]"
                  >
                    <Flex className="w-[64px] absolute z-10 bg-black h-[64px]"></Flex>
                    <img
                      className=" h-full w-full absolute"
                      src={photo}
                      alt=""
                    />
                  </Flex>
                  </GridItem>
                ))
              )
            )}
          </Grid>
        </InfiniteScroll>
      )}
    </Flex>
  );
};
