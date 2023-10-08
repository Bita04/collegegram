import {Image, NumberInputFieldProps} from '@chakra-ui/react'
import heart from "/assets/images/heart.svg";
import ButtonText from '../button/Button';
import { useMutation } from 'react-query';
import { addBookmark, addLike } from '../../../api/appApi';

interface Props {
  count: number;
  onLike: () => void;
  className?: string;
  id: number
}

function Like({count, onLike, className, id}: Props) {

  const {
    mutate: likoPost,
  } = useMutation((id:number) =>addLike(id), {
    onSuccess: (data) => {
      console.log(data);
      // localStorage.setItem("accessToken", data.accessToken)
      // localStorage.setItem("refresh-token", data['refresh-token']) 
      // console.log(localStorage.getItem("accessToken"))
      // navigate("/profile");
      
    }}
  )
  return (
    <ButtonText type='button' onClick={() => likoPost(id)} className={`flex items-center content-center ${className}`}>
    <Image src={heart} w={'24px'}  /> <span className='mr-2 color-primary'>{count}</span>
    </ButtonText>
  )
}

export default Like