import { useContext } from "react";
import { LayoutContext } from "../../../../context/LayoutContext";

export default function ChatBody() {
  const {handelAwayClick} = useContext(LayoutContext);

  return <>
  <div className='px-20 py-4 h-80/100' onClick={handelAwayClick}>

    

  </div>
  </>
}
