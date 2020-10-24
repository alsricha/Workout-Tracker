const express = require ("express");
const mongoose = require ("mongoose");
const morgan = require("morgran");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewURLParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// routes

app.get("/excerise", (req, res) => {
    res.sendFile(path.join(_dirname + "/public/excerise.html"));
});

app.get("stats", (req, res) => {
    res.sendFile(path.join(_dirname + "/public/stats.html"));
});

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});