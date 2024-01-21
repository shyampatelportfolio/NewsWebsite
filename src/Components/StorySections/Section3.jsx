import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Story5 from '../StoryContainers/Story5';
import Story6 from '../StoryContainers/Story6';
import Loading from '../Loading';

export default function Section3() {

    const {data : information, status, isLoading} = useQuery({
        queryKey : ['posts', 'section3'],
        queryFn : testQuery
    })
    async function testQuery(){
        let url1 = '/Articles/ArticleShortlistWithImagesFull'
        let arr = [70,75,71,67]
        // let arr = [75, 71, 67, 70, 73, 65]

        return axios.post(url1, arr)
        .then(res => res.data)
    }
  return (
    <>
      {isLoading && <Loading></Loading>}

        {!isLoading &&
            <>
                <div className="section3">
                    <div className="story5-wrapper">
                        <Story5 information={information[0]}></Story5>
                    </div>
                    <div className="story6-wrapper">
                        <div className="story6-wrapper-title">Travel</div>
                        <Story6 information={information[1]}></Story6>
                        <Story6 information={information[2]}></Story6>
                        <Story6 information={information[3]}></Story6>
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
