import { Badge, Stack } from '@chakra-ui/react';
import React from 'react'

type tags = {
    name: string,
    color: string
}

interface Props {
    tags: tags[];
}

function Tags({tags}: Props) {
  return (
    <Stack direction='row'>
        {tags.map((tag, index) => {
            return <a href="#"><Badge color={'white'} fontSize={'14px'} bgColor={tag.color}  padding={'6px 4px'} borderRadius={'4px'} key={index} >{tag.name}</Badge></a>
        })}

  </Stack>
  )
}

export default Tags