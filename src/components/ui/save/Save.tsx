import {Image} from '@chakra-ui/react'
import save from "/assets/images/save.svg";
import ButtonText from '../button/Button';
import { useMutation } from 'react-query';
import { addBookmark } from '../../../api/appApi';

interface Props {
  isSave: boolean;
  onSave: () => void;
  className?: string;
  id:number
}

function Save({isSave, onSave, className, id}: Props) {
  const {
    mutate: savePost,
  } = useMutation((id:number) =>addBookmark(id), {
    onSuccess: (data) => {
      console.log(data);
      // localStorage.setItem("accessToken", data.accessToken)
      // localStorage.setItem("refresh-token", data['refresh-token']) 
      // console.log(localStorage.getItem("accessToken"))
      // navigate("/profile");
      
    }}
  )
  return (
    <ButtonText type='button' onClick={() => savePost(id)} className={`flex items-center content-center ${className}`}>
    <Image src={save} w={'24px'}  /> <span className='mr-2 color-primary'>{isSave}</span>
    </ButtonText>
  )
}

export default Save