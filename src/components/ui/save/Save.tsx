import {Image} from '@chakra-ui/react'
import save from "/assets/images/save.svg";
import ButtonText from '../button/Button';

interface Props {
  isSave: boolean;
  onSave: () => void;
  className?: string;
}

function Like({isSave, onSave, className}: Props) {
  return (
    <ButtonText type='button' onClick={onSave} className={`flex items-center content-center ${className}`}>
    <Image src={save} w={'24px'}  /> <span className='mr-2 color-primary'>{isSave}</span>
    </ButtonText>
  )
}

export default Like