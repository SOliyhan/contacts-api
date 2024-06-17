import express from "express";
import { registerUser, loginUser, currentUser } from "../controllers/userController.js";
import { validateToken } from "../middlewares/validateTokenHandler.js";
const userRoute = express.Router();

userRoute.post("/register", registerUser);

userRoute.post("/login", loginUser);

userRoute.get("/current", validateToken, currentUser);


export { userRoute };
