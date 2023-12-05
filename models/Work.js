import mongoose from "mongoose";
const Schema = mongoose.Schema;

const workSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  colorDark: {
    type: String,
    required: true,
  },
  colorLight: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  period: {
    startMonth: {
      type: String,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
    },
    startYear: {
      type: String,
      required: true,
    },
    endYear: {
      type: String,
      required: false,
    },
  },
  tech: {
    type: String,
    required: true,
  },
  hasProject: {
    type: Boolean,
    required: true,
  },
  links: {
    color: {
      type: String,
      required: true,
    },
    name: [
      {
        type: String,
        required: true,
      },
    ],
    link: [
      {
        type: String,
        required: true,
      },
    ],
  },
});

const WorkModel = mongoose.model("Work", workSchema);

export default WorkModel;
