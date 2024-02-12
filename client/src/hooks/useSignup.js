import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading,setloading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const signup = async({fullName,username,password,confirmPassword,gender}) => {
        const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
        if(!success) return;


        setloading(true);

        try {
            const res = await fetch("http://localhost:8000/api/auth/signup",{
                method: 'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({fullname:fullName,username,password,confirmPassword,gender})
            });
            console.log(res);
            const data = await res.json();
            console.log(data);

            if(data.error){
                throw new Error(data.error);
            }
            // local storage using
            // context
            localStorage.getItem("Auth-info",JSON.stringify(data));
            setAuthUser(data);
            
        } catch (error) {
            toast.error(error.message);
        }finally{
            setloading(false);
        }
    };

   return {loading, signup};
};

export default useSignup;


function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender ){
        toast.error('Please fill all the fields');
        return false;
    }

    if(password !== confirmPassword){
        toast.error('Password not Matched');
        return false;
    }

    if(password.length<6){
        toast.error('password must be at least 6 characters');
        return false;
    }
    return true;
};
   