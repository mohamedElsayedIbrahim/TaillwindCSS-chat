import { useContext, useEffect, useRef } from "react";
import { LayoutContext } from "../../../../context/LayoutContext";
import MessageBox from "./MessageBox";
import { MessageContext } from "../../../../context/MessageContext";
import './style/chat.css';

export default function ChatBody() {
  const { handelAwayClick } = useContext(LayoutContext);
  const {messages,user} = useContext(MessageContext);

  const scrollBottom = useRef(null);

  const scrollToBottom = () => {
    scrollBottom.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(()=>{
    scrollToBottom();
  },[messages])

  return <>
    <div className='px-20 py-4 h-80/100 overflow-y-scroll scroll-custom'>

      <div onClick={handelAwayClick} className="chatContainer">

        {messages.map((message,index)=>
          <MessageBox key={index} message={message} messagePostaion={message.email === user.email ? "newMessegeMy": "newMessegeOther"} />
        )}

      </div>

      <div ref={scrollBottom}></div>
    </div>
  </>
}
