import mongoose from "mongoose";

//Function to connect to db

export const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected', ()=> console.log('DataBase Connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}`)

    } catch (error) {
       console.error("MongoDB Error:", error.message);
process.exit(1);
    }
}