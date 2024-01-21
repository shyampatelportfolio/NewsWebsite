import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Story17 from '../StoryContainers/Story17';


export default function CategorySection3({id}) {
    const {data : information, status, isLoading, refetch} = useQuery({
        queryKey : ['postsCategory', id],
        enabled : false
    })
  return (
    <>
                <div className="category-item-divider">
                    All Articles
                </div>
                {information.map((x,i) => 
                    {
                    return <Story17 key={i} information={information[i]}></Story17>
                    }
                )}
    </>
  )
}
