import { Avatar, Flex, Image, Input, Stack } from '@chakra-ui/react'
import save from "/assets/images/save.svg";
import send from "/assets/images/send.svg";
import Like from '../ui/like/Like';
import Save from '../ui/save/Save';
import Tags from './Tags';
import InputText from '../ui/input/InputText';
import Comment from './Comment';
import {useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { AuthAPI } from '../../api/authApi';
import { getComments } from '../../api/appApi';

import InfiniteScroll from "react-infinite-scroll-component";

type comment = string
type tags = {
  title: string,
  color: string
}

interface Props {
    likes: number;
    saves: number;
    tags: tags[];
    id: number;
    description: string
}
type Inputs = {
  comment: string
}

function PostDetail({likes, saves, tags, id, description}: Props) {
  const[commentsPost, setCommentsPost] = useState<string[]>([])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  // const {
  //   mutate: loginUser,
  // } = useMutation((userData: Inputs) =>AuthAPI.login(userData.authenticator, userData.password), {
  //   onSuccess: (data) => {
  //     console.log(data);
  //     localStorage.setItem("accessToken", data.accessToken)
  //     localStorage.setItem("refresh-token", data['refresh-token']) 
  //     console.log(localStorage.getItem("accessToken"))
  //     navigate("/profile");
      
  //   }}
  // )
  

  // const {data} = useQuery()
  const onSubmit: SubmitHandler<Inputs> = (data) => setCommentsPost([...commentsPost, data.comment])

  const [first, setFirst] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  const [commentData, setCommentData] = useState([])
  const {
    status,
    data:comments,
    error,
    isFetching,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery(
    "comments",
    ({ pageParam  }) => getComments(+id!,3,pageParam, first),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        // console.log(data.pages[data.pages.length-1])
        // console.log(data.pages)
        // setOrginalData((prev) => [...prev, ...data.pages[data.pages.length-1]?.posts]);
        if (data.pages[data.pages.length-1].hasMore) {
          // console.log(data.pages[data.pages.length-1].nextOffset)
          // setCommentData((prev) => [...prev, ...data?.pages[data.pages.length-1]?.comments])
          // setOffset();
          // console.log(commentData)
          setHasMore(true);
          setFirst(false)
          
        } else {
          setHasMore(false);
        }
      },
      // enabled: hasMore,
    }
  );

  console.log(comments)
  return (
    <>
    
    <Flex flexDirection={'column'} className='mr-[39px]'>
    <Stack spacing={2} direction={'row'} className='items-start'>
    <Like count={60} onLike={() => console.log('clicked')} />
    <Save className='mr-[16px]' isSave={true} onSave={() => console.log('saved')}/>    
    </Stack>


    <span className='my-[24px] color-secondary text-sm/[11px]'>۵ ماه پیش</span>
    <p className='w-[462px] color-secondary mb-[16px] leading-[32px]'>{description} </p>
    <Tags tags={tags} />

    <form onSubmit={handleSubmit(onSubmit)}>
    <Stack direction={'row'} alignItems={'center'} spacing={3} className='my-[50px]'>
        <Avatar w={'40px'} h={'40px'} name='Oshigaki Kisame' src='#' />
        <Input {...register('comment')} borderRadius={'16px'} backgroundColor={'#fff'} border={'1px solid #CDCDCD'} className='  placeholder-[#CDCDCD]' placeholder='نظر خود را بنویسید' />
        <button ><Image w={'24px'} src={send} /></button>
    </Stack>
    </form>

    
    <InfiniteScroll
className="flex-row max-w-5xl"
    next={() => fetchNextPage({ pageParam: comments?.pages[comments.pages.length-1].nextOffset })}
    hasMore={hasMore}
    loader={<p>Loading...</p>}
    dataLength={
        comments?.pages.reduce((total, page) => total + page?.comments?.length, 0) ||
        0
    }
>
<Stack className=' max-h-52 overflow-auto'>
    {
       comments?.pages?.map((page, index) => (
        page?.comments?.map((comment, index) => <Comment username={comment.userName} createdAt={comment.createdAt} likes={3} content={comment.content} /> 
          
          // console.log(comment)
          // comment?.map((c, index) => (
          //   <Comment username={c.userName} createdAt={c.createdAt} likes={3} content={c.content} /> 


          // ))
        )
       
      ))
    }
  </Stack>
  </InfiniteScroll>
{/* <Comment username='مهشید منزه' createdAt={new Date()} likes={3} content="" /> */}
   
    </Flex>
    
    </>
  )
}

export default PostDetail