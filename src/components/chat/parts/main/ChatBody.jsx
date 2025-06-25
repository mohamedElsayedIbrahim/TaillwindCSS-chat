import { useContext, useEffect, useState } from "react";
import { LayoutContext } from "../../../../context/LayoutContext";
import MessageBox from "./MessageBox";
import { MessageContext } from "../../../../context/MessageContext";

export default function ChatBody({user}) {
  const { handelAwayClick } = useContext(LayoutContext);
  const {messages} = useContext(MessageContext);
  




  return <>
    <div className='px-20 py-4 h-80/100'>

      <div onClick={handelAwayClick} className="chatContainer">

        {messages.map((message,index)=>
          <MessageBox key={index} message={message} messagePostaion={message.email === 'mlovely9316@gmail.com' ? "newMessegeMy": "newMessegeOther"} />
        )}

      </div>
    </div>
  </>
}
