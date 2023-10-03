import { Image } from '@chakra-ui/image'

interface Props {
  imageUrl: string;
  className?: string;
}

function PostImage({ imageUrl, className}: Props) {
  return (
    <Image  borderRadius={'24px 24px 0 0'} className={className} src={imageUrl} />
  )
}

export default PostImage