import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Story2 from '../StoryContainers/Story2';
import Story3 from '../StoryContainers/Story3';
import Story4 from '../StoryContainers/Story4';
import Loading from '../Loading';


export default function Section2() {
    const {data : information, status, isLoading} = useQuery({
        queryKey : ['posts', 'section2'],
        queryFn : testQuery
    })
    async function testQuery(){
        let url1 = '/Articles/ArticleShortlistWithImagesFull'
        let arr = [107, 103, 91, 92, 93, 94, 95, 96, 97, 98, 104, 92, 103]

        return axios.post(url1, arr)
        .then(res => res.data)
    }
  return (
    <>
      {isLoading && <Loading></Loading>}

        {!isLoading &&
            <>
                <div className="home-second">
                    <Story2 information={information[0]}></Story2>
                    <div className="home-second-side">
                        <div className="home-second-title">World News</div>
                        <div className="story3-wrapper">
                            <Story3 information={information[1]}></Story3>
                            <Story3 information={information[2]}></Story3>
                            <Story3 information={information[3]}></Story3>
                            <Story3 information={information[4]}></Story3>
                            <Story3 information={information[5]}></Story3>
                            <Story3 information={information[6]}></Story3>
                            <Story3 information={information[7]}></Story3>
                            <Story3 information={information[8]}></Story3>
                            <Story3 information={information[9]}></Story3>
                        </div>
                    </div>
                </div>
                <div className="story4-wrapper">
                    <Story4 information={information[10]}></Story4>
                    <Story4 information={information[11]}></Story4>
                    <Story4 information={information[12]}></Story4>
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
