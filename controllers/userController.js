import expressAsyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// Register a user
// @route POST /api/users/register
// access public
const registerUser = expressAsyncHandler(async(req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are required")
    }

    const userAvailable = await User.findOne({email});
    if (userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    
    if (user){
        res.status(201).json({ _id: user.id, email: user.email });
    }
    else {
        res.status(400);
        throw new Error("User data is not valid");
    }
});


// Login user
// @route POST /api/users/login
// access public
const loginUser = expressAsyncHandler(async (req, res) => {
    
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }
    
    const user = await User.findOne({email});
    // compare password with hashed password
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "3m"}
        );
        res.status(200).json({accessToken});
    }
    else {
        res.status(401);
        throw new Error("email or password is invalid")
    }
});


// Current user
// @route GET /api/users/current
// access private
const currentUser = expressAsyncHandler(async (req, res) => {
    res.json(req.user);
});


export {registerUser, loginUser, currentUser }