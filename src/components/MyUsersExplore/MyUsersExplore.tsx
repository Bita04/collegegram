import React from 'react';
// import {EachUserExplore} from "../MyUsersExplore/EachUserExplore"
import { ClassNames } from '@emotion/react';
import EachUserExplore from './EachUserExplore';

const MyUsersExplore = () => {
    return (
      <div>
        <div className='text-base mb-8'>کالج‌گرامی‌‌ها</div>
        <EachUserExplore/>
      </div>
    );
};

export default MyUsersExplore;