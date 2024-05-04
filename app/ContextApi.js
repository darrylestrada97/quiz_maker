'use client';

import {createContext, useContext, useState} from "react";

const GlobalContext = createContext();

export function ContextProvider({children}){
    const[ allQuizzes, setAllQuizzes ] = useState([]);
    return(
        <GlobalContext.Provider value={{allQuizzes, setAllQuizzes}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default function useGlobalContext(){
    return useContext(GlobalContext);
}