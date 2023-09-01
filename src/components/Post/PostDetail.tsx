import { Avatar, Flex, Image, Input, Stack } from '@chakra-ui/react'
import save from "/assets/images/save.svg";
import send from "/assets/images/send.svg";
import Like from '../ui/like/Like';
import Save from '../ui/save/Save';
import Tags from './Tags';
import InputText from '../ui/input/InputText';
import Comment from './Comment';


type comment = string

interface Props {
    likes: number;
    saves: number;
    tags: object[];
    comments: comment[];
}

function PostDetail({likes, saves, tags, comments}: Props) {
  return (
    <>
    
    <Flex flexDirection={'column'} className='mr-[39px]'>
    <Stack spacing={2} direction={'row'} className='items-start'>
    <Like count={60} onLike={() => console.log('clicked')} />
    <Save className='mr-[16px]' isSave={true} onSave={() => console.log('saved')}/>    
    </Stack>


    <span className='my-[24px] color-secondary text-sm/[11px]'>۵ ماه پیش</span>
    <p className='w-[462px] color-secondary mb-[16px] leading-[32px]'>دکوراسیون داخلی به طور کلی به تزیینات و تجهیزات فضای داخلی در خانه‌ها، محل کار، مدارس و فضاهای عمومی گفته می شود.دکوراسیون داخلی مربوط به تمام جنبه‌های نورپردازی،رنگ،بافت،نگارگری،مبلمان و چیدمان،انتخاب کف‌پوش و نصب آن،انتخاب پرده،پنجره‌ها و اکسسوری‌ها می شود.</p>
    <Tags tags={[{name:'طبیعت', color:'green'}, {name:'عاشقانه', color: 'red'}]} />

    <form>
    <Stack direction={'row'} alignItems={'center'} spacing={3} className='my-[50px]'>
        <Avatar w={'40px'} h={'40px'} name='Oshigaki Kisame' src='#' />
        <Input borderRadius={'16px'} backgroundColor={'#fff'} border={'1px solid #CDCDCD'} className='  placeholder-[#CDCDCD]' placeholder='نظر خود را بنویسید' />
        <button><Image w={'24px'} src={send} /></button>
    </Stack>
    </form>

    <Stack>
        <Comment username='مهشید منزه' createdAt={new Date()} likes={3} content='خیلی عکس قشنگ و جالبیه. جایی رو می‌شناسی که این دکور رو بسازن؟' />
    </Stack>
    </Flex>
    
    </>
  )
}

export default PostDetail