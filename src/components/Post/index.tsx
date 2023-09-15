import React from 'react'
import PostImage from './PostImage'
import { Flex } from '@chakra-ui/layout'
import PostDetail from './PostDetail'

function index() {
  return (
    <Flex  flexDir={'row'}>
        <PostImage imageUrl='https://via.placeholder.com/488' />
        <PostDetail likes={0} saves={0} tags={[]} comments={[]} />
    </Flex>
  )
}

export default index