import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import Story from '../StoryContainers/Story';
import Story1 from '../StoryContainers/Story1';
import axios from 'axios';
import Loading from '../Loading';

export default function Section1() {

    const {data : information, status, isLoading} = useQuery({
        queryKey : ['posts', 'section1'],
        queryFn : testQuery
    })
    async function testQuery(){
        axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL;

        let url1 = '/Articles/ArticleShortlistWithImagesFull'
        let arr = [113, 115, 8, 14, 62, 16, 90]
        return axios.post(url1, arr)
        .then(res => res.data)
    }

   
  return (
    <>
      {isLoading && <Loading></Loading>}

        {
            !isLoading &&
            <>
                <div className="section1">
                    <div className="section1-left">
                        <Story1 information={information[0]}></Story1>
                    </div>
                    <div className="section1-right">
                        <div className="story-wrapper-title">Top Headlines</div>
                        <div className="story-container">
                            <Story information={information[1]} ></Story>
                            <Story information={information[2]} ></Story>
                            <Story information={information[3]} ></Story>
                            <Story information={information[4]} ></Story>
                            <Story information={information[5]} ></Story>
                            <Story information={information[6]} ></Story>
                        </div>
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
