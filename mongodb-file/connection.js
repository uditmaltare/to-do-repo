import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://UditMaltare:us2705@learning-mern.l0apj.mongodb.net/")
        console.log("Database connected")
    } catch (err) {
        console.log('database not connected', err)
        process.exit(1)
    }
} 