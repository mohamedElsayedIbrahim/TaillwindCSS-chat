import { useContext, useEffect, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { LayoutContext } from "../../../../context/LayoutContext";
import { FaCircle } from "react-icons/fa";

export default function ChatHeader() {
  const {handelSideClick} = useContext(LayoutContext);
  const [onlineUsersCount, setOnlineUsersCount] = useState(0);
  

  const updateOnlineUsersCount = (users) => {
    setOnlineUsersCount(users);
  };


  useEffect(()=>{
    setInterval(() => {
      const random = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
      // console.log(random);
      updateOnlineUsersCount(random);
    }, 60000);
  })

  return <>
  
  <div className="px-20 py-4 h-10/100 flex items-center justify-between border-b border-b-gray-500">
    <div className='flex gap-4 items-center'>
    <img src="https://stage.olxforex.com/build/assets/icon-BfDmm2YD.png" alt="logo" className="w-15" />
    <div>
        <h4>Global Channel</h4>
        <h5>{onlineUsersCount} online <FaCircle  className="inline text-emerald-400"/></h5>
    </div>

  </div>
  <div onClick={handelSideClick} className="cursor-pointer block md:hidden">
    <FiMoreVertical />
  </div>
  </div>
  </>
}
