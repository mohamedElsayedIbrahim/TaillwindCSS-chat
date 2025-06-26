import Base from "../layout/Base";
import Side from "./parts/side/Side";
import Main from "./parts/main/Main";
import { LayoutProvider } from "../../context/LayoutContext";
import { MessageProvider } from "../../context/MessageContext";

export default function Chat() {
  return (
    <>
      <LayoutProvider>
        <Base>
          <MessageProvider>
            <Side />
            <Main />
          </MessageProvider>
        </Base>
      </LayoutProvider>
    </>
  );
}
