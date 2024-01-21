import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import axios from 'axios';
import ActionBar from '../Components/ActionBar';
import { useAction } from '../Context/ActionsContext';
import TextAreaTitle from '../Components/TextAreaTitle';
import TextAreaText from '../Components/TextAreaText';
import TextAreaPreface from '../Components/TextAreaPreface';
import TextAreaTitleOverview from '../Components/TextAreaTitleOverview';
import { useNavigate } from 'react-router-dom'


export default function Compose() {
  const [chunks, setChunks] = useState([])
  const {action, setAction} = useAction()
  const [previewActive, setPreviewActive] = useState(false)
  const [article, setArticle] = useState(false)
  const navigate = useNavigate()

  const articleSection = useRef()


  useEffect(() => {
    
    init()
  }, [])
  useEffect(() => {
    handleAction()
  }, [action])


 
  function getDayWithSuffix(day) {
    if (day >= 11 && day <= 13) {
        return day + "th";
    } else {
        switch (day % 10) {
            case 1:
                return day + "st";
            case 2:
                return day + "nd";
            case 3:
                return day + "rd";
            default:
                return day + "th";
        }
    }
}
  function getDate(){
    var monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const monthName = monthNames[month];
    const year = today.getFullYear()
    const string = getDayWithSuffix(day) + ' ' + monthName +  ' ' + year
    return string
  }
  function createArticleChunks(){
    function capitalizeWord(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    const textArea = articleSection.current
    const childNodes = Array.from(textArea.children)
    const articleChunks = []
    childNodes.forEach((x,i) => {
      const type = capitalizeWord(x.className.slice(0,-14).slice(17))
      console.log(type)
      const data = x.value
      let chunks
      if(type == 'Text'){
        const encodedText = splitText(data)
        chunks = encodedText.map(x => {
          const chunk = {
            type: "Text",
            data: x
          }
          return chunk
        })
      }else{
        chunks = [{
          type: type,
          data: data
        }]
      }
      Array.prototype.push.apply(articleChunks, chunks)
    })

    return articleChunks
  }

  function createArticleObject(){
    const articleChunks = createArticleChunks()
    const articleTitle = document.querySelector('.article-textarea-overview-title').value
    const articlePreface = document.querySelector('.article-textarea-overview-preface').value
    const articleCategory = document.querySelector('.article-textarea-overview-category').value
    const articleDate = document.querySelector('.article-textarea-overview-date').value
    const articleAuthor = document.querySelector('.article-textarea-overview-author').value
    const articleFull = {
        articleChunks: articleChunks,
        articleTitle: articleTitle,
        articlePreface: articlePreface,
        articleCategory: articleCategory,
        articleDate: articleDate,
        articleAuthor: articleAuthor
    }

    return articleFull
  }
  function previewText(){
    setAction({
        dispatch : 'previewActive'
    })
    const articleFull = createArticleObject()
    const articleTemp = {
        articleFull: articleFull,
        dataUrl: '/Images/Scene1.jpg'
      }
      console.log(articleFull.articleChunks)
    setArticle(articleTemp)
    setPreviewActive(true)
    const articleComposeContainer = document.querySelector('.article-compose-container')
    articleComposeContainer.style.display = 'none'
  }

  function splitText(text){
    const result = text.split('\n');
    return result
  }
  async function submitArticle(){
    const articleObject = createArticleObject()
    const emptyFields = checkEmptyFields()
    if(emptyFields){
      window.alert('Please fill in all required text fields before proceeding.')
      return
    }
    const bool = getArticleSize(articleObject)
    if(!bool) return
    let url1 = `/Articles/CreateArticleFull`
   

    const response = await axios.post(url1, articleObject, { withCredentials: true })
    if(response.data == 'Too Large'){
      window.alert('Sorry, your text line exceeded the maximum allowed length.')
    }else if(response.data == 'Server Overloaded'){
      window.alert('Apologies, the server is currently handling a high volume of requests. Please try again later.')
    }
    else{
      setAction({dispatch : 'null'})
      navigate('/ArticleSubmitting', {state : response.data})
    }
  }
  function getArticleSize(articleObject){
    let bool = true
    articleObject.articleChunks.forEach(x => {
      const lettersOnly = x.data.replace(/[^a-zA-Z]/g, '');
      const numberOfLetters = lettersOnly.length;
      if(numberOfLetters > 1500) bool = false
    })
    return [bool]
  }
  function checkEmptyFields(){
    const fields = [...document.querySelectorAll('.article-input')]
    let bool = false
    fields.forEach(x => {
      if(x.value == '') bool = true
    })
    return bool
  }

  function init(){
    setChunks([
        {
            type: 'Title'
        },
        {
            type : 'Text'
        }
    ])
  }
  function handleAction(){
    if(action.dispatch == 'addTitle'){
        const oldType = chunks.at(-1).type
        if('add' + oldType == action.dispatch){
          return
        }
        setChunks(prev => {
            return [...prev, {type: 'Title'}]
        })
    }
    if(action.dispatch == 'addText'){
        setChunks(prev => {
            return [...prev, {type: 'Text'}]
        })
    }
    if(action.dispatch == 'preview'){
        previewText()
    }
    if(action.dispatch == 'cancelPreview'){
        setPreviewActive(false)
        const articleComposeContainer = document.querySelector('.article-compose-container')
        articleComposeContainer.style.display = 'block'
    }
    if(action.dispatch == 'submit'){

        submitArticle()
        setPreviewActive(false)
        const articleComposeContainer = document.querySelector('.article-compose-container')
        articleComposeContainer.style.display = 'block'
    }
  }
  return (
    <>
    <ActionBar></ActionBar>
    <div className="instructions-icon">
      <img src="/Svg/Question.svg" alt="" />
    </div>
    <div className="preview">
    {previewActive &&
        <>

            <div className="article-overview">
                <div className="article-overview-details">
                    
                    <div className="article-overview-subtitle">{article.articleFull.articleCategory}</div>
                    <div className="article-overview-title">{article.articleFull.articleTitle}</div>
                    <div className="article-overview-preface">{article.articleFull.articlePreface}</div>
                    <div className="article-overview-information">
                        <div className="article-overview-date">{article.articleFull.articleDate}</div>
                        <div className="article-overview-author">{article.articleFull.articleAuthor}</div>
                    </div>
                </div>
            </div>
            <div className="article-main-image">
                <img src={article.dataUrl} alt="" />
            </div>
            <div className="article-section">
                <div className="article-section-page">
                    {article.articleFull.articleChunks.map((x,i) => {
                        return (
                            x.type == 'Title' ? <div key={i} className="article-section-title">{x.data}</div> : <div key={i} className="article-section-description">{x.data}</div>
                        )
                    })}
                </div>
            </div>
        </>
      }
      
        <>
        <div className="article-compose-container">

            <div className="article-overview">
                <div className="article-overview-details">
                    <textarea className='article-textarea-overview-category article-input' placeholder={'Enter Category'} spellCheck={false}></textarea>
                    <TextAreaTitleOverview></TextAreaTitleOverview>
                    <div className="article-textarea-overview-line"></div>
                    <TextAreaPreface></TextAreaPreface>
                    <div className="article-overview-information">
                        <textarea className='article-textarea-overview-date article-input' defaultValue={getDate()} spellCheck={false}></textarea>
                        <textarea className='article-textarea-overview-author article-input' placeholder={'Enter Author'} spellCheck={false}></textarea>
                    </div>
                </div>
            </div>
            <div className="article-main-image">
                <img src={'Images/Scene1.jpg'} alt="" />
            </div>
            <div className="article-section">
                <div ref={articleSection} className="article-section-page">
                    {chunks.map((x,i) => {
                        if(x.type == 'Title'){
                            return <TextAreaTitle key={i}></TextAreaTitle>
                        }
                        if(x.type = 'Text'){
                            return <TextAreaText key={i}></TextAreaText>
                        }
                    })}
                    
                    {/* <TextAreaText></TextAreaText>                     */}
                </div>
            </div>
            
          </div>
     
        </>
    </div>
  
    </>

  )
}
