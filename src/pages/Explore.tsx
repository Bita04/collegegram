// @flow 
import * as React from 'react';
import { UserProfile } from './UserProfile';
import { ExploreContainer } from '../components/ExploreContainer/ExploreContainer';
type Props = {
    
};
export const Explore = (props: Props) => {
    return (
        <UserProfile hasLNavbar={false}>
            <ExploreContainer firstName={'بیتا'} lastName={'بهادری'} followers={50}/>
            
            
        </UserProfile>
    );
};