import React from 'react';
import { UserProfile } from './UserProfile';
import BlockPage from '../components/Block/BlockPage';

const Block = () => {
    return <UserProfile hasLNavbar={false}>
        <BlockPage/>
    </UserProfile>;
};

export default Block;