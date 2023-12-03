import "dotenv/config";
import express from "express";
import cors from "cors";
import { connect } from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

import ContactRouter from "./api/ContactRouter.js";
import NavBarRouter from "./api/NavBarRouter.js";
import MainTitleRouter from "./api/MainTitleRouter.js";
import TitleRouter from "./api/TitleRouter.js";
import SkillRouter from "./api/SkillRouter.js";
import ProjectWebRouter from "./api/ProjectWebRouter.js";
import ProjectDesignRouter from "./api/ProjectDesignRouter.js";
import WorkRouter from "./api/WorkRouter.js";

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
