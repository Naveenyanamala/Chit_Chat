import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js'
import ConnectDB from './db/connectToMongoDB.js';
import cors from 'cors';

dotenv.config();
const app=express();
app.use(cookieParser());
app.use(express.json())
const PORT= process.env.PORT || 5000
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:8000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));


app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

// app.get('/',(req,res) => {
//     console.log('cookies',req.cookies);
//     res.send('check your console');
// })



const start = async () => {
    try {
        app.listen(PORT,()=>{
            ConnectDB(); 
            console.log(`Server running on http://localhost:${PORT}`)
        });
    } catch (error) {
        console.log(error.message);
    }
}
start();