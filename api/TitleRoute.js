const TitleModel = require("../../server/models/Title");

module.exports = async (req, res) => {
    try {
        const title = await TitleModel.find({});
        res.json(title);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};