import likeFilled from "/assets/images/heartFilled.svg";
import likeOutline from "/assets/images/heart.svg";
import replay from "/assets/images/replay.svg";
import {Image} from '@chakra-ui/react'

import { Flex } from "@chakra-ui/react";

interface Props  {
 username: string;
 createdAt: Date;
 likes: number;
 content: string;
 parentId?: number;
}

function Comment({username, createdAt, likes, content, parentId}: Props) {
  return (
    <>
        <Flex justifyContent={'space-between'} flexDir={'row'}>
            <div>
                <span className="text-[12px] font-bold color-secondary">{username}</span>
                <small className="mr-2">{createdAt.getFullYear()}</small>
            </div>
            <Flex justifyContent={'space-between'}>
                <Flex>
                {likes > 0 ? <div className="align-center"><span className="color-primary ml-[8px]">{likes}</span><button><Image src={likeFilled}/></button></div> : <button><Image src={likeOutline}/></button>}
                </Flex>
                
                <Flex className="mr-[24px]">
                    <button className="flex"><b className="color-primary ml-[6px]">پاسخ</b>
                    <Image src={replay} /></button>
                </Flex>
                </Flex>
            </Flex>
            <p className="mt-[8px]">{content}</p>
    </>
  )
}

export default Comment