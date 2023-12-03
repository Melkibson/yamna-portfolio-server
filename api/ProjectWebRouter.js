import ProjectWeb from '../models/ProjectWeb.js';
import express from 'express';
import { authenticateToken } from "../utils/authenticateToken.js";


const ProjectWebRouter = express.Router();

ProjectWebRouter.get('/', async (req, res) => {
    try {
        const projectsWeb = await ProjectWeb.find({});
        res.json(projectsWeb);
    } catch (err) {
        res.status(500).json({ message: "Il n'y a aucun projet web" });
    }
});

ProjectWebRouter.get('/:id', async (req, res) => {
    try {
        const projectWeb = await ProjectWeb.findById(req.params.id);
        res.json(projectWeb);
    } catch (err) {
        res.status(500).json({ message: "Projet introuvable" });
    }
})
ProjectWebRouter.post("/", authenticateToken, async (req, res) => {
  const projectWeb = new ProjectWeb({
    title: req.body.title,
    description: req.body.description,
    demo: req.body.demo,
    src: req.body.src,
  });

  try {
    const newProjectWeb = await projectWeb.save();
    res.status(201).json(newProjectWeb);
  } catch (err) {
    res.status(400).json({ message: "Impossible de créer le projet" });
  }
});
ProjectWebRouter.put("/:id", authenticateToken, async (req, res) => {
  const updatedProjectWeb = await ProjectWeb.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedProjectWeb)
    return res.status(404).json({ message: "Projet introuvable" });
  res.status(200).json(updatedProjectWeb);
});
ProjectWebRouter.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deletedProjectWeb = await ProjectWeb.findByIdAndDelete(req.params.id);
    if (!deletedProjectWeb)
      return res.status(404).json({ message: "Projet introuvable" });
    res.status(200).json(deletedProjectWeb);
  } catch (err) {
    res.status(500).json({ message: "Impossible de supprimer le projet" });
  }
});

export default ProjectWebRouter;