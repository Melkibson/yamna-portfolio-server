const NavBarModel = require("../models/NavBar");

module.exports = async (req, res) => {
    try {
        const navBar = await NavBarModel.find({});
        res.json(navBar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
