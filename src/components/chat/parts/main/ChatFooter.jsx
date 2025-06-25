import InputButton from './../../../Ui/InputButton';
import SendButton from '../../../Ui/SendButton';
import { LayoutContext } from './../../../../context/LayoutContext';
import { useContext } from 'react';
import { MessageContext } from '../../../../context/MessageContext';

export default function ChatFooter() {
  const {handelAwayClick} = useContext(LayoutContext);
  const {handleChatMessage, sendMessage,handleEnterKeyPress, chatMessage} = useContext(MessageContext);




  return <>
  
  <div className='mx-10 flex items-center justify-center h-10/100' onClick={handelAwayClick} >

    <div className='flex items-center w-95/100 justify-center rounded-md p-3 gap-3 bg-gray-800'>
        <InputButton/>
        <textarea placeholder='Write a Message' value={chatMessage} onKeyDown={handleEnterKeyPress} onChange={(event)=>handleChatMessage(event)} className='h-80/100 align-middle table justify-center content-center items-center font-medium outline-0 border-0 w-full resize-none overflow-y-auto text-sm'></textarea>

        <SendButton eventClick={sendMessage} />
    </div>

  </div>

  </>
}
