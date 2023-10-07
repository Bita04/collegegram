import {Image, NumberInputFieldProps} from '@chakra-ui/react'
import heart from "/assets/images/heart.svg";
import ButtonText from '../button/Button';

interface Props {
  count: number;
  onLike: () => void;
  className?: string;
}

function Like({count, onLike, className}: Props) {
  return (
    <ButtonText type='button' onClick={onLike} className={`flex items-center content-center ${className}`}>
    <Image src={heart} w={'24px'}  /> <span className='mr-2 color-primary'>{count}</span>
    </ButtonText>
  )
}

export default Like