import Skill from "../models/Skill.js";
import express from "express";
import { authenticateToken } from "../utils/authenticateToken.js";

const SkillRouter = express.Router();

SkillRouter.get('/', async (req, res) => {
    try {
        const skill = await Skill.find({});
        res.json(skill);
    } catch (err) {
        res.status(500).json({ message: "Il n'y a aucune compétence" });
    }
});

SkillRouter.get('/:id', async (req,res) =>{
    try {
        const skill = await Skill.findById(req.params.id);
        res.json(skill);
    } catch (err) {
        res.status(500).json({ message: "Compétence introuvable" });
    }
});

SkillRouter.post("/", authenticateToken, async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    src: req.body.src,
  });
  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: "Impossible de créer la compétence" });
  }
});

SkillRouter.put("/:id", authenticateToken, async (req, res) => {
  const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updatedSkill)
    return res.status(404).json({ message: "Compétence introuvable" });
  res.status(200).json(updatedSkill);
});

SkillRouter.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
    if (!deletedSkill)
      return res.status(404).json({ message: "Compétence introuvable" });
    res.status(200).json(deletedSkill);
  } catch (err) {
    res.status(500).json({ message: "Impossible de supprimer la compétence" });
  }
});

export default SkillRouter;