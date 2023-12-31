import mongoose from "mongoose";
const Schema = mongoose.Schema;

const projectWebSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  demo: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});

const ProjectWebModel = mongoose.model("Project", projectWebSchema);

export default ProjectWebModel;
