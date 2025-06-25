import { useRef } from 'react'
import { FiPaperclip } from 'react-icons/fi';

export default function InputButton() {
    
    
    const MediaImageFile = useRef(null);

    const handelButtonMediaClikc = ()=>{
        MediaImageFile.current?.click();
    }
  return <>
  <button onClick={handelButtonMediaClikc} className="px-7 overflow-hidden text-sm font-medium transition-transform rounded group text text-gray-400 bg-transparent hover:text-white cursor-pointer ">
  <span><FiPaperclip /></span>
  <input type="file" className='hidden' ref={MediaImageFile} accept='image/*'/>
</button>
  </>
}
