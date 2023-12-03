import MainTitle from "../models/MainTitle.js";
import express from "express";

const MainTitleRouter = express.Router();

MainTitleRouter.get('/', async (req, res) => {
    try {
        const mainTitle = await MainTitle.find({});
        res.json(mainTitle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

MainTitleRouter.get("/:id", async (req, res) => {
  try {
    const mainTitle = await MainTitle.findById(req.params.id);
    res.json(mainTitle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

MainTitleRouter.post("/", async (req, res) => {
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
        res.status(400).json({ message: err.message });
    }
    });

    MainTitleRouter.put("/:id", async (req, res) => {
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
        res.status(500).json({ message: err.message });
      }
    });

    MainTitleRouter.delete("/:id", async (req, res) => {
      try {
        const deletedMainTitle = await MainTitle.findByIdAndDelete(req.params.id);
        if (!deletedMainTitle)
          return res
            .status(404)
            .json({ message: "Le titre principal n'a pas été trouvé" });
        res.status(200).json(deletedMainTitle);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });

export default MainTitleRouter;