import {createContext, useContext} from "react";
import {holidaysContext} from "./holidaysContext";
import {useFetch} from "../hooks/useFetch";
import {URI_API} from "../const/const";

export const textContext = createContext({});

export const TextContextProvider = ({ children }) => {
    const {holiday} = useContext(holidaysContext);
    const [{text}] = useFetch( holiday ? `${URI_API}text/${holiday}` : '');

    return (
        //Provider pour zapisi données et conserver
        <textContext.Provider value={{text}}>
            {children}
        </textContext.Provider>
    )
}
