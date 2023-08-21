// @flow 
import * as React from 'react';
import { Input } from '@chakra-ui/react'
type InputTypes = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color';
type Props = {
    placeholder: string,
    icon: string,
    type: InputTypes
    
};
export const InputForm = (props: Props) => {
    return (
        <Input />
    );
};