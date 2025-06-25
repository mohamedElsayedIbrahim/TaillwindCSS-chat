import { IoSend } from "react-icons/io5";

export default function SendButton(props) {
  return <>
  
  <button onClick={props.eventClick} className="cursor-pointer px-7 overflow-hidden text-sm font-medium transition-transform rounded group text text-gray-400 bg-transparent hover:text-white">
  <span><IoSend /></span>
</button>

  </>
}
