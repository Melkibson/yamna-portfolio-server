import NavBar from "../models/NavBar.js";
import express from "express";
import { authenticateToken } from "../utils/authenticateToken.js";

const NavBarRouter = express.Router();

NavBarRouter.get('/',async (req, res) => {
    try {
        const navBar = await NavBar.find({});
        res.json(navBar);
    } catch (err) {
        res.status(500).json({ message: "Il n'y a aucune navigation" });
    }
});

NavBarRouter.get('/:id', async (req, res) => {
    try {
        const navBar = await NavBar.findById(req.params.id);
        res.json(navBar);
    } catch (err) {
        res.status(500).json({ message: "Navigation introuvable" });
    }
});

NavBarRouter.post("/", authenticateToken, async (req, res) => {
  const navBar = new NavBar({
    name: req.body.name,
    link: req.body.link,
  });
  try {
    const newNavItem = await navBar.save();
    res.status(201).json(newNavItem);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Impossible de créer un nouvel élément de navigation" });
  }
});

NavBarRouter.put("/:id", authenticateToken, async (req, res) => {
  const updatedNavBar = await NavBar.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedNavBar)
    return res.status(404).json({ message: "Navigation introuvable" });
  res.status(200).json(updatedNavBar);
});

NavBarRouter.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deletedNavBar = await NavBar.findByIdAndDelete(req.params.id);
    if (!deletedNavBar)
      return res.status(404).json({ message: "Navigation introuvable" });
    res.status(200).json(deletedNavBar);
  } catch (err) {
    res.status(500).json({ message: "Impossible de supprimer la navigation" });
  }
});

export default NavBarRouter;