const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: String,
    position: String,
    email: String,
    phone: String,
    location: String,
    website: String,
  },
  {
    timestamps: true,
  }
);

const eventSchema = new Schema(
  {
    typeOfEvent: {
      type: String,
      required: true,
      enum: [
        "Wishlist",
        "Application in Progress",
        "Application Submitted",
        "Meeting",
        "Phone Interview",
        "First Round Interview",
        "Second Round Interview",
        "Third Round Interview",
        "Final Round Interview",
        "Technical Interview",
        "Assessment",
        "Offer",
        "Application Rejected",
      ],
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const jobSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    jobCategory: String,
    jobListingUrl: String,
    industry: String,
    workStyle: String,
    jobDescription: String,
    qualifications: String,
    location: String,
    companyDescription: String,
    contacts: [contactSchema],
    events: [eventSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
