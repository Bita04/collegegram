import React from 'react'
import PostImage from './PostImage'
import { Flex } from '@chakra-ui/layout'
import PostDetail from './PostDetail'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getPost } from '../../api/appApi'
interface Comment  {
  username: string;
  createdAt: Date;
  likes: number;
  content: string;
  parentId?: number;
 }
function index() {
  const {id} = useParams()
  const {data} = useQuery('post',() => getPost(+id!) )
  const {data: comments}  = useQuery('comments',() => getPost(+id!) )

  console.log(data)
  return (
    <Flex  flexDir={'row'}>
       
        <Flex>
        <PostImage className='w-[488px] h-[488px]' imageUrl={data?.photos[0]} />
          
        </Flex>
        <PostDetail description={data?.description} likes={0} saves={0} tags={data?.tags} comments={[]} />
    </Flex>
  )
}

export default index