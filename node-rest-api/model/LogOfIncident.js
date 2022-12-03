const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let LogOfIncident = new Schema(
  {
    name: {
      type: String,
    },
    date: {
      type: String,
    },
    narrative: {
      type: String,
    },
    priority: {
      type: String,
    },
    status: {
      type: String,
    },
    incidentId:{
      type: String,
    },
    description:{
      type: String,
    },
    duration:{
      type:String,
    },
    modificationTime:{
        type:String,
    }
  },
  {
    collection: "logOfIncidents",
  }
);

module.exports = mongoose.model("LogOfIncident", LogOfIncident);
