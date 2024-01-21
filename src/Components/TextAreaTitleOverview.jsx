import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'

export default function TextAreaTitleOverview() {
    const [textareaHeight, setTextareaHeight] = useState(false)
  
  
    function expandTextAreaTitle(textarea){
      const scrollHeight = textarea.scrollHeight
        if(scrollHeight == 62){
          textarea.style.height = "62px";  
        }else if(scrollHeight < 122 && textareaHeight == 122){
          textarea.style.height = "62px";  
        }else{
          textarea.style.height = "auto";  
          textarea.style.height = textarea.scrollHeight + "px";
        }
      setTextareaHeight(scrollHeight)
  
    }
    return (
      <textarea onInput={(e) => expandTextAreaTitle(e.target)}  className='article-textarea-overview-title article-input' placeholder='Enter Title' spellCheck={false}></textarea>

  
    )
}
