const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config('./.env');

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const contactRoute = require("./api/ContactRoute");
const navBarRoute = require("./api/NavBarRoute");
const mainTitleRoute = require("./api/MainTitleRoute");
const titleRoute = require("./api/TitleRoute");
const skillRoute = require("./api/SkillRoute");
const projectWebRoute = require("./api/ProjectWebRoute");
const projectDesignRoute = require("./api/ProjectDesignRoute");
const workRoute = require("./api/WorkRoute");

app.use('/api/contact', contactRoute);
app.use('/api/navBar', navBarRoute);
app.use('/api/mainTitle', mainTitleRoute);
app.use('/api/title', titleRoute);
app.use('/api/skill', skillRoute);
app.use('/api/projectWeb', projectWebRoute);
app.use('/api/projectDesign', projectDesignRoute);
app.use('/api/work', workRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

