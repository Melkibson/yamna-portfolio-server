import express from "express";
import User from "../models/User.js";
import {generateToken} from "../utils/auth.js";

const AuthRouter = express.Router();

AuthRouter.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        const isValid = await user.isValidPassword(req.body.password);
        if (!isValid) return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        
        const token = generateToken(user._id);
        res.json({ token });

        } catch (err) {
            res.status(500).json({ message: "Impossible de générer le token" });
        }
    });

export default AuthRouter;