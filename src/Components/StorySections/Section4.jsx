import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Story7 from '../StoryContainers/Story7';
import Story8 from '../StoryContainers/Story8';
import Story9 from '../StoryContainers/Story9';
import Loading from '../Loading';

export default function Section4() {
    const {data : information, status, isLoading} = useQuery({
        queryKey : ['posts', 'section4'],
        queryFn : testQuery
    })
    async function testQuery(){
        let url1 = '/Articles/ArticleShortlistWithImagesFull'
        let arr = [49,50,52,59,57,48]


        return axios.post(url1, arr)
        .then(res => res.data)
    }
  return (
        <>
      {isLoading && <Loading></Loading>}

            {!isLoading &&
                <>
                    <div className="home-sixth">
                        <div className='story7-wrapper'>
                            <div className="story7-wrapper-title">Food</div>
                            <Story7 information={information[0]}></Story7>
                            <Story7 information={information[1]}></Story7>
                            <Story7 information={information[2]}></Story7>
                        </div>
                            <Story8 information={information[3]}></Story8>
                        <div className="story9-wrapper">
                            <Story9 information={information[4]}></Story9>
                            <Story9 information={information[5]}></Story9>
                        </div>
                    </div>
                    <div className="home-divider-line-container">
                        <div className="home-divider-line"></div>
                        <div className="home-divider-line"></div>
                    </div>
                </>
            }
        </>
  )
}
