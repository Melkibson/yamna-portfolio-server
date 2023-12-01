const ContactModel = require("../../server/models/Contact");

module.exports = async (req, res) => {
    try {
        const contact = await ContactModel.find({});
        res.json(contact);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};