// @flow
import * as React from "react";
import { UserProfile } from "./UserProfile";
import { Avatar, Container, Flex } from "@chakra-ui/react";
import { AvatarTik } from "../icons/AvatarTik";
import ButtonText from "../components/ui/button/Button";
import { Pin } from "../icons/Pin";
import { Favorite } from "../icons/Favorite";
import { Comment } from "../icons/Comment";
import { Block } from "../icons/Block";
import { useParams } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "react-query";
import { getByUserName, getByUserNamePosts } from "../api/appApi";
import InfiniteScroll from "react-infinite-scroll-component";
type Props = {};
type User = {
  avatar: string;
  bio:  string;
  firstName: string;
  followerCount: number;
  followingCount: number;
  isPrivate: boolean;
  lastName: string;
  postCount: number;
  username: string;
};

export const FriendsProfile = (props: Props) => {
  const { username } = useParams();
  const [userData, setUserData] = React.useState<User>();
  const [hasMore, setHasMore] = React.useState(false);
  const [first, setFirst] = React.useState(true);
  // console.log(username);
  const query = useQuery("anotherUser", async () => await getByUserName(username!), {
    onSuccess: (data) => {
      console.log(data);
      setUserData(data);
    },
  });
  const {
    status,
    data,
    error,
    isFetching,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery(
    "posts",
    ({ pageParam  }) => getByUserNamePosts(username!,3, pageParam, first),
    
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
  console.log(data)

  return (
    <UserProfile Lnavbar={false}>
      <InfiniteScroll
className="flex-row max-w-5xl"
    next={() => fetchNextPage({ pageParam: data?.pages[data.pages.length-1].nextOffset })}
    hasMore={hasMore}
    loader={<p>Loading...</p>}
    dataLength={
        data?.pages.reduce((total, page) => total + page.posts.length, 0) ||
        0
    }
>
<Flex className="w-[100%] max-w-5xl flex-wrap gap-[24px]   bg-white">
{

          
data?.pages?.map((page, index) => (
  page.posts.map((post, index) => ( post.photos.length === 1 ?
    
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

    )) : 
    
      <Flex
    onClick={() => handleClick(post.id)}
    key={index}
    className="w-[310px] h-[354.5px] bg-black rounded-t-[24px] flex justify-start cursor-pointer"
  >
    <Flex className="w-[64px] absolute z-10 bg-black h-[64px]">
      
    </Flex>
      <img
        className="min-w-[80px] rounded-[24px]  "
        src={post.photos[0]}
        alt=""
      />
   
   </Flex>

    
    
  ))
 
))


} 
 
        

        <Flex className="w-[310px] h-[354.5px] bg-black rounded-t-[24px]"></Flex>
      </Flex>
</InfiniteScroll>
     
      <Flex className="w-[400px] gap-8 flex-col items-center h-[487px] bg-[#F1EBE3] border-[#CDCDCD]">
        <Flex className="flex-col gap-6 -mt-12 justify-center items-center">
          <Flex>
            <Avatar src={userData?.avatar} width={106} height={107} />
            <AvatarTik className=" absolute mt-[75px]" />
          </Flex>

          <Flex className="flex-col gap-2 items-center">
            <Flex className="gap-1">
              <span className="text-[#C38F00] text-[16px] font-bold">
                {userData?.firstName}
              </span>
             
              <span className="text-[#C38F00] text-[16px] font-bold">{userData?.lastName}</span>
            </Flex>
            <Flex>
              <span className="text-[#17494D] text-[11px]">
                {" "}
                {userData?.followerCount}  دنبال کننده{" "}
              </span>
              <span className=" px-2 text-[11px] text-[#17494D]"> | </span>
              <span className="text-[#17494D] text-[11px]">{userData?.followingCount} دنبال شونده</span>
            </Flex>
          </Flex>
        </Flex>

        <ButtonText
          className="w-[91px] px-[10px]   text-[#FFF] text-[14px] font-medium bg-[#C38F00] rounded-[100px] h-[33px]"
          type="button"
        >
          دنبال کردن
        </ButtonText>
        <Flex className="flex-col items-center justify-center gap-3">
          <Pin />
          <span className="text-[#17494D] text-[14px]">{userData?.postCount} عکس</span>
        </Flex>

        <Flex className="w-[212px] border-[#CDCDCD] justify-center gap-5 items-center h-[72px] bg-[#F3F0EE]">
          <Favorite />
          <Comment />
          <Block />
        </Flex>
      </Flex>
    </UserProfile>
  );
};
