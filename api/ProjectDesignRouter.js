import ProjectDesign from "../models/ProjectDesign.js";
import express from "express";
import { authenticateToken } from "../utils/authenticateToken.js";

const ProjectDesignRouter = express.Router();

ProjectDesignRouter.get('/', async (req, res) => {
  try {
    const projectsDesign = await ProjectDesign.find({});
    res.json(projectsDesign);
  } catch (err) {
    res.status(500).json({ message: "Il n'y a aucun projet design" });
  }
});

ProjectDesignRouter.get('/:id', async (req, res) => {
  try {
    const projectDesign = await ProjectDesign.findById(req.params.id);
    res.json(projectDesign);
  } catch (err) {
    res.status(500).json({ message: "Projet introuvable" });
  }
});

ProjectDesignRouter.post("/", authenticateToken, async (req, res) => {
  const projectDesign = new ProjectDesign({
    logoName: req.body.logoName,
    description: req.body.description,
    demo: req.body.demo,
    src: req.body.src,
  });

  try {
    const newProjectDesign = await projectDesign.save();
    res.status(201).json(newProjectDesign);
  } catch (err) {
    res.status(400).json({ message: "Impossible de créer le projet" });
  }
});

ProjectDesignRouter.put("/:id", authenticateToken, async (req, res) => {
  const updatedProjectDesign = await ProjectDesign.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedProjectDesign)
    return res.status(404).json({ message: "Projet introuvable" });
  res.status(200).json(updatedProjectDesign);
});

ProjectDesignRouter.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deletedProjectDesign = await ProjectDesign.findByIdAndDelete(
      req.params.id
    );
    if (!deletedProjectDesign)
      return res.status(404).json({ message: "Projet introuvable" });
    res.status(200).json(deletedProjectDesign);
  } catch (err) {
    res.status(500).json({ message: "Impossible de supprimer le projet" });
  }
});

export default ProjectDesignRouter;