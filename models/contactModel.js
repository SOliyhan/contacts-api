import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact name"]
    },
    email: {
        type: String,
        unique: true.valueOf,
        required: [true, "Please add the contact email"]
    },
    phone: {
        type: String,
        unique: true,
        required: [true, "Please add the contact phone number"]
    },
}, 
{
    timestamps: true
})

export const Contact = mongoose.model("Contact", contactSchema)