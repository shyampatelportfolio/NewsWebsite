import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Story14 from '../StoryContainers/Story14';
import Story15 from '../StoryContainers/Story15';

export default function CategorySection1({id}) {

    const [imageSrc, setImageSrc] = useState(() => {
        if(id){
        const source = `/Images/${id}Banner.jpg`
        return source
        }else{
        return null
        }
    })

    const {data : information, status, isLoading, refetch} = useQuery({
        queryKey : ['postsCategory', id],
        enabled : false

    })


    useEffect(() => {
        if(id){
            const source = `/Images/${id}Banner.jpg`
            setImageSrc(source)
        }
    }, [id])
  return (
    <>
                <div className="category-first">
                    <div className="story14-wrapper">
                        <Story14 information={information[0]}></Story14>
                        <div className="story14-side">
                            <div className="category-banner">
                                <img src={imageSrc} alt="" />
                                <div className="category-banner-title">{id}</div>
                            </div>
                            
                            <Story15 information={information[1]}></Story15>
                            <Story15 information={information[2]}></Story15>
                            <Story15 information={information[3]}></Story15>
                            <Story15 information={information[4]}></Story15>
                        </div>
                    </div>
                </div>
                <div className="category-divider-line-container">
                    <div className="category-divider-line"></div>
                    <div className="category-divider-line"></div>
                </div>
    </>
  )
}
