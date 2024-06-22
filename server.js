import express from "express";
import dotenv from "dotenv";
import { contactRoute } from "./routes/contactRoutes.js";
import { userRoute } from "./routes/userRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { connnectDB } from "./config/dbConnection.js";
dotenv.config();

connnectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({limit: "16kb", extended: true}))

app.get("/", (req, res)=> {
    res.send("Welcome to Contacts-API, follow API documentation for more details.")
});

app.use("/api/contacts", contactRoute)
app.use("/api/users", userRoute)
app.use(errorHandler)


app.listen(PORT, ()=> {
    console.log(`Server is now live`);
})