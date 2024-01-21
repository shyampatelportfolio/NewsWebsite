import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Story10 from '../StoryContainers/Story10';
import Story11 from '../StoryContainers/Story11';
import Story12 from '../StoryContainers/Story12';
import Loading from '../Loading';


export default function Section5() {
    const {data : information, status, isLoading} = useQuery({
        queryKey : ['posts', 'section5'],
        queryFn : testQuery
    })
    async function testQuery(){
        let url1 = '/Articles/ArticleShortlistWithImagesFull'
        let arr = [76,77,83,89,78,79,80,81]
        return axios.post(url1, arr)
        .then(res => res.data)
    }
  return (
    <>
      {isLoading && <Loading></Loading>}

        {!isLoading &&
            <>
                <div className="home-fifth">
                <Story10 information={information[0]}></Story10>
                <div className="vertical-line"></div>
                <div className="story11-wrapper">
                    <div className="story11-wrapper-title">Business</div>
                    <Story11 information={information[1]}></Story11>
                    <Story11 information={information[2]}></Story11>
                </div>
                </div>
                <div className="story12-wrapper">
                    <Story12 information={information[3]}></Story12>
                    <Story12 information={information[4]}></Story12>
                    <Story12 information={information[5]}></Story12>
                    <Story12 information={information[6]}></Story12>
                    <Story12 information={information[7]}></Story12>
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
