import express from "express";
import { getContacts, getContact, updateContact, deleteContact, createContact } from "../controllers/contactController.js"
import { validateToken } from "../middlewares/validateTokenHandler.js";
const contactRoute = express.Router();
  
contactRoute.use(validateToken);
contactRoute.route("/").get(getContacts).post(createContact);

contactRoute.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

export { contactRoute };
