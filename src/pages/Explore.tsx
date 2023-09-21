// @flow 
import * as React from 'react';
import { UserProfile } from './UserProfile';
import { ExploreContainer } from '../components/ExploreContainer/ExploreContainer';
type Props = {
    
};
export const Explore = (props: Props) => {
    return (
        <UserProfile hasLNavbar={false}>
            <ExploreContainer/>
            
            
        </UserProfile>
    );
};