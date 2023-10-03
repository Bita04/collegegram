import { Flex, Text} from "@chakra-ui/react";
import * as React from "react";
import { getPosts } from "../../api/appApi";

import { useEffect, useState } from "react";
type Posts = {
    "posts": [],
    "nextOffset": string,
    
};

type Post = {
    "photos": string [],
    "description" ?: string,
    "closeFriends": boolean,
    "createdAt": string,
    "tags": [
        
    ]
}
export const PostContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  // const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    
    getPosts(10, 0, true).then((res) => {
      setPosts(res.posts);
      
    });
  }, []);
  console.log(posts);

  return (
    <Flex className="w-[100%] max-w-4xl flex-wrap gap-[24px]">

      {/* <Flex className="w-[200px] bg-black">

      </Flex>
      <Flex className="w-[200px] bg-black">

</Flex>
<Flex className="w-[200px] bg-black">

</Flex>
<Flex className="w-[200px] bg-black">

</Flex>
<Flex className="w-[200px] bg-black">

</Flex> */}
<Flex className=" min-w-[850px] justify-center items-center">


<Flex className="flex-col w-[359px] justify-center items-center">
  <h1 className="text-[#17494D] p-3 text-[20px] font-bold">
    سلام به کالج گرام من خوش اومدی!
  </h1>
  <Text className="w-[359px] leading-[25px] text-[16px] h-[71px] font-normal text-[#17494D]  text-center">
  از اینجا به تمام محتواهایی مثل پست، ذخیره‌ها، پیام‌ها و... دسترسی داری کافیه بخش مرتبط رو از منوی سممت چپ انتخاب کنی. :)
  </Text>
  <Text className="mt-[80px] text-[16px] text-[#17494D] font-normal">حالا وقت گذاشتن اولین پست هست:)</Text>
  
</Flex>
</Flex>
      {/* {  posts?.map((post) => (
        <Flex className="w-[232px] h-[232px] bg-black rounded-t-[24px]">
          <img
            className="w-[232px] rounded-t-[24px] h-[232px]"
            src={post.photos[0]}
            alt=""
          />
        </Flex>
      ))} */}
      
     
    </Flex>
  );
};