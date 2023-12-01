const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mainTitleSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const MainTitleModel = mongoose.model("MainTitle", mainTitleSchema);

module.exports = MainTitleModel;
