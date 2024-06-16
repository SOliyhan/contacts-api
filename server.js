import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/contactRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { connnectDB } from "./config/dbConnection.js";
dotenv.config();

connnectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({limit: "16kb", extended: true}))

app.use("/api/contacts", router)
app.use(errorHandler)


app.listen(PORT, ()=> {
    console.log(`Server running on port http://localhost:${PORT}`);
})