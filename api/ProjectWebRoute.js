const ProjectWebModel = require('../models/ProjectWeb');

module.exports = async (req, res) => {
    try {
        const projectsWeb = await ProjectWebModel.find({});
        res.json(projectsWeb);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

