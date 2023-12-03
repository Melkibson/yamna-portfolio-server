import Work from "../models/Work.js";
import express from "express";

const WorkRouter = express.Router();

WorkRouter.get('/',async (req, res) => {
  try {
    const work = await Work.find({});
    res.json(work);
  } catch (err) {
    res.status(500).json({ message: "Il n'y a aucune expérience" });
  }
});

WorkRouter.get('/:id', async (req, res) => { 
  try {
    const work = await Work.findById(req.params.id);
    res.json(work);
  } catch (err) {
    res.status(500).json({ message: "Expérience introuvable" });
  }
});

WorkRouter.post('/', async (req, res) => {
  const work = new Work({
    location: {
      city: req.body.location.city,
      country: req.body.location.country,
    },
    period : {
      startMonth: req.body.period.startMonth,
      endMonth: req.body.period.endMonth,
      startYear: req.body.period.startYear,
      endYear: req.body.period.endYear,
    },
    links : {
      color: req.body.links.color,
      name: req.body.links.name,
      link: req.body.links.link,
    },
      company: req.body.company,
      colorDark: req.body.colorDark,
      colorLight: req.body.colorLight,
      type: req.body.type,
      position: req.body.position,
      tech: req.body.tech,
      hasProject: req.body.hasProject,
  });
  try {
    const newWork = await work.save();
    res.status(201).json(newWork);
  } catch (err) {
    res.status(400).json({ message: "Impossible de créer une nouvelle expérience" });
  }
});

WorkRouter.put("/:id", async (req, res) => {
  try {
    const upDatedWork = await Work.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!upDatedWork)
      return res
        .status(404)
        .json({ message: "Cette expérience n'a pas été trouvée" });
    res.status(200).json(upDatedWork);
  } catch (err) {
    res.status(500).json({ message: "Impossible de mettre à jour l'expérience" });
  }
});

WorkRouter.delete("/:id", async (req, res) => {
  try {
    const deletedWork = await Work.findByIdAndDelete(req.params.id);
    if (!deletedWork)
      return res
        .status(404)
        .json({ message: "Cette expérience n'a pas été trouvée" });
    res.status(200).json(deletedWork);
  } catch (err) {
    res.status(500).json({ message: "Impossible de supprimer l'expérience" });
  }
});

export default WorkRouter;