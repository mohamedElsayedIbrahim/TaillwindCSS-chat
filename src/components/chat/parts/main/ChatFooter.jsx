import InputButton from './../../../Ui/InputButton';
import SendButton from '../../../Ui/SendButton';
import { LayoutContext } from './../../../../context/LayoutContext';
import { useContext } from 'react';

export default function ChatFooter() {
  const {handelAwayClick} = useContext(LayoutContext);


  return <>
  
  <div className='mx-10 flex items-center justify-center h-10/100' onClick={handelAwayClick} >

    <div className='flex items-center w-95/100 justify-center rounded-md p-3 gap-3 bg-gray-800'>
        <InputButton />
        <textarea placeholder='Write a Message' className='h-80/100 align-middle table justify-center content-center items-center font-medium outline-0 border-0 w-full resize-none overflow-y-auto text-sm'></textarea>

        <SendButton />
    </div>

  </div>

  </>
}
