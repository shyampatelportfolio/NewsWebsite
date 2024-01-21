import React from 'react'
import useDrag from '../Hooks/useDrag';
import { useRef, useEffect, useState } from 'react'
import { useAction } from '../Context/ActionsContext';

export default function ActionBar() {
  const layerRef = useRef(null);
  const {action, setAction} = useAction()

  useEffect(() => {

  }, [action])


  const [handleMouseDownDrag, cancelDrag, enableDrag] = useDrag(layerRef)
  function handleMouseDown(e){
    handleMouseDownDrag(e)
  }
  return (
    
    <div ref={layerRef} className="actionbar">
      <div onMouseDown={handleMouseDown}  className="actionbar-dragger">
        <img src="/Svg/ActionBarDrag.svg" alt="" draggable={false} />
      </div>
        {action.dispatch !== 'previewActive' &&
          <>
            <div onClick={() => setAction({dispatch : 'addTitle'})} className="actionbar-action">Add Title</div>
            <div onClick={() => setAction({dispatch : 'addText'})} className="actionbar-action">Add Text</div>
            <div onClick={() => setAction({dispatch : 'preview'})} className="actionbar-action">Preview</div>
          </>
        }
         {action.dispatch == 'previewActive' &&
          <>
            <div onClick={() => setAction({dispatch : 'submit'})} className="actionbar-action">Submit</div>
            <div onClick={() => setAction({dispatch : 'cancelPreview'})} className="actionbar-action">Cancel Preview</div>
          </>
        }
    </div>
  )
}
