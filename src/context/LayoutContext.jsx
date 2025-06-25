import { createContext} from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const LayoutContext = createContext('');

const handelSideClick = ()=>{
    if (document.getElementById('sideRef').dataset.show === '0') {
        document.getElementById('sideRef').style.display='flex';
        document.getElementById('sideRef').style.position='absolute';
        document.getElementById('sideRef').style.top='0';
        document.getElementById('sideRef').style.left='0';
        document.getElementById('sideRef').style.bottom='0';
        document.getElementById('sideRef').dataset.show='1';
    } else{
        document.getElementById('sideRef').removeAttribute('style')
        document.getElementById('sideRef').dataset.show='0';

    }
}

const handelAwayClick = ()=>{
    if (document.getElementById('sideRef').dataset.show === '1') {
        document.getElementById('sideRef').removeAttribute('style');
        document.getElementById('sideRef').dataset.show='0';
    }
}

export const LayoutProvider = ({children})=>{
    return <>
    <LayoutContext.Provider value={{handelSideClick,handelAwayClick}}>
        {children}
    </LayoutContext.Provider>
    </>
}