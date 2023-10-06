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


type comment = string
type tags = {
  title: string,
  color: string
}

interface Props {
    likes: number;
    saves: number;
    tags: tags[];
    comments: comment[];
    description: string
}
type Inputs = {
  comment: string
}

function PostDetail({likes, saves, tags, comments, description}: Props) {
  const[commentsPost, setCommentsPost] = useState<string[]>([])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => setCommentsPost([...commentsPost, data.comment])


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

    <Stack className=' max-h-52 overflow-auto'>
  {commentsPost.map(comment => <Comment username='مهشید منزه' createdAt={new Date()} likes={3} content={comment} />  )}

{/* <Comment username='مهشید منزه' createdAt={new Date()} likes={3} content="" /> */}
    </Stack>
    </Flex>
    
    </>
  )
}

export default PostDetail