import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

export default function Main() {

  return <>
  <div className="h-full w-full">
    <ChatHeader />
    <ChatBody />
    <ChatFooter />
  </div>
  </>
}
