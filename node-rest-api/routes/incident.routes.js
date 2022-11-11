const express = require("express");
const app = express();

const incidentRoute = express.Router();
let Incident = require("../model/Incident");

// Add Incident
incidentRoute.route("/add-incident").post((req, res, next) => {
  Incident.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Incident
incidentRoute.route("/").get((req, res) => {
  Incident.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Incident
incidentRoute.route("/read-incident/:id").get((req, res) => {
  Incident.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Incident
incidentRoute.route("/update-incident/:id").put((req, res, next) => {
  Incident.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Incident updated successfully!");
      }
    }
  );
});

// Delete Incident
incidentRoute.route("/delete-incident/:id").delete((req, res, next) => {
  Incident.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = incidentRoute;
