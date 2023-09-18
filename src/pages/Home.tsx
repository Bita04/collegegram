// @flow 
import * as React from 'react';
import { UserProfile } from './UserProfile';
import { PostContainer } from '../components/PostContainer/PostContainer';
import { HomeContainer } from '../components/HomeContainer/HomeContainer';
type Props = {
    
};
export const Home = (props: Props) => {
    return (
        <UserProfile hasLNavbar={false}>
            <HomeContainer/>
              {/* <PostContainer/> */}

        </UserProfile>
    );
};