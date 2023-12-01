const ProjectDesignModel = require("../models/ProjectDesign");

module.exports = async (req, res) => {
  try {
    const projectsDesign = await ProjectDesignModel.find({});
    res.json(projectsDesign);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

