import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number
}, { timestamps: true })
export const Student = mongoose.model('Student', studentSchema)