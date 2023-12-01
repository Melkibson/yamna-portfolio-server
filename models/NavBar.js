const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const navBarSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const NavBarModel = mongoose.model("NavBar", navBarSchema);

module.exports = NavBarModel;
