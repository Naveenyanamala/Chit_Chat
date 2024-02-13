import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading,setloading] = useState(false);
    const {setAuthUser} = useAuthContext();
    
    const login = async (username,password) => {
        const success= handleError(username,password)

        if(!success) return
        setloading(true)
        try {
            const res= await fetch("/api/auth/login",{
                method:'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username,password})
            });

            const data = await res.json();

            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("Auth-info",JSON.stringify(data));
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message);
        }finally{
            setloading(false);
        }
    }

    return {loading,login};
}

export default useLogin


function handleError (username,password) {
    if(!username || !password){
        toast.error('please fill all the fields');
        return false;
    }
    return true;
}