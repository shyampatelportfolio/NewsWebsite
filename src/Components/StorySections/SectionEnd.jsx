import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import Story13 from '../StoryContainers/Story13';
import axios from 'axios';
import Loading from '../Loading';

export default function SectionEnd() {

    
    const {data : information, status, isLoading} = useQuery({
        queryKey : ['posts', 'sectionEnd'],
        queryFn : testQuery
    })
    async function testQuery(){
        let url1 = '/Articles/ArticleShortlistWithImagesFull'
        let arr = [21,25,26,28, 31,36,40,44, 13,14,10,9, 34, 38, 55,2]

        return axios.post(url1, arr)
        .then(res => res.data)
    }
  return (
    <>
      {isLoading && <Loading></Loading>}

        {!isLoading &&
            <>
                <div className="home-fourth">
                    <div className="home-title">Science</div>
                    <div className="story13-wrapper">
                        <Story13 information={information[0]}></Story13>
                        <Story13 information={information[1]}></Story13>
                        <Story13 information={information[2]}></Story13>
                        <Story13 information={information[3]}></Story13>
                    </div>
                    <div className="home-title">Sports</div>
                    <div className="story13-wrapper">
                        <Story13 information={information[4]}></Story13>
                        <Story13 information={information[5]}></Story13>
                        <Story13 information={information[6]}></Story13>
                        <Story13 information={information[7]}></Story13>
                    </div>
                    <div className="home-title">Politics</div>
                    <div className="story13-wrapper">
                        <Story13 information={information[8]}></Story13>
                        <Story13 information={information[9]}></Story13>
                        <Story13 information={information[10]}></Story13>
                        <Story13 information={information[11]}></Story13>
                    </div>
                    <div className="home-title">Other News</div>
                    <div className="story13-wrapper">
                        <Story13 information={information[12]}></Story13>
                        <Story13 information={information[13]}></Story13>
                        <Story13 information={information[14]}></Story13>
                        <Story13 information={information[15]}></Story13>
                    </div>
                </div>
            </>
        }

    </>
  )
}
