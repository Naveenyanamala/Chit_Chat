import User from "../models/user.model.js";

export const getUserForSideBar = async(req,res) => {
    try {
        const loginUserId= req.user._id;
        const allUsers = await User.find({_id:{$ne:loginUserId}}).select("-password");
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(`Error at getting user for sideBar`,error.message);
        res.status(401).json({error:`Internal server Error`});
    }
}