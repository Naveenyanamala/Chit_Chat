import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider  = ({children}) => {
    const[authUSer, setAuthUser] = useState(JSON.parse(localStorage.getItem("Auth-info")) || null )

    return <AuthContext.Provider value={{authUSer,setAuthUser}}>
        {children}
    </AuthContext.Provider>
}