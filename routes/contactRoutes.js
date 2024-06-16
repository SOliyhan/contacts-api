import express from "express";
import { getContacts, getContact, updateContact, deleteContact, createContact } from "../controllers/contactController.js"
const router = express.Router();

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

export {router};
