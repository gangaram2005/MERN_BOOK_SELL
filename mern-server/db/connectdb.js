import mongoose from "mongoose";


// new async and wait use garera connect gareko
const connectDB = async(DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Connected Successfully");
    } catch (error) {
        console.log(error,"it shows error can not connect with database");
    }
}


export default connectDB
