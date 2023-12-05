import "dotenv/config";
import express from "express";
import path from "path";
import cors from "cors";
import { connect } from "mongoose";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());

connect(process.env.MONGO_URI);

import ContactRouter from "./api/ContactRouter.js";
import NavBarRouter from "./api/NavBarRouter.js";
import MainTitleRouter from "./api/MainTitleRouter.js";
import TitleRouter from "./api/TitleRouter.js";
import SkillRouter from "./api/SkillRouter.js";
import ProjectWebRouter from "./api/ProjectWebRouter.js";
import ProjectDesignRouter from "./api/ProjectDesignRouter.js";
import WorkRouter from "./api/WorkRouter.js";
import AuthRouter from "./api/AuthRouter.js";

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "api.html"));
});
app.use("/api/auth", AuthRouter)
app.use("/api/contact", ContactRouter);
app.use("/api/navBar", NavBarRouter);
app.use("/api/maintitle", MainTitleRouter);
app.use("/api/title", TitleRouter);
app.use("/api/skill", SkillRouter);
app.use("/api/projectweb", ProjectWebRouter);
app.use("/api/projectdesign", ProjectDesignRouter);
app.use("/api/work", WorkRouter);
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
