const router = require("express").Router();
const { Workout } = require("../models/index.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(params.id, {$push: {excerise: body}},
        {new: true, runValidators: true})
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(400).json(err);
        });
});

