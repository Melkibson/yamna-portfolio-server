import Title from "../models/Title.js";
import express from "express";
import { authenticateToken } from "../utils/authenticateToken.js";

const TitleRouter = express.Router();

TitleRouter.get('/', async (req, res) => {
    try {
        const title = await Title.find({});
        res.json(title);
    } catch (err) {
        res.status(500).json({ message: "Aucun titre trouvé" });
    }
});

TitleRouter.get('/:id', async (req,res) =>{
    try {
        const title = await Title.findById(req.params.id);
        res.json(title);
    } catch (err) {
        res.status(500).json({ message: "Titre introuvable" });
    }
})

TitleRouter.post("/", authenticateToken, async (req, res) => {
  const title = new Title({
    name: req.body.name,
  });
  try {
    const newTitle = await title.save();
    res.status(201).json(newTitle);
  } catch (err) {
    res.status(400).json({ message: "Impossible de créer le titre" });
  }
});

TitleRouter.put("/:id", authenticateToken, async (req, res) => {
  const updatedTitle = await Title.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updatedTitle)
    return res.status(404).json({ message: "Titre introuvable" });
  res.status(200).json(updatedTitle);
});

TitleRouter.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deletedTitle = await Title.findByIdAndDelete(req.params.id);
    if (!deletedTitle)
      return res.status(404).json({ message: "Titre introuvable" });
    res.status(200).json(deletedTitle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
export default TitleRouter;