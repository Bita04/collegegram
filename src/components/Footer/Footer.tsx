// @flow 
import { Flex } from '@chakra-ui/react';
import { TreeIcon } from '../../icons/TreeIcon';
type Props = {
    
};
export const Footer = (props: Props) => {
    return (
        <Flex justifyContent='center' alignItems='center' backgroundColor='#F1EBE3' width='100%' height='440px'>
            <TreeIcon />
        </Flex>
    );
};