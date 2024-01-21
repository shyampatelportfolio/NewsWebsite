import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'

export default function TextAreaText() {
  const [textareaHeight, setTextareaHeight] = useState(false)
  function expandTextAreaText(textarea){
    const scrollHeight = textarea.scrollHeight
      if(scrollHeight == 17){
        textarea.style.height = "17px";  
      }else if(scrollHeight < 29 && textareaHeight == 29){
        textarea.style.height = "17px";  
      }else{
        textarea.style.height = "auto";  
        textarea.style.height = textarea.scrollHeight + "px";
      }
    setTextareaHeight(scrollHeight)

  }
  return (
    <textarea onInput={(e) => expandTextAreaText(e.target)} className='article-textarea-text article-input' placeholder='Description' spellCheck={false}></textarea>

  )
}
