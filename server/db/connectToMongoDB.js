import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URL);
        console.log(`Connected to mongoDB`);
    } catch (error) {
        console.log(error);
    }
}

export default ConnectDB;