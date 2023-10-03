// @flow 
// import * as React from 'react';
import {useEffect, useState} from 'react'
import { UserProfile } from './UserProfile';
// import { PostContainer } from '../components/PostContainer/PostContainer';
import { HomeContainer } from '../components/HomeContainer/HomeContainer';
import { getHomePosts } from '../api/appApi';
type Props = {
    
};
type HomePost = {
    familyName : {
        firstName: string,
        lastName: string
    },
    id: number,
    photos: string[],
    tags:  {
        title: string,
        color: string
    } []
}
export const Home = (props: Props) => {
const [homePost, setHomePost] = useState<HomePost[]>([])
    useEffect(()=>{
        getHomePosts(10).then(res => setHomePost(res))
        

    }, [])
    return (
        <UserProfile hasLNavbar={false}>
            <HomeContainer postData = {homePost} />
              {/* <PostContainer/> */}

        </UserProfile>
    );
};


