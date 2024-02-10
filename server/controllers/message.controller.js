import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
export const sendMessage = async (req,res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} =req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        })

        if(!conversation){
            conversation = Conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage = new Message ({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()]);
        res.status(201).json({message:`Message sent succesfully`});

    } catch (error) {
        console.log(`error in send Message`,error.message);
        res.status(500).json({error:`Internal server error`});
    }
}



export const getMessage = async (req,res) => {
    try {
        const {id: userTochatId} =req.params;
        const senderId= req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userTochatId]},
        }).populate("messages");

        if(!conversation){
            res.status(200).json([]);
        }
        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log(`error in getMessage controllers`,error.message);
        res.status(500).json({error:`Internal server error`});
    }
}