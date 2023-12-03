import express from "express";
import Contact from "../models/Contact.js";

const ContactRouter = express.Router();

// Get all contact
ContactRouter.get("/", async (req, res) => {
    try {
        const contact = await Contact.find({});
        res.json(contact);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one contact
ContactRouter.get("/:id", async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.json(contact);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }   
});

// Create one contact
ContactRouter.post("/", async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        ref: req.body.ref,
        color: req.body.color,
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update one contact

ContactRouter.put("/:id", async (req, res) => {
    try {
        const upDatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if(!upDatedContact) return res.status(404).json({message: "Le contact n'a pas été trouvé"});
        res.status(200).json(upDatedContact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete one contact
ContactRouter.delete("/:id", async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if(!deletedContact) return res.status(404).json({message: "Le contact n'a pas été trouvé"});
        res.status(200).json(deletedContact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default ContactRouter;