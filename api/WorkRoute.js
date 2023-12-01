const WorkModel = require("../../server/models/Work");

module.exports = async (req, res) => {
  try {
    const work = await WorkModel.find({});
    res.json(work);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
