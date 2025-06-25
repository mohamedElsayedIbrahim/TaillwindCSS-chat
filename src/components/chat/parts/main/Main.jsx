import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { MessageProvider } from "../../../../context/MessageContext";

export default function Main() {

  return <>
  <div className="h-full w-full">
    <ChatHeader />
    <MessageProvider>
      <ChatBody />
      <ChatFooter />
    </MessageProvider>
    
  </div>
  </>
}
