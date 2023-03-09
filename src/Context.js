import {useState, createContext} from 'react';
import Infocard from './components/infocard/infocard';
const Context = createContext();

export function ContextProvider({children}) {
    const [item, setItem] = useState(<Infocard/>);
    const setContextItem = (item) => {
        setItem(item);
    }
    return (
        <Context.Provider value={{item, setContextItem}}>{children}</Context.Provider>
    )
}

export default Context;