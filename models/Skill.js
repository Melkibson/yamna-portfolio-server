import mongoose from "mongoose";
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});

const SkillModel = mongoose.model("Skill", skillSchema);

export default SkillModel;
