const SkillModel = require("../../server/models/Skill");

module.exports = async (req, res) => {
    try {
        const skill = await SkillModel.find({});
        res.json(skill);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};