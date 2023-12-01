const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectDesignSchema = new Schema({
  logoName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  demo: {
    type: String,
    required: false, // Assuming 'demo' can be empty
  },
  src: {
    type: String,
    required: true,
  },
});

const ProjectDesignModel = mongoose.model("Design", projectDesignSchema);

module.exports = ProjectDesignModel;
