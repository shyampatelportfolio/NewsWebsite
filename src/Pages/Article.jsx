import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Loading';
import PageNotFound from '../Components/PageNotFound'
import ArticleRecommendations from '../Components/ArticleRecommendations';



export default function Article() {
    const { id } = useParams()
    const [details, setMyDetails] = useState(null)

    const [isVisible, setIsVisible] = useState(false);
    const articleRef = useRef()
    const [fetchError, setFetchError] = useState(false)


    const {data : article, isLoading, refetch } = useQuery({
        queryKey : ['article', id],
        queryFn : fetchArticle,
        enabled : false
    })


    useEffect(() => {
      const handleScroll = () => {
        const myArticle = articleRef.current
        if(myArticle){
            const bool = window.scrollY > 200 && window.scrollY < myArticle.scrollHeight - 500
            setIsVisible(bool);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(() =>{
      if(article){
        const category = checkCategory(article.articleCategory)
        if(category == null){
          setMyDetails(null)
        } 
        else{
          setMyDetails({
            category : category,
            id : article.articleId
          })
        }
      }
    }, [article])

    useEffect(() => {
      window.scrollTo(0, 0);

      refetch()
    }, [id])




    function checkCategory(categoryTemp){
      const categories = ['World', 'Politics', 'Science', 'Food', 'Sports', 'Travel', 'Business']
      if(categories.includes(categoryTemp)){
        return categoryTemp
      }else if(categoryTemp == null){
        return null
      }
      else{
        return 'World'
      }
    }
    async function fetchArticle(){
        let url1 = `/Articles/ArticleFullWithImage?articleId=${id}`

        const response = await axios.post(url1)
        if(response.data == 'Article Not Found'){
          setFetchError(true)
          return null
        }
        else{
          setFetchError(false)
          return response.data
        } 
    }
 


    function handleScrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds smooth scrolling
          });
    }
  
  return (
    <>
      {isLoading && <Loading></Loading>}

        {!isLoading && article &&
            <>
            <div
              style={{
                opacity: isVisible ? '0.7' : '0',
                pointerEvents: isVisible ? 'all' : 'none',

              }}
            onClick={handleScrollToTop} className="scroll-to-top-container">
                <div className="scroll-to-top-arrow"></div>
            </div>
            <div ref={articleRef} className="article-container">

                <div className="article-overview">
                    <div className="article-overview-details">
                        <div className="article-overview-subtitle">{article.articleCategory}</div>
                        <div className="article-overview-title">{article.articleTitle}</div>
                        <div className="article-overview-preface">{article.articlePreface}</div>
                        <div className="article-overview-information">
                            <div className="article-overview-date">{article.articleDate}</div>
                            <div className="article-overview-author">{article.articleAuthor}</div>
                        </div>
                    </div>
                </div>
                <div className="article-main-image">
                    <img src={article.articleMainImage} alt="" />
                </div>
                <div className="article-section">
                    <div className="article-section-page">
                        {article.articleChunks.map((x,i) => {
                            return (
                                x.type == 'Title' ? <div key={i} className="article-section-title">{x.data}</div> : <div key={i} className="article-section-description">{x.data}</div>
                            )
                        })}
                    </div>
                </div>
                <div className="article-ending">

                  {article.articleAuthor}
                </div>
                <ArticleRecommendations details={details}></ArticleRecommendations>
            </div>
       
            </>
        }
        {fetchError && <PageNotFound></PageNotFound>}
    </>
  )
}
