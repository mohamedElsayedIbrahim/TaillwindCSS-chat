import { createContext, useRef } from 'react';

export const LayoutContext = createContext('');

const sideRef = useRef(null);

const handelSideClick = ()=>{
    if (sideRef.current) {
        alert('test')
    }
}

export const LayoutProvider = ({children})=>{
    return <>
    <LayoutContext.Provider value={{handelSideClick,sideRef}}>
        {children}
    </LayoutContext.Provider>
    </>
}