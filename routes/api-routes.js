const router = require("express").Router();
const { Workout } = require("../models/index.js");
const workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});