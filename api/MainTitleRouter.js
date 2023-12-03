import MainTitle from "../models/MainTitle.js";
import express from "express";
import { authenticateToken } from "../utils/authenticateToken.js";

const MainTitleRouter = express.Router();

MainTitleRouter.get('/', async (req, res) => {
    try {
        const mainTitle = await MainTitle.find({});
        res.json(mainTitle);
    } catch (err) {
        res.status(500).json({ message: "Il n'y aucun titre principal" });
    }
});

MainTitleRouter.get("/:id", async (req, res) => {
  try {
    const mainTitle = await MainTitle.findById(req.params.id);
    res.json(mainTitle);
  } catch (err) {
    res.status(500).json({ message: "Titre principal introuvable" });
  }
});

MainTitleRouter.post("/", authenticateToken, async (req, res) => {
  const mainTitle = new MainTitle({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    position: req.body.position,
    type: req.body.type,
  });

  try {
    const newMainTitle = await mainTitle.save();
    res.status(201).json(newMainTitle);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Impossible de créer un nouveau titre principal" });
  }
});

    MainTitleRouter.put("/:id", authenticateToken, async (req, res) => {
      try {
        const upDatedMainTitle = await Contact.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );

        if (!upDatedMainTitle)
          return res
            .status(404)
            .json({ message: "Le titre principal n'a pas été trouvé" });
        res.status(200).json(upDatedMainTitle);
      } catch (err) {
        res
          .status(500)
          .json({ message: "Impossible de mettre à jour le titre principal" });
      }
    });

    MainTitleRouter.delete("/:id", authenticateToken, async (req, res) => {
      try {
        const deletedMainTitle = await MainTitle.findByIdAndDelete(
          req.params.id
        );
        if (!deletedMainTitle)
          return res
            .status(404)
            .json({ message: "Le titre principal n'a pas été trouvé" });
        res.status(200).json(deletedMainTitle);
      } catch (err) {
        res
          .status(500)
          .json({ message: "Impossible de supprimer le titre principal" });
      }
    });

export default MainTitleRouter;