import Base from "../layout/Base";
import Side from './parts/side/Side';
import Main from './parts/main/Main';
import { LayoutProvider } from "../../context/LayoutContext";

export default function Chat() {
    return <>
        <LayoutProvider>
            <Base>
                <Side />
                <Main />
            </Base>
        </LayoutProvider>


    </>
}
