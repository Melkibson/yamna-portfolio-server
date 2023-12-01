const MainTitleModel = require("../models/MainTitle");

module.exports = async (req, res) => {
    try {
        const mainTitle = await MainTitleModel.find({});
        res.json(mainTitle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

