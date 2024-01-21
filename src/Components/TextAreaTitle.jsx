import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'

export default function TextAreaTitle() {
  const [textareaHeight, setTextareaHeight] = useState(false)
  
  
  function expandTextAreaTitle(textarea){
    const scrollHeight = textarea.scrollHeight
      if(scrollHeight == 35){
        textarea.style.height = "35px";  
      }else if(scrollHeight < 63 && textareaHeight == 63){
        textarea.style.height = "35px";  
      }else{
        textarea.style.height = "auto";  
        textarea.style.height = textarea.scrollHeight + "px";
      }
    setTextareaHeight(scrollHeight)

  }
  return (
    <textarea onInput={(e) => expandTextAreaTitle(e.target)} className='article-textarea-title article-input' placeholder='Subtitle' spellCheck={false}></textarea>

  )
}
