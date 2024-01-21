import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Story16 from '../StoryContainers/Story16';

export default function CategorySection2({id}) {
    const {data : information, status, isLoading, refetch} = useQuery({
        queryKey : ['postsCategory', id],

        enabled : false

    })
  

  return (
    <>
                <div className="category-second">
                    <div className="story16-wrapper">
                        <Story16 information={information[5]}></Story16>
                        <Story16 information={information[6]}></Story16>
                    </div>
                    <div className="story16-wrapper">
                        <Story16 information={information[7]}></Story16>
                        <Story16 information={information[8]}></Story16>
                    </div>
                    <div className="story16-wrapper">
                        <Story16 information={information[9]}></Story16>
                        <Story16 information={information[10]}></Story16>
                    </div>
                    <div className="story16-wrapper">
                        <Story16 information={information[11]}></Story16>
                        <Story16 information={information[12]}></Story16>
                    </div>
                </div>
    </>
  )
}
