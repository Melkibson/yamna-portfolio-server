import mongoose from "mongoose";
const Schema = mongoose.Schema;

const titleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const TitleModel = mongoose.model("Title", titleSchema);

export default TitleModel;
