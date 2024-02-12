import bcrypt from 'bcryptjs';
import generateTokenAndSetCookies from '../utils/generateToken.js';
import User from '../models/user.model.js'


export const signup =async (req,res) =>{
    try {
        const {fullname,username,password,confirmPassword,gender}=req.body;
        if(password !== confirmPassword){
            res.status(400).json({error:`Passwor doesn't match`});
        }
        const user= await User.findOne({username});
        if(user){
            res.status(400).json({error:`username already exits`});
        }
        // hashpassword
        const salt=await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);


        // https://avatar-plcaeholder.iran.liara.run/

        const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlPorfilePic= `https://avatar.iran.liara.run/public/girl?username=${username}`
        const newUser= new User({
            fullname,
            username,
            password:hashedpassword,
            gender,
            profilePic:gender === "male"?boyProfilePic:girlPorfilePic,
        });

        if(newUser){
             generateTokenAndSetCookies(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullname:newUser.fullname,
                username:newUser.username,
                profilePic:newUser.profilePic
            });
        }else{
            res.status(400).json({error:`invalid user data`});
        }

    } catch (error) {
        console.log(`error in signup`);
        res.status(500).json({error:`Internal server error`});
    }
};

export const login = async (req,res) =>{
   try {
    const {username,password } = req.body;
    const user = await User.findOne({username});
    const isValidPassword =await bcrypt.compare(password,user?.password || "");
    if(!user || !isValidPassword){
        res.status(400).json({error:`Invalid credentials`});
    }

    generateTokenAndSetCookies(user._id,res);
    res.status(200).json({
        _id:user._id,
        fullname:user.fullname,
        username:user.username,
        profilePic:user.profilePic
    });

   } catch (error) {
        console.log(`error in login`);
        res.status(500).json({error:`Internal server error`});
   }
};

export const logout = (req,res) =>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:`Logout successfully`});
    } catch (error) {
        
        res.status(500).json({error:`Internal server error`});
    }
};