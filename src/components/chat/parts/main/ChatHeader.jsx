import { useContext } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { LayoutContext } from "../../../../context/LayoutContext";

export default function ChatHeader() {
  const {handelSideClick} = useContext(LayoutContext);
  
  return <>
  
  <div className="px-20 py-4 h-10/100 flex items-center justify-between border-b border-b-gray-500">
    <div className='flex gap-4 items-center'>
    <img src="https://stage.olxforex.com/build/assets/icon-BfDmm2YD.png" alt="logo" className="w-15" />
    <div>
        <h4>Global Channel</h4>
        <h5>30 online</h5>
    </div>

  </div>
  <div onClick={handelSideClick} className="cursor-pointer block md:hidden">
    <FiMoreVertical />
  </div>
  </div>
  </>
}
