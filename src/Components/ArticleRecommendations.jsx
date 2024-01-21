import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import ArticleRecommendation from '../Components/ArticleRecommendation'
import axios from 'axios';

export default function ArticleRecommendations({details}) {


    const [randomArray, setRandomArray] = useState([])

    
    const {data : information, isLoadingRecommendations, refetch } = useQuery({
        queryKey : ['postsRecommendations'],
        queryFn : fetchCategory,
        enabled : false
    })

    async function fetchCategory(){
        let url1 = `/Articles/ArticleShortlistWithImagesFullCategory?category=${details.category}`
        const res = await axios.post(url1)
        const newData = res.data.filter(x => {
            return x.articleId !== details.id
        }) 
        console.log(newData)
        setRandomArray(generateRandomArray(newData.length))
        return newData
    }
    function generateRandomArray(n){
        let myArray = []
        for(let i = 0; i < 4; i++){
            let myNumber = Math.floor(Math.random()*n)
            while(myArray.includes(myNumber)){
                myNumber = Math.floor(Math.random()*n)
            }
            myArray.push(myNumber)
        }
        return myArray
    }

      useEffect(() => {
        if(details !== null){
            refetch()
        }
      }, [details])

  return (
    <div className="article-recommendations">
        {information && 
            <>
            <div className="article-recommendations-title">Recommended</div>
            <div className="article-recommendation-wrapper">
                <ArticleRecommendation information={information[randomArray[0]]}></ArticleRecommendation>
                <ArticleRecommendation information={information[randomArray[1]]}></ArticleRecommendation>
                <ArticleRecommendation information={information[randomArray[2]]}></ArticleRecommendation>
                <ArticleRecommendation information={information[randomArray[3]]}></ArticleRecommendation>
            
            </div>
            </>
        }
    </div>
  )
}
