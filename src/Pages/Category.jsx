import { useRef, useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import CategorySection1 from '../Components/CategorySection/CategorySection1';
import CategorySection2 from '../Components/CategorySection/CategorySection2';
import CategorySection3 from '../Components/CategorySection/CategorySection3';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Components/Loading';

export default function Category() {
  const { id } = useParams()
  const navigate = useNavigate()

  const queryClient = useQueryClient()
  const {data : information, status, isLoading, refetch } = useQuery({
    queryKey : ['postsCategory', id],
    queryFn : fetchCategory,
  })
  

  async function fetchCategory(){
      let url1 = `/Articles/ArticleShortlistWithImagesFullCategory?category=${id}`
      const res = await axios.post(url1)
      if(res.data == 'Article Not Found'){
        navigate('/NotFound')
        return []
      }else{
        return res.data
      }
  }
  useEffect(() => {
    refetch()
  }, [id])

  return (
    <>
    {isLoading && <Loading></Loading>}
    {!isLoading && information.length !== 0 &&
      <div className="category-container">
        <CategorySection1 id={id}></CategorySection1>
        <CategorySection2 id={id}></CategorySection2>
        <CategorySection3 id={id}></CategorySection3>

      </div>
    }
    

    </>
  )
}
