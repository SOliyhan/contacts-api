import expressAsyncHandler from "express-async-handler";
import { Contact } from "../models/contactModel.js";
import { errorHandler } from "../middlewares/errorHandler.js";


// get all contacts
// @route GET /api/contacts
// access public
const getContacts = expressAsyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
})

// create new contact
// @route POST /api/contacts
// access public
const createContact = expressAsyncHandler(async(req, res) => {
    console.log("The request body is:", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) 
        {
            res.status(400);
            throw new Error("All fields are mandatory");
        }
    
    const contact = await Contact.create({
        name, 
        email,
        phone,
    });
    res.status(201).json(contact);
})

// update contact
// @route PUT /api/contacts/:id
// access public
const updateContact = expressAsyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true }
    )
    res.status(200).json(updatedContact)
})

// delete contact
// @route DELETE /api/contacts/:id
// access public
const deleteContact = expressAsyncHandler(async(req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(contact)
})

// get contact
// @route GET /api/contacts/:id
// access public
const getContact = expressAsyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
})


export { getContacts, createContact, updateContact, deleteContact, getContact }





