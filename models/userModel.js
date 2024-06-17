import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is mandatory"]
    },
    email: {
        type: String,
        required: [true, "email is mandatory"],
        unique: [true, "email address already in use"]
    },
    password: {
        type: String,
        required: [true, "password is mandatory"]
    },

}, 
{
    timestamps: true
})

export const User = mongoose.model("User", userSchema)