import { createContext } from "react";

export const UserContext = createContext();

const ContextProvider = ({children}) => {
    const number = ['linked-in@gmail.com','08123456789'];
    return(
        <UserContext.Provider value={number}>
            {children}
        </UserContext.Provider>
    )
};

export default ContextProvider;