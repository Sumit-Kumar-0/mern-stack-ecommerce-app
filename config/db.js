import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to mongoDB database ${conn.connection.host}`);
    } catch(error){
        console.log(`error in mongoDB ${error}`.bgRed.white);
    }
};

export default connectDB;