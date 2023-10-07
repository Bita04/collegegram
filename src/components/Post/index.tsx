import React, { useState } from 'react'
import PostImage from './PostImage'
import { Flex } from '@chakra-ui/layout'
import PostDetail from './PostDetail'
import { useParams } from 'react-router-dom'
import { useInfiniteQuery, useQuery } from 'react-query'
import { getComments, getPost } from '../../api/appApi'
interface Comment  {
  username: string;
  createdAt: Date;
  likes: number;
  content: string;
  parentId?: number;
 }
 import InfiniteScroll from "react-infinite-scroll-component";


 
function index() {
  const {id} = useParams()
  const [hasMore, setHasMore] = React.useState(false);
  const {data} = useQuery('post',() => getPost(+id!) )
  const [first, setFirst] = React.useState(true);
  const [commentData, setCommentData] = useState([])


  // console.log(comments?.pages[comments?.pages.length-1])
  return (
    <Flex  flexDir={'row'}>
       
        <Flex>
        <PostImage className='w-[488px] h-[488px]' imageUrl={data?.photos[0]} />
          
        </Flex>
        
<PostDetail description={data?.description} likes={0} saves={0} tags={data?.tags} id={+id!} />


    </Flex>
  )
}

export default index