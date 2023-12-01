require("dotenv").config({ path: "../.env" });

console.log(process.env.MONGO_URI);
const mongoose = require("mongoose");
const fs = require("fs");

const NavBarModel = require("../models/NavBar");
const MainTitleModel = require("../models/MainTitle");
const TitleModel = require("../models/Title");
const SkillModel = require("../models/Skill");
const ProjectWebModel = require("../models/ProjectWeb");
const ProjectDesignModel = require("../models/ProjectDesign");
const ContactModel = require("../models/Contact");
const WorkModel = require("../models/Work");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDatabase = async () => {
  try {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    await NavBarModel.deleteMany({});
    await MainTitleModel.deleteMany({});
    await TitleModel.deleteMany({});
    await SkillModel.deleteMany({});
    await ProjectWebModel.deleteMany({});
    await ProjectDesignModel.deleteMany({});
    await ContactModel.deleteMany({});
    await WorkModel.deleteMany({});

    await NavBarModel.create(data.navBar);
    await MainTitleModel.create(data.mainTitle);
    await TitleModel.create(data.title);
    await SkillModel.create(data.skill);
    await ProjectWebModel.create(data.project);
    await ProjectDesignModel.create(data.design);
    await ContactModel.create(data.contact);
    await WorkModel.create(data.work);

    console.log("Database seeded!");
  } catch (err) {
    console.log("Error seeding", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
